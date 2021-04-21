import Vue from "vue";

export default (componentName, props, selector) => {
    const Wrapper = Vue.extend(componentName, {
        propsData: props
    });
    const vm = new Wrapper();
    vm.$mount();
    let parentNode = document.body;
    if(selector) {
        parentNode = document.querySelector(selector);
    }
    parentNode.appendChild(vm.$el);
    vm.remove = () => {
        parentNode.removeChild(vm.$el);
        vm.$destory();
    }
    return vm;
}