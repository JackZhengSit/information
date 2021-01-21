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
import { sync } from "vuex-router-sync";

import tableExportMethod from "@/utils/funcUtil";

Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.use(tableExportMethod);
Vue.config.productionTip = false;
const unsync = sync(store, router, { moduleName: "RouteModule" });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
