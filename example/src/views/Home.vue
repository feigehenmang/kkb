<template>
  <div class="home">
    {{formData}}
    <div>
      <button @click="formData.count++">add</button>
      <button @click="formData.count--">inc</button>
    </div>
    <input type="text" v-model="formData.name">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      formData: {
        count: 0,
        name: ''
      }
    }
  },
  // activated() {
  //   console.log('activated');
  //   // console.log(this.$vnode.parent.componentInstance)
  // },
  // deactivated() {
  //   console.log(this.$vnode.parent.componentInstance)
  //   console.log('deactivated');
  // }
}
</script>
