<template>
  <div id="app">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <el-alert title="成功提示的文案" center type="success">
      </el-alert>
      <d-alert center title="成功提示的文案" type="success"></d-alert>
      <d-alert center title="成功提示的文案" type="error"></d-alert>
      <d-alert center title="成功提示的文案" type="info"></d-alert>
      <d-alert center title="成功提示的文案" type="warning"></d-alert>
    </div>
  </div>
</template>

<script>
  import DAlert from './package/Alert'
  export default {
    name: 'app',
    components: {
      DAlert
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>