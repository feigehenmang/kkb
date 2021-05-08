<template>
    <h1>ShallowReactive</h1>
    <h2>count {{state.count}}</h2>
    <h2>state.message {{state.message.count}}</h2>
    <button @click="countAdd">countAdd</button>
    <button @click="messageCountAdd">messageCountAdd</button>
</template>
<script>
import { shallowReactive } from 'vue';
export default {
    setup() {
        const state = {
            count: 1,
            message: {count: 1}
        };
        const reactiveState = shallowReactive(state);
        const countAdd = () => reactiveState.count++
        // const messageCountAdd = () => reactiveState.message.count++; // 不执行
        const messageCountAdd = () => reactiveState.message = {count: reactiveState.message.count++} //不执行
        return {
            state: reactiveState,
            countAdd,
            messageCountAdd
        }
    },
}
</script>