<template>
  <transition name="d-alert">
    <div v-show="visible" class="d-alert" :class="[typeClass, center ? 'center' : '']">
        <div class="d-alert-content">
            <div class="d-alert-title">{{title}}</div>
            <i class="d-alert--closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: "DAlert",
    props: {
        title: {
            type: String,
            require: true
        },
        type: {
            type: String,
            default: 'success',
            validator(val) {
                return ['success', 'error', 'warning', 'info'].indexOf(val) !== -1;
            }
        },
        closable: {
            type: Boolean,
            default: true
        },
        closeText: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        showIcon: Boolean,
        center: Boolean
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close')
        }
    },
    computed: {
        typeClass() {
            return `d-alert-${this.type}`
        }
    }
}
</script>

<style>
    .d-alert {
        box-sizing: border-box;
        border-radius: 4px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        position: relative;
        opacity: 1;
        transition: opacity .7s;
        overflow: hidden;
    }
    .d-alert.center {
        justify-content: center;
    }
    .d-alert-content {
        display: flex;
        justify-content: space-around;
    }
    .d-alert-title {
        font-size: 13px;
    }
    .d-alert-success {
        background: #f0f9eb;
        color: #67C23A;
    }
    .d-alert-error {
        background-color: #fef0f0;
        color: #F56C6C;
    }
    .d-alert-info {
        background-color: #f4f4f5;
        color: #909399;
    }
    .d-alert-warning {
        background-color: #fdf6ec;
        color: #E6A23C;
    }
    .d-alert--closebtn {
        font-size: 12px;
        opacity: 1;
        position: absolute;
        top: 12px;
        right: 15px;
        cursor: pointer;
    }
    /* prop-enter 进入之前 prop-leave-to 离开之后 */
    .d-alert-enter, .d-alert-leave-to {
        opacity: 0;
    }
    /* prop-enter-to 进入之后 prop-leave 开始离开 */
    .d-alert-enter-to, .d-alert-leave {
        opacity: 1;
    }
</style>