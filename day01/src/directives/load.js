import Vue from "vue";
const callbacks = [];
document.addEventListener('scroll', () => {
    callbacks.forEach(callback => callback())
})
Vue.directive('load', {
    bind(el, binding) {
        console.log(el, binding);
        
        callbacks.push(() => {
            const {top} = el.getBoundingClientRect();
            console.log(top)
            if(top < window.innerHeight) {
                el.setAttribute('src', binding.value);
            }
        })
    }
})