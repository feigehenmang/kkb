<template>
  <div id="app">
    <h1>{{$store.state.count}}</h1>
    <h2>{{$store.getters.doubleCount}}</h2>
    <span @click="$store.commit('add', 2)">commit</span>
    <span @click="$store.dispatch('add')">dispatch</span>
    <div id="nav">
      <router-link to="/"><icon name="add" />Home</router-link> |
      <router-link to="/about"><icon name="delete" />About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  beforeCreate() {
    // console.log(process.env)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
