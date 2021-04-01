let Vue;
/**
 * example:
 * 
 */
class Store {
    constructor(options) {
        this.store = new Vue({
            data() {
                return {
                }
            }
        })
    }
}
function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if(this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    })

}
export default {Store, install}