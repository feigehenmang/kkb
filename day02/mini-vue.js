function defineReactive(obj, key, val) {
    const dep = new Dep();
    observer(val); // 当val是对象时进行劫持
    // 遍历单个节点进行劫持
    Object.defineProperty(obj, key, {
        get() {
            // 闭包中将val 缓存
            // console.log('getter', val);
            Dep.target && dep.addDep(Dep.target);
            return val;
        },
        set(newVal) {
            if(newVal !== val) {
                // 当newVal为对象时对newVal进行劫持
                observer(newVal);
                // console.log('setter', val);
                val = newVal;
                dep.notify();
            }
        }
    })
}
// 对对象每个节点进行便利劫持
function observer(obj) {
    if(typeof obj !== 'object' || obj == null) {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function set(obj, key, val) {
    defineReactive(obj,key, val);
}

function proxy(vm) {
    Object.keys(vm.$data).forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key];
            },
            set(newVal) {
                vm.$data[key] = newVal;
            }
        })
    });
    Object.keys(vm.$methods).forEach(key => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$methods[key];
            },
            set(newVal) {
                vm.$methods[key] = newVal;
            }
        })
    });
}
class Vue {
    constructor(options) {
        this.$options = options;
        this.$data = options.data;
        this.$methods = options.methods;
        
        
        // 数据响应式
        observer(this.$data);
        // 代理
        proxy(this)
        // method bind
        this.methodsBind();
        // 编译
        new Compile(options.el, this);
    }
    methodsBind() {
        Object.keys(this.$methods).forEach(key => {
            this.$methods[key].bind(this);
        })
    }
}
const nodeType = {
    element: 1,
    text: 3
}
class Compile {
    constructor(el, vm) {
        this.el = document.querySelector(el);
        this.vm = vm;
        this.compile(this.el);
    }
    compile(el) {
        el.childNodes.forEach(node => {
            if(this.isElement(node)) {
                this.compileElement(node, this.vm);
            } else if(this.isInterPolation(node)) {
                // console.log(node.textContent);
                this.compileText(node, this.vm);
            }
            if(node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }
    compileElement(node, vm) {
        const attrs = node.attributes;
        Array.from(attrs).forEach(attr => {
            const {name: attrName, value: exp} = attr;
            if(this.isDirective(attrName)) {
                const fnName = attrName.substring(2);
                if(fnName === 'model') {
                    // 双向绑定
                    // 值绑定
                    this.value(node, this.vm, exp);
                    // 事件绑定
                    this.eventBind(node, 'on:change', 'handleChange', vm);
                } else {
                    this[fnName] && this[fnName](node, this.vm, exp);
                }
            } else if(this.isEvent(attrName)) {
                this.eventBind(node, attrName, exp, vm);
            }
        })
    }

    eventBind(node, attrName, exp, vm) {
        const evName = attrName.substring(3);
        node.addEventListener(evName, function(event) {
            vm[exp].call(vm, event)
        })
    }
    update(node, exp, vm, dir) {
        // 初始化执行
        const fn = this[dir + 'Updater'];
        fn && fn(node, vm[exp]);
        // Watcher
        fn && new Watcher(vm, exp, function(val) {
            fn(node, val);
        });
    }
    text(node, vm, exp) {
        this.update(node, exp, vm, 'text');
    }
    html(node, vm, exp) {
        this.update(node, exp, vm, 'html');
    }
    value(node, vm, exp) {
        this.update(node, exp, vm, 'value');
    }

    valueUpdater(node, val) {
        node.value = val;
    }
    textUpdater(node, val) {
        node.textContent = val;
    }
    htmlUpdater(node, val) {
        node.innerHTML = val;
    }
    compileText(node, vm) {
        this.update(node, RegExp.$1, vm, 'text');
    }

    isEvent(name) {
        return name.startsWith('on:');
    }

    isDirective(name) {
        return name.startsWith('v-');
    }
    isElement(node) {
        return node.nodeType === nodeType.element;
    }
    isInterPolation(node) {
        return node.nodeType === nodeType.text && /\{\{(.*)\}\}/.test(node.textContent);
    }

}

class Dep {
    constructor() {
        this.deps = [];
    }
    addDep(dep) {
        if(this.deps.includes(dep)) {
            return;
        }
        this.deps.push(dep);
    }
    notify() {
        this.deps.forEach(dep => dep.update());
    }
}

class Watcher {
    constructor(vm, key, updater) {
        this.vm = vm;
        this.key = key;
        this.updater = updater;

        Dep.target = this; // 将Watcher实例存储
        this.vm[this.key]; // 触发getter
        Dep.target = null; // 置空
    }
    update() {
        this.updater.call(this.vm, this.vm[this.key]);
    }
}
