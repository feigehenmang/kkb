<template>
  <p>LifeCycle</p>
</template>

<script>
export default {
    beforeCreate() {
        console.log('beforeCreated', this);
    },
    created() {
        console.log('created', this);
    },
    beforeMount() {
        console.log('beforeMount', this);
    },
    mounted() {
        console.log('mounted', this);
    },
    beforeUpdate() {
        console.log('beforeUpdated', this);
    },
    updated() {
        console.log('updated', this);
    },
    beforeUnmount() {
        console.log('beforeUnmount', this);
    },
    unmounted() {
        console.log('unmounted', this);
    }
}
</script>

<style>

</style>