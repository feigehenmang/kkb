<template>
    <button @click="addCount">add-Provide</button>
  <inject></inject>
</template>

<script>
import { provide, readonly, ref } from 'vue';
import inject from './Inject';
export default {
  components: { inject },
    setup() {
        const count = ref(0);
        const addCount = () => {
            count.value++;
        }
        const location = 'beijing';
        const geoLocation = {
            left: 30,
            top: 59
        }
        provide('count', readonly(count));
        provide('location', location);
        provide('geoLocation', geoLocation);
        provide('addCount', addCount)
        return {
            addCount
        }
    }
}
</script>

<style>

</style>