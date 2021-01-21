import Vue from "vue";
import { createApp } from "vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
// import VXETablePluginExportXLSX from "vxe-table-plugin-export-xlsx";

// VXETable.use(VXETablePluginExportXLSX);

// const app = createApp(App);
Vue.use(VXETable);
VXETable.setup({
  zIndex: 1000,
  grid: {},
});
