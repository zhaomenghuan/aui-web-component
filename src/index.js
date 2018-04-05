/**
 * @author zhaomenghuan <1028317108@qq.com>
 */
import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import install from "./install";

let global = {
  name: "aui-web-component",
  version: "1.0.0"
};

/**
 * 自定义元素
 * @param {String} name - 自定义元素名称
 * @param {Component} component - 自定义元素组件对象
 */
global.customElement = function(name, component) {
  window.customElements.define(name, wrap(Vue, component));
};

/**
 * 初始化组件库
 */
global.init = function() {
  install.components.forEach(element => {
    global.customElement(element.name, element.component);
    window.console.log(`${element.name} installed`);
  });
};

if (typeof window !== undefined) {
  window.aui = global;
}

export default global;
