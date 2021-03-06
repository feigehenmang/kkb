let Vue;
class Store {
    constructor(options) {
        this.options = options;
        // console.log(this.options.state);
        this._state = new Vue({
            data() {
                return {
                    state: options.state || {}
                }
            },
            computed: {
                ...this.options.getters
            }
        })
        // console.log(this._state.state);
        // this.$store.getters.dobuleCount
        
    }

    
    get getters() {
        let getters = {};
        for (const key in this.options.getters) {
            getters[key] = this._state[key];
        }
        return getters;
    }
    get state() {
        // console.log(this)
        return this._state.state;
    }
    set state(val) {
        console.warn('di------')
    }
    commit(dataField, ...args) {
        const mutations = this.options.mutations||{};
        const method = mutations[dataField];
        method && method(this.state, ...args);
    }
    dispatch(dataField) {
        const actions = this.options.actions||{};
        const method = actions[dataField];
        method && method(this);
    }
    // get getters() {
    //     let getters = this.options.getters;
    //     let result = {};
    //     console.log(getters, result)
    //     for (const key in getters) {
    //         if (Object.hasOwnProperty.call(getters, key)) {
    //             const method = getters[key];
    //             result[key] = method.call(this);
    //         }
    //     }
    //     return result;
    // }
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