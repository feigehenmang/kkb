
<script>
import { computed, h, onMounted, ref, toRefs, watch } from 'vue'
const obj = {
    countFromObj: 0
}
/**
 * <template>
    <h1>Setup</h1>
    <p>
        {{count}}
    </p>
    <p>
        {{doubleCount}}
    </p>
    <button @click="addCount">add</button>
</template>
 */
export default {
    name: 'Setup',
    data() {
        return {
            count: 2
        }
    },
    setup() {
        // console.log(context, props)
        const {countFromObj} = toRefs(obj);
        console.log(countFromObj)
        const count = ref(0);
        console.log(count)
        const addCount = () => {
            count.value++;
        }
        const doubleCount = computed(() => count.value*2)
        onMounted(() => {
            console.log('onMounted')
        })
        watch(count, (newValue, oldValue) => {
            console.log('count changed', newValue, oldValue)
        })
        // return {
        //     count,
        //     addCount,
        //     doubleCount
        // }
        return () => h('p', [
            h('p', [count.value]),
            h('p', [doubleCount.value]),
            h('button',{
                onClick: addCount
            }, ['add'])
        ])
    },
}
</script>