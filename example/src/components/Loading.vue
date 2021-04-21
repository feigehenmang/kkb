<template>
    <div class="loading-outer">
        <div v-if="value" class="loading">正在加载中</div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            value: false
        }
    },
    methods: {
        show() {
            this.value = true;
        },
        hide() {
            this.value = false;
        },
        toggle() {
            this.value = !this.value;
        }
    }
}
</script>

<style>
    .loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
    }
    .loading-outer {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>