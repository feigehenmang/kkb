<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{$route.params.id}}</h1>
    <h1>hash{{$route.hash}}</h1>
    <h1>fullPath{{$route.fullPath}}</h1>
    <home></home>
  </div>
  
</template>
<script>
import Home from './Home.vue'
// import Home from './Home.vue';
export default {
  name: 'About',
  components: {
    Home
    // Home
  },
  mounted() {
    console.log(this.$vnode)
  }
}
</script>