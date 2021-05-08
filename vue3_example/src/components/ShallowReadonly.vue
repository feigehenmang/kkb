<template>
  <h1>shallowReadonly</h1>
    <h2>count {{state.count}}</h2>
    <h2>state.message {{state.message.count}}</h2>
    <button @click="countAdd">countAdd</button>
    <button @click="messageCountAdd">messageCountAdd</button>
</template>

<script>
import { shallowReadonly } from 'vue';
export default {
    setup() {
        const state = {
            count: 1,
            message: {count: 1}
        };
        const readonlyState = shallowReadonly(state);
        const countAdd = () => readonlyState.count++
        const messageCountAdd = () => readonlyState.message.count++; // 不执行
        // const messageCountAdd = () => readonlyState.message = {count: readonlyState.message.count++} //不执行
        return {
            state: readonlyState,
            countAdd,
            messageCountAdd
        }
    }
}
</script>

<style>

</style>