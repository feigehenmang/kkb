<template>
    <button @click="injectCountAdd">add-inject</button>
    <button @click="injectAdd">injectAdd</button>
    <p>{{injectCount}}</p>
    <p>{{injectLocation}}</p>
    <p>{{injectGeoLocation}}</p>
</template>

<script>
import { inject } from 'vue'
export default {
    setup() {
        const injectCount = inject('count');
        const injectLocation = inject('location');
        const injectGeoLocation = inject('geoLocation');
        const injectAdd = inject('addCount')
        const injectCountAdd = () => injectCount.value++;
        return {
            injectCount,
            injectLocation,
            injectGeoLocation,
            injectCountAdd,
            injectAdd
        }
    }
}
</script>

<style>

</style>