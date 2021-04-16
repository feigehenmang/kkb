import Vue from "vue";
const items = [];

Vue.directive('load', {
    bind(el, binding) {
        console.log(el.getBoundingClientRect().top, binding, items);
        const imageSrc = binding.value;
        items.push({
            el,
            imageSrc
        })
        if(el.getBoundingClientRect().top < window.innerHeight) {
            el.setAttribute('src', imageSrc)
        }
    }
})