import Vue from "vue"

export default (componentName, componentUrl) => {
    // Vue.component(componentName, (reslove) => {
    //     require([`../${componentUrl}`], reslove);
    // })
    Vue.component(
        componentName,
        // 这个动态导入会返回一个 `Promise` 对象。
        () => import(`../${componentUrl}`)
      )
}