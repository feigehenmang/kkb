import Vue from 'vue';
const req = require.context('../common/', false, /\.vue$/);
req.keys().map(component => {
    const module = req(component);
    Vue.component(component.replace(/\.\//, '').replace(/\.vue$/, ''), module.default)
})