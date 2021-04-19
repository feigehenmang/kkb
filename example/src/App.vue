<template>
  <div id="app">
    <k-table :dataSource="dataSource">
      <k-column caption="姓名" displayExpr="name"></k-column>
      <k-column caption="地址" displayExpr="address"></k-column>
      <k-column caption="年龄" displayExpr="age"></k-column>
      <k-column caption="时间" template="date" displayExpr="date">
      </k-column>
      <template v-slot:date="slotProps">
        <div>
          {{slotProps.value.toLocaleString()}}
        </div>
      </template>
    </k-table>
  </div>
</template>

<script>
import KTable from '@/components/KTable.vue';
import KColumn from '@/components/KCloumn.vue';
export default {
  name: 'App',
  components: {
    KTable,
    KColumn
  },
  data() {
    return {
      dataSource: [
        {id: 0, name: '王小虎1', address: '北京市西城区富卓大厦', age: 18, date: new Date()},
        {id: 1, name: '王小虎2', address: '北京市西城区富卓大厦', age: 19, date: new Date()},
        {id: 2, name: '王小虎3', address: '北京市西城区富卓大厦', age: 20, date: new Date()},
        {id: 3, name: '王小虎4', address: '北京市西城区富卓大厦', age: 21, date: new Date()},
        {id: 4, name: '王小虎5', address: '北京市西城区富卓大厦', age: 22, date: new Date()}
      ]
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
