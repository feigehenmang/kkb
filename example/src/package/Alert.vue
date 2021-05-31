<template>
  <div v-show="visible" class="d-alert" :class="[typeClass, center ? 'center' : '']">
      <div class="d-alert-content">
        <div class="d-alert-title">{{title}}</div>
      </div>
  </div>
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
                return ['success', 'error', 'warning'].indexOf(val) !== -1;
            }
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
</style>