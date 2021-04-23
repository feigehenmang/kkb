<template>
  <h1>
      <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
      <p>{{title}}</p>
      <slot></slot>
  </h1>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "Title",
    mounted() {
        console.log(this.$listeners)
    }
}
</script>

<style>

</style>