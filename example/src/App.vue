<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="clear()">Clear</button>
    {{$route.meta}}
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      include: []
    }
  },
  methods: {
    clear() {
      // console.log('cach', this.include);
      this.include.includes('Home') && this.include.splice(this.include.indexOf('Home'), 1)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
  
        // 当to.meta.deepth > from.meta.deepth 时，为前进操作，不需要缓存
        // 当to.meth.deepth < from.meta.deepth 时，为后退操作需要缓存
        // console.log(to.name, from.name)
  
        // home => about no
        // about => home yes
        if(to.meta.keepAlive) {
          !this.include.includes(to.name) && this.include.push(to.name)
        }
        if(from && from.meta && from.meta.keepAlive) {
          !this.include.includes(from.name) && this.include.push(from.name)
        }
        // console.log(this.include);
        // console.log(to, from)
        // console.log(this.include)
        // to > from 前进  to < from 后退
        const toDeepth = to.meta.deepth, fromDeepth = ((from || {}).meta || {}).deepth || toDeepth+1;
        if(to.meta.keepAlive && toDeepth > fromDeepth) {
          this.include.includes(to.name) && this.include.splice(this.include.indexOf(to.name), 1);
        }
  
      }
    }
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