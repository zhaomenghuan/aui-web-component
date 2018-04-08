<!-- 
<a href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
<a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>页面主操作 Loading</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_primary">页面主操作 Disabled</a>

<a href="javascript:;" class="weui-btn weui-btn_default">页面次要操作 Normal</a>
<a href="javascript:;" class="weui-btn weui-btn_default weui-btn_loading"><i class="weui-loading"></i>页面次操作 Loading</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">页面次要操作 Disabled</a>

<a href="javascript:;" class="weui-btn weui-btn_warn">警告类操作 Normal</a>
<a href="javascript:;" class="weui-btn weui-btn_warn weui-btn_loading"><i class="weui-loading"></i>警告类操作 Loading</a>
<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_warn">警告类操作 Disabled</a>

<a href="javascript:;" class="weui-btn weui-btn_plain-default">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_plain-default weui-btn_plain-disabled">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_plain-primary">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">按钮</a>

<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">按钮</a>
<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">按钮</a>
-->

<template>
  <component
    :is="tag"
    :type="nativeType"
    class="weui-btn"
    :class="[
      (plain === 'true' ? 'weui-btn_plain-': 'weui-btn_') + type,
      'weui-btn_' + size,
      {
        'weui-btn_disabled': disabled,
        'weui-btn_loading': loading
      }
    ]"
    @click="onClick">
    <aui-loading v-if="loading" size="20px" :color="type === 'default' ? 'black' : 'white'" />
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  name: "aui-button",
  props: {
    nativeType: String,
    text: String,
    plain: String,
    disabled: String,
    loading: String,
    tag: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit("clik", event);
      }
    }
  }
};
</script>

<style lang="less">
@import "../style/widget/weui-button/weui-button";
@import "../style/widget/weui-button/weui-btn_global";

@import "../style/widget/weui-button/weui-btn_primary";
@import "../style/widget/weui-button/weui-btn_default";
@import "../style/widget/weui-button/weui-btn_warn";

@import "../style/widget/weui-button/weui-btn_plain";
@import "../style/widget/weui-button/weui-btn_disabled";
@import "../style/widget/weui-button/weui-btn_loading";
</style>