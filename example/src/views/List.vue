<template>
  <item-list :items="items" #default="{name}">
      <span style="color: red;">{{name}}</span>
  </item-list>
</template>

<script>
import ItemList from '../components/study-slot/ItemList'
export default {
    name: 'List',
    components: {
        ItemList
    },
    data() {
        return {
            items: [
                {name: '吴建海1', age: 19, id: 0},
                {name: '吴建海2', age: 19, id: 1},
                {name: '吴建海3', age: 19, id: 2},
                {name: '吴建海4', age: 19, id: 3},
                {name: '吴建海5', age: 19, id: 4}
            ]
        }
    }
}
</script>

<style>

</style>