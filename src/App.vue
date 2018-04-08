<template>
  <div id="app">
    <aui-button type="primary" onclick="console.log('click')">页面主操作 Normal</aui-button>
    <aui-button type="primary" disabled="true">页面主操作 Disabled</aui-button>
    
    <aui-button type="default">页面次要操作 Normal</aui-button>
    <aui-button type="default" disabled="true">页面次要操作 Disabled</aui-button>
    
    <aui-button type="warn">警告类操作 Normal</aui-button>
    <aui-button type="warn" disabled="true">警告类操作 Disabled</aui-button>
    
    <aui-button type="primary" plain="true">页面主操作 Plain</aui-button>
    <aui-button type="default" plain="true">页面次要操作 Plain</aui-button>
    
    <aui-button type="primary" size="mini">按钮</aui-button>
    <aui-button type="default" size="mini">按钮</aui-button>
    <aui-button type="warn" size="mini">按钮</aui-button>
  </div>
</template>

<script>
import auiButton from "./components/button.vue";

export default {
  name: 'app',
  components: {
    auiButton
  }
}
</script>
