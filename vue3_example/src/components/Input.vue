<template>
    <!-- <h1>{{title}}</h1> -->
    <input type="text" v-model="value">
    <!-- <input type="text" v-model="titleState"> -->
</template>

<script>
import { computed} from 'vue'
export default {
    // inheritAttrs: false,
    // emits: ['update:modelValue', 'update:title'],
    emits: {
        ["update:modelValue"](value) {
            console.log(value);
            return true;
        },
        ['update:title'](value) {
            console.log(value);
            return true;
        },
        // focus: null
    },
    props: ['modelValue', 'title'],
    setup(props, {emit, attrs}) {
        const value = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value);
            }
        })
        const titleState = computed({
            get() {
                return props.title
            },
            set(value) {
                emit('update:title', value);
            }
        })
        console.log(props.titleModifiers)
        console.log(attrs)
        return {
            value,
            titleState
        }
    },
    methods: {
        handleChange(ev) {
            this.value = ev.target.value;
        }
    }
}
</script>

<style>

</style>