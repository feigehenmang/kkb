<template>
  <h1>
      <slot v-bind:user="'USER'" name="header"></slot>
      <input type="text" :value="title" @input="$emit('update:title', $event.target.value)">
      <p>{{title}}</p>
      <slot ><h1>Default Title</h1></slot>
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