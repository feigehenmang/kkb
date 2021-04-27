<template>
    <div>
        <slot></slot>
        <!-- {{column}} -->
        <table>
            <tr>
                <th v-for = "col in column" :key = "col.id" style = "cursor:pointer;"><div  @click = "startSort(col)">{{col.caption}}<span>{{col.desc?'升序':'降序'}}</span></div></th>
            </tr>
            <tr       v-for = "item in dataSource" :key = "item.id">
            <td       v-for = "col in column" :key      = "col.id">
            <template v-if  = "col.template">
            <slot     :name = "col.template" v-bind     = "{itemData: item, value: item[col.dataField]}">{{item[col.dataField]}}</slot>
                    </template>
                    <template v-else>
                        {{item[col.dataField]}}
                    </template>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import emmiter from '../mixins/emmiter';
    export default {
        name  : 'KTable',
        mixins: [emmiter],
        props : {
            dataSource: {
                type    : Array,
                required: true
            },
        },
        data() {
            return {
                column: []
            }
        },
        methods: {
            startSort(columnData) {
                columnData.desc = !columnData.desc
                this.dataSource.sort((a, b) => {
                    if(columnData.desc) {
                        return a[columnData.dataField] - b[columnData.dataField]
                    } else {
                        return b[columnData.dataField] - a[columnData.dataField]
                    }
                })
            }
        },
        created() {
            let id = 0;
            this.$on('table.column.add', (ev) => {
                this.column.push({
                    dataField     : ev.displayExpr,
                    caption       : ev.caption,
                    id            : ++id,
                    beforeTemplate: ev.template ? ev.template: null,
                    desc          : false
                })
            });
            this.$on('table.column.remove', (ev) => {
                const index = this.column.findIndex(item => (item.dataField === ev.displayExpr && item.caption === ev.caption));
                if(index >= 0) {
                    this.column.splice(index, 1);
                }
            })
        },
        mounted() {
            this.column.forEach(item => {
                if(this.$scopedSlots[item.beforeTemplate]) {
                    item.template = item.beforeTemplate
                }
            })
        
        }
    }
</script>

<style scoped>
    .icon {
        font-size  : 1em;
        display    : inline-block;
        margin     : 0 5px;
        font-weight: 100;
    }
</style>