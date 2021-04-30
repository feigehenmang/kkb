<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <setup></setup>
  <life-cycle></life-cycle>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Setup from './components/setup.vue'
import lifeCycle from './components/lifeCycle.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Setup,
    lifeCycle
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
