<template>
  <h1>Watch</h1>
  <p>{{state.message.count}}</p>
  <button @click="countAdd">add</button>
</template>

<script>
import { reactive, watch } from 'vue'
import _ from 'lodash';
export default {
    setup() {
        const state = reactive({
            name: 'd',
            message: {
                count: 0
            }
        });
        watch(() => (_.cloneDeep(state)), (newVal, oldVal) => {
            console.log(newVal, oldVal);
        }, {
            deep: true
        })
        const countAdd = () => state.message.count++;
        return {
            state,
            countAdd
        }
    }
}
</script>

<style>

</style>