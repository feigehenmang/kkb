<template>
    <div>
        <slot></slot>
        <!-- {{column}} -->
        <table>
            <tr>
                <th v-for="col in column" :key="col.id">{{col.caption}}</th>
            </tr>
            <tr v-for="item in dataSource" :key="item.id">
                <td v-for="col in column" :key="col.id">
                    <template></template>
                    {{item[col.dataField]}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import emmiter from '../mixins/emmiter';
    export default {
        name: 'KTable',
        mixins: [emmiter],
        props: {
            dataSource: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                column: []
            }
        },
        created() {
            let id = 0;
            this.$on('table.column.add', (ev) => {
                // console.log(ev.$slots)
                this.column.push({
                    dataField: ev.displayExpr,
                    caption: ev.caption,
                    id: ++id
                })
            });
            this.$on('table.column.remove', (ev) => {
                const index = this.column.findIndex(item => (item.dataField === ev.displayExpr && item.caption === ev.caption));
                if(index >= 0) {
                    this.column.splice(index, 1);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>