<template>
  <div>
    <watch></watch>
    <span style="padding: 10px;" v-for="(master, index) in masters" :key="master" @click="checkMaster(index)">{{master}}</span>
    <p>{{master}}</p>
     <ul>
        <li v-for="record in commits" :key="record.commit.message">
          <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
          - <span class="message">{{ record.commit.message }}</span><br>
          by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
          at <span class="date">{{ record.commit.author.date  }}</span>
        </li>
      </ul>
  </div>
  <shallow-readonly></shallow-readonly>
  <!-- <shallow-reactive></shallow-reactive> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <setup ref="setUpEl"></setup>
  <life-cycle></life-cycle>
  <provide></provide> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import Setup from './components/setup.vue'
// import lifeCycle from './components/lifeCycle.vue'
// import Provide from './components/Provide.vue'
import Watch from './components/Watch.vue'
import { /*onMounted,isProxy, reactive, readonly,*/  ref, watchEffect } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import { getCommits } from './apis/'
import ShallowReadonly from './components/ShallowReadonly.vue'
// import ShallowReactive from './components/ShallowReactive.vue'
export default {
  name: 'App',
  components: {
    // Setup,
    // lifeCycle,
    // Provide,
    Watch,
    ShallowReadonly,
    // ShallowReactive
    // HelloWorld
  },
  setup() {
    const setUpEl = ref(null);
    const master = ref(0);
    const commits = ref([]);
    const masters = ['master', 'dev'];
    const checkMaster = (value) => {
      master.value = value;
    }
    let cancel;
    watchEffect((onInvalidate) => {
      onInvalidate(() => {
        cancel && cancel()
      })
      const p = getCommits(masters[master.value]);
      p.data.then(
        res => {
          console.log(res)
          commits.value = res.data;
        }
      )
      cancel = p.cancel;
      
    })
    // onMounted(() => {
    //   console.log(setUpEl.value)
    // })
    // watchEffect(() => {
    //   console.log(setUpEl.value)
    // })

    // const refProxy = ref(0);
    // const reactiveProxy = reactive({});
    // const readonlyProxy = readonly({});
    // console.log('refProxy', isProxy(refProxy));
    // console.log('reactiveProxy', isProxy(reactiveProxy));
    // console.log('readonlyProxy', isProxy(readonlyProxy));
    return {
      setUpEl,
      master,
      masters,
      checkMaster,
      commits,
      // refProxy,
      // reactiveProxy,
      // readonlyProxy
    }
  },
  
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
