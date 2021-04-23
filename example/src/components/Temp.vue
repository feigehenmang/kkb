<template>
  <div>
      <div v-for="(name, index) of items" :key="name">
          {{name}} {{index}}
      </div>
      <div v-for="(value, name, index) in obj" :key="name">
          {{value}} {{name}} {{index}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {name: 'wei1', age: 18},
                {name: 'wei2', age: 19},
                {name: 'wei3', age: 20},
                {name: 'wei4', age: 21}
            ],
            obj: {
                name: 'jinwei',
                age: 18
            }
        }
    }
}
</script>

<style>

</style>