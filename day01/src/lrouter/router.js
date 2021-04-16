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
                // console.log(this)
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router;
                }
            }
        })
        _Vue.component('router-view', {
            // 当currPath变化重新执行render函数
            render(h) {
                const routes = this.$router.options.routes;
                const route = routes.find(route =>( route.path === this.$router.currPath || route.path + '/' === this.$router.currPath) );
                const component = route ? route.component : null;
                // console.log(component)
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