<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <slot v-bind="item">{{item.name}}</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemList',
    props: {
        items: {
            type: Array,
            require: true
        }
    }
}
</script>

<style>

</style>