<template>
  <div class="about">
    <h1>This is an about page</h1>
    <home></home>
    <!-- <keep-alive>
      <home></home>
    </keep-alive> -->
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