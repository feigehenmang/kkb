<template>
  <div>
    <h1>Child1</h1>
    <h1>matched</h1>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  mounted() {
    console.log(this.$route.matched)
  }
}
</script>

<style>

</style>