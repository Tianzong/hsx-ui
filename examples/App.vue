<template>
  <div id="app">
    <h2>按钮</h2>
    <hsx-button>默认按钮</hsx-button>
    <hsx-button type="primary">主要按钮</hsx-button>
    <hsx-button type="primary" :button-disabled="true">禁用按钮</hsx-button>
    <hsx-button type="danger">危险按钮</hsx-button>
    <hsx-button type="warning">警告按钮</hsx-button>
    <hsx-button type="info">信息按钮</hsx-button>
    <hsx-button type="primary" :is-round="true" class="icon hsx-icon-left">圆角按钮</hsx-button>
    <hsx-button type="primary" button-size="medium">medium按钮</hsx-button>
    <hsx-button type="primary" button-size="small">small按钮</hsx-button>
    <hsx-button type="primary" button-size="mini">mini按钮</hsx-button>
    <hsx-button :is-circle="true"></hsx-button>
    <h2>按钮组</h2>
    <hsx-button-group>
      <hsx-button>左边</hsx-button>
      <hsx-button>中间</hsx-button>
      <hsx-button>右边</hsx-button>
    </hsx-button-group>
  </div>
</template>

<script>
  import hsxCol from "../packages/col/src/col";
  import hsxRow from "../packages/row/src/row";
  import HsxButtonGroup from "../packages/buttonGroup/src/buttonGroup";

  export default {
    name: 'App',
    components: {
      HsxButtonGroup
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .hsx-col {
    border-radius: 5px;
    line-height: 30px;
    margin-right: 20px;
  }

</style>
