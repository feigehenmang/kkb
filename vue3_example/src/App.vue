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
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <setup ref="setUpEl"></setup>
  <life-cycle></life-cycle>
  <provide></provide>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Setup from './components/setup.vue'
import lifeCycle from './components/lifeCycle.vue'
import Provide from './components/Provide.vue'
import Watch from './components/Watch.vue'
import { /*onMounted,*/ ref, watchEffect } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import { getCommits } from './apis/'
export default {
  name: 'App',
  components: {
    Setup,
    lifeCycle,
    Provide,
    Watch
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
        console.log('onInvalidate')
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
    watchEffect(() => {
      console.log(setUpEl.value)
    })
    return {
      setUpEl,
      master,
      masters,
      checkMaster,
      commits
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
