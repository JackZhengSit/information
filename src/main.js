import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
// import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/vxe-table.js";
// import "./plugins/xe-ajax.js";
// import "./plugins/echarts.js";
import echarts from "echarts";
import api from "@/api";

Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
