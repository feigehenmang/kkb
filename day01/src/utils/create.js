import Vue from "vue"

export const $create = (Component, props) => {
    const Wrapper = Vue.extend(Component, {
        propsData: props
    });

    new Wrapper()
}