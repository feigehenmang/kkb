<template>
  <div class="home">
    <!-- {{formData}}
    <div>
      <button @click="formData.count++">add</button>
      <button @click="formData.count--">inc</button>
    </div>
    <button @click="jump">Click</button>
    <input type="text" v-model="formData.name"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
    <button @click="$router.push('child1')">Child1</button>
    <button @click="$router.push('child2')">Child2</button>
    <!-- <router-link to="/home/child1">Child1</router-link> |
    <router-link to="/home/child2">Child1</router-link> -->

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name      : 'Home',
  components: {
    // HelloWorld
  },
  methods: {
    jump() {
      console.log(this.$router)
      this.$router.replace('/about/123')
    }
  },
  data() {
    return {
      formData: {
        count: 0,
        name: ''
      }
    }
  },
  activated() {
    // console.log(this.$vnode.data, this.$vnode.componentOptions.Ctor.cid, this.$vnode.parent.componentInstance.keys, this.$vnode.parent.componentInstance.cache)
  },
  deactivated() {
  }
}
</script>
