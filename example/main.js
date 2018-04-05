import Vue from "vue";

import App from "./App";

import router from "./router";
import aui from "../src/index";

aui.init();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});