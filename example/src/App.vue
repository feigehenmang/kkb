<template>
  <div id="app">
    <!-- <input type="number" step="20" v-model="number"> -->
    <!-- <p>
      {{showNumber}}
    </p> -->
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/home/child1">Child1</router-link> |
      <router-link to="/home/child2">Child2</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <async></async>
    <!-- <custom-title :title.sync="title" @target="handleClick">
      <span>Title</span>
      <template #header="slotProps">{{slotProps.user}}Header</template>
    </custom-title>
    <custom-title :title.sync="title" @target="handleClick">
    </custom-title>
    <button @click="clear('Home')">Clear</button> -->
    <!-- animate__animated animate__bounceInLeft -->
    <transition
      name="custom"
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutRight"
      mode="out-in"
    >
      <keep-alive :include="include">
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated  animate__bounceOutRight"
      mode="out-in"
    >
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
  // import CustomTitle from './components/study-slot/Title'
  export default {
    components: {
      // CustomTitle
    },
    data() {
      return {
        include: [],
        title: '123',
        number: 10,
        anotherNumber: 10
      }
    },
    methods: {
      handleClick() {
        console.log('handleClick');
      },
      clear(componentName) {
        // this.$router.push('about')
        this.include.includes(componentName) && this.include.splice(this.include.indexOf(componentName), 1)
      }
    },
    computed: {
      showNumber() {
        return this.anotherNumber;
      }
    },
    watch: {
      number(newVal) {
        window.gsap.to(this.$data, { duration: .3, anotherNumber: newVal });
      },
      $route: {
        immediate: true,
        handler(to, from) {
          // 当to.meta.deepth > from.meta.deepth 时，为前进操作，不需要缓存
          // 当to.meth.deepth < from.meta.deepth 时，为后退操作需要缓存
          // home => about no
          // about => home yes
          if (to.meta.keepAlive) {
            !this.include.includes(to.name) && this.include.push(to.name)
          }
          // if(from && from.meta && from.meta.keepAlive) {
          //   !this.include.includes(from.name) && this.include.push(from.name)
          // }
          // to > from 前进  to < from 后退
          const toDeepth = to.meta.deepth,
            fromDeepth = ((from || {}).meta || {}).deepth || toDeepth + 1;
          if (to.meta.keepAlive && toDeepth > fromDeepth) {
            this.include.includes(to.name) && this.include.splice(this.include.indexOf(to.name), 1);
          }

        }
      }
    }
  }
</script>
<style>
  /* .animate__animated{
    position: relative;
  } */
/* .animate_leave {
  animation-delay: 1s;
} */
  .v-enter-active,
  .v-leave-active {
    /* transition: opacity 5s; */
    /* animation: scale .5s; */
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .custom-enter,
  .custom-leave-to
  /* .fade-leave-active below version 2.1.8 */
  {
    /* opacity: 0; */
    /* display: none; */
  }

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