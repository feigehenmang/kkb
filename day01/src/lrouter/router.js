let Vue;
class Router {
    prefix = '#';
    currPath = '/'
    constructor(options) {
        this.options = options;
        let currPath = location.hash.slice(1);
        Vue.util.defineReactive(this, 'currPath', currPath)
        window.addEventListener('hashchange', () => {
            this.currPath = location.hash.slice(1);

        })
    }
    static install(_Vue) {
        Vue = _Vue;
        // console.log(_Vue); // Vue 构造函数
        _Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router;
                }
            }
        })
        _Vue.component('router-view', {
            // 当currPath变化重新执行render函数
            render(h) {
                const routes = this.$router.options.routes;
                const {component} = routes.find(route => route.path === this.$router.currPath);
                console.log(component)
                return h(component, {});
            }
        })
        _Vue.component('router-link', {
            props: {
                to: {
                    type: String,
                    required: true
                }
            },
            render(h) {
                return h('a', {
                    attrs: {
                        href: `${this.$router.prefix}${this.to}`
                    }
                }, this.$slots.default)
            }
        })
    }
}

export default Router;