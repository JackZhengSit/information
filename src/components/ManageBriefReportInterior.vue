<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-30 13:46:45
 * @LastEditTime: 2020-12-03 14:17:22
-->
<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script>
import { briefReportInterior } from "../store/infoType";
import axios from "axios";

axios.get("http://localhost:8080/BriefReportExterior/2").then((response) => {
  console.log(response);
});

// var p = Promise.resolve("Hello");

// p.then(function (s) {
//   console.log(s);
// });

export default {
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        showHeaderOverflow: true,
        showOverflow: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "briefReportInteriorGrid",
        height: 600,
        rowId: "id",
        customConfig: {
          storage: true,
          checkMethod: this.checkColumnMethod,
        },
        sortConfig: {
          trigger: "cell",
        },
        filterConfig: {
          remote: true,
        },
        pagerConfig: {
          pageSize: 10,
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
        },
        formConfig: {
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: "orderNum",
              title: "序号",
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.orderNum.field,
              title: briefReportInterior.orderNum.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.name.field,
              title: briefReportInterior.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.type.field,
              title: briefReportInterior.type.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.completeDepartment.field,
              title: briefReportInterior.completeDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.title.field,
              title: briefReportInterior.title.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.industryType.field,
              title: briefReportInterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.industryDetailType.field,
              title: briefReportInterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.industryChainType.field,
              title: briefReportInterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referDeviceType.field,
              title: briefReportInterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referDevice.field,
              title: briefReportInterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referProduct.field,
              title: briefReportInterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referProject.field,
              title: briefReportInterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referInstitution.field,
              title: briefReportInterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referTechnology.field,
              title: briefReportInterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referCategory.field,
              title: briefReportInterior.referCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.department.field,
              title: briefReportInterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.researchField.field,
              title: briefReportInterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.researchOrientation.field,
              title: briefReportInterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.researchSystem.field,
              title: briefReportInterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.techFieldType1.field,
              title: briefReportInterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.techFieldType2.field,
              title: briefReportInterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.techFieldType3.field,
              title: briefReportInterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.industryField.field,
              title: briefReportInterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.industryOrientation.field,
              title: briefReportInterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.publishDepartment.field,
              title: briefReportInterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.checkInTime.field,
              title: briefReportInterior.checkInTime.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.knowledgeType.field,
              title: briefReportInterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.securityLevel.field,
              title: briefReportInterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.abs.field,
              title: briefReportInterior.abs.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.formatTime.field,
              title: briefReportInterior.formatTime.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.informationCollactor.field,
              title: briefReportInterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.informationAuditor.field,
              title: briefReportInterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.language.field,
              title: briefReportInterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.keywords.field,
              title: briefReportInterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.informationOrigin.field,
              title: briefReportInterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.referWebsite.field,
              title: briefReportInterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.createTime.field,
              title: briefReportInterior.createTime.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              field: briefReportInterior.updateTime.field,
              title: briefReportInterior.updateTime.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
              },
            },
            {
              span: 24,
              align: "center",
              collapseNode: true,
              itemRender: {
                name: "$buttons",
                children: [
                  {
                    props: {
                      type: "submit",
                      content: "搜索",
                      status: "primary",
                    },
                  },
                  { props: { type: "reset", content: "重置" } },
                ],
              },
            },
          ],
        },
        toolbarConfig: {
          buttons: [
            { code: "insert_actived", name: "新增", icon: "fa fa-plus" },
            { code: "delete", name: "删除", icon: "fa fa-trash-o" },
            { code: "mark_cancel", name: "取消", icon: "fa fa-trash-o" },
            {
              code: "save",
              name: "保存",
              icon: "fa fa-save",
              status: "success",
            },
          ],
          refresh: true,
          import: true,
          export: true,
          print: true,
          zoom: true,
          custom: true,
        },
        proxyConfig: {},
        columns: [
          { type: "checkbox", title: "ID", width: 100 },
          {
            field: briefReportInterior.orderNum.field,
            title: briefReportInterior.orderNum.title,
            width: 100,
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>