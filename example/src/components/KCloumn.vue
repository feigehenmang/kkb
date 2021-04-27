<template>
    <div>
    </div>
</template>

<script>
import emmiter from '../mixins/emmiter'
    export default {
        name  : 'KCloumn',
        mixins: [emmiter],
        props : {
            displayExpr: {
                type    : String,
                required: true
            },
            caption: {
                type    : String,
                required: true
            },
            template: String
            // valueExpr: {
            //     required: true,
            //     type: string
            // }
        },
        mounted() {
            this.dispatch('KTable', 'table.column.add', [this]);
        },
        destroyed() {
            this.dispatch('KTable', 'table.column.remove', [this]);
        }
    }
</script>

<style lang = "scss" scoped>

</style>