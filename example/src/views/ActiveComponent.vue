<template>
  <div>
      <h3>
          currComponent
      </h3>
      <span class="item" v-for="comp in components" :key="comp" @click="currComponent=comp">{{comp}}</span>
      <component :is='currComponent'></component>
  </div>
</template>

<script>
import TabAge from '../components/TabAge'
import TabName from '../components/TabName'
import TabAdress from '../components/TabAdress'
export default {
    name: 'ActiveComponent',
    components: {
        TabAge,
        TabName,
        TabAdress
    },
    data() {
        return {
            currComponent: '',
            components: ['tab-adress', 'tab-age', 'tab-name']
        }
    }
}
</script>

<style>
    .item {
        margin: 5px 10px;
        cursor: pointer;
    }
</style>