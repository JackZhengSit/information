<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-14 15:11:31
 * @LastEditTime: 2021-01-18 09:52:53
-->
<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template v-slot:uploadFile="{ row }">
        <el-upload
          :show-file-list="false"
          :on-success="uploadFileSuccess"
          :data="{ id: row.id }"
          accept=".rar,.zip,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
          :action="uploadUrl"
        >
          <el-button slot="trigger" type="default">上传</el-button>
          <el-button
            type="danger"
            style="margin-left: 10px"
            @click="removeFileById(row)"
            >删除</el-button
          >
        </el-upload>
      </template>
    </vxe-grid>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import { briefReportExterior } from "../store/infoType";
import {
  searchBriefReportExterior,
  removeRemoteFileById,
  confirmSaveBriefReportExterior,
} from "@/api/manageBriefReportExterior";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";

function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(briefReportExterior).forEach(function (key) {
      if (briefReportExterior[key].title == headers[i])
        headers[i] = briefReportExterior[key].field;
    });
  }
  for (let i = 1; i < csvarry.length - 1; i++) {
    let data = {};
    let temp = csvarry[i].split(",");
    for (let j = 0; j < temp.length; j++) {
      data[headers[j]] = temp[j];
    }
    datas.push(data);
  }
  return datas;
}

export default {
  data() {
    return {
      // xGrid: this.$refs.xGrid,
      uploadUrl: baseUrl + "/manual/brief-report-exterior/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "briefReportExteriorGrid",
        maxHeight: 1000,
        // rowId: "orderNum",
        editConfig: {
          trigger: "dblclick",
          mode: "row",
          showStatus: true,
        },
        formConfig: {
          data: {},
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: briefReportExterior.orderNumStart.field,
              title: briefReportExterior.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1,
              },
            },
            {
              field: briefReportExterior.orderNumEnd.field,
              // title: briefReportExterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000,
              },
            },
            {
              field: briefReportExterior.name.field,
              title: briefReportExterior.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.type.field,
              title: briefReportExterior.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.completeDepartment.field,
              title: briefReportExterior.completeDepartment.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.title.field,
              title: briefReportExterior.title.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.industryType.field,
              title: briefReportExterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.industryDetailType.field,
              title: briefReportExterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.industryChainType.field,
              title: briefReportExterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referDeviceType.field,
              title: briefReportExterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referDevice.field,
              title: briefReportExterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referProduct.field,
              title: briefReportExterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referProject.field,
              title: briefReportExterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referInstitution.field,
              title: briefReportExterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referTechnology.field,
              title: briefReportExterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referCategory.field,
              title: briefReportExterior.referCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.department.field,
              title: briefReportExterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.researchField.field,
              title: briefReportExterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.researchOrientation.field,
              title: briefReportExterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.researchSystem.field,
              title: briefReportExterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.techFieldType1.field,
              title: briefReportExterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.techFieldType2.field,
              title: briefReportExterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.techFieldType3.field,
              title: briefReportExterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.industryField.field,
              title: briefReportExterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.industryOrientation.field,
              title: briefReportExterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.publishDepartment.field,
              title: briefReportExterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.checkInTimeStart.field,
              title: briefReportExterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: briefReportExterior.checkInTimeEnd.field,
              // title: briefReportExterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: briefReportExterior.knowledgeType.field,
              title: briefReportExterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.securityLevel.field,
              title: briefReportExterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },

            {
              field: briefReportExterior.formatTimeStart.field,
              title: briefReportExterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: briefReportExterior.formatTimeEnd.field,
              // title: briefReportExterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: briefReportExterior.informationCollactor.field,
              title: briefReportExterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.informationAuditor.field,
              title: briefReportExterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.language.field,
              title: briefReportExterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.keywords.field,
              title: briefReportExterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.informationOrigin.field,
              title: briefReportExterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportExterior.referWebsite.field,
              title: briefReportExterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            // {
            //   field: briefReportExterior.createTime.field,
            //   title: briefReportExterior.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: briefReportExterior.updateTime.field,
            //   title: briefReportExterior.updateTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
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
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
        },
        sortConfig: {
          trigger: "cell",
          remote: true,
        },
        importConfig: {
          mode: "insert",
          remote: true,
          types: ["xlsx"],
          importMethod: this.importMethod,
        },
        exportConfig: {
          // remote: true,
          exportMethod: this.exportMethod,
          // original: true,
          types: ["xlsx"],
          modes: ["current", "selected"],
        },
        toolbarConfig: {
          buttons: [
            { code: "insert_actived", name: "新增" },
            { code: "delete", name: "直接删除" },
            { code: "mark_cancel", name: "删除/取消" },
            {
              code: "save",
              name: "保存",
              status: "success",
            },
          ],
          refresh: true,
          import: true,
          export: true,
          zoom: true,
          custom: true,
        },
        proxyConfig: {
          autoLoad: true,
          form: true,
          sort: true,
          props: {
            result: "result",
            total: "page.total",
          },
          ajax: {
            query: ({ page, sorts, form }) => {
              const queryParams = Object.assign({}, form, {
                page: page.currentPage - 1,
                size: page.pageSize,
              });
              let firstSort = sorts[0];
              if (firstSort) {
                queryParams.sort = firstSort.property + "," + firstSort.order;
                // queryParams.order = firstSort.order;
              }
              // console.log(queryParams);
              let p = searchBriefReportExterior(queryParams);
              return p;
            },
            save: (data) => {
              confirmSaveBriefReportExterior(data.body);
            },
            delete: (data) => {
              confirmSaveBriefReportExterior(data.body);
            },
          },
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: briefReportExterior.id.field,
            title: briefReportExterior.id.title,
          },
          {
            type: "checkbox",
            width: 50,
            fixed: "left",
            align: "center",
          },
          {
            fixed: "left",
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            width: 90,
            sortable: true,
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: briefReportExterior.orderNum.field,
            title: briefReportExterior.orderNum.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.name.field,
            title: briefReportExterior.name.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.type.field,
            title: briefReportExterior.type.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.completeDepartment.field,
            title: briefReportExterior.completeDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.title.field,
            title: briefReportExterior.title.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.industryType.field,
            title: briefReportExterior.industryType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.industryDetailType.field,
            title: briefReportExterior.industryDetailType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.industryChainType.field,
            title: briefReportExterior.industryChainType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referDeviceType.field,
            title: briefReportExterior.referDeviceType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referDevice.field,
            title: briefReportExterior.referDevice.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referProduct.field,
            title: briefReportExterior.referProduct.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referProject.field,
            title: briefReportExterior.referProject.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referInstitution.field,
            title: briefReportExterior.referInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referTechnology.field,
            title: briefReportExterior.referTechnology.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referCategory.field,
            title: briefReportExterior.referCategory.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.department.field,
            title: briefReportExterior.department.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.researchField.field,
            title: briefReportExterior.researchField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.researchOrientation.field,
            title: briefReportExterior.researchOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.researchSystem.field,
            title: briefReportExterior.researchSystem.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.techFieldType1.field,
            title: briefReportExterior.techFieldType1.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.techFieldType2.field,
            title: briefReportExterior.techFieldType2.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.techFieldType3.field,
            title: briefReportExterior.techFieldType3.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.industryField.field,
            title: briefReportExterior.industryField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.industryOrientation.field,
            title: briefReportExterior.industryOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.publishDepartment.field,
            title: briefReportExterior.publishDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.checkInTime.field,
            title: briefReportExterior.checkInTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.knowledgeType.field,
            title: briefReportExterior.knowledgeType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.securityLevel.field,
            title: briefReportExterior.securityLevel.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.abs.field,
            title: briefReportExterior.abs.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.formatTime.field,
            title: briefReportExterior.formatTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.informationCollactor.field,
            title: briefReportExterior.informationCollactor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.informationAuditor.field,
            title: briefReportExterior.informationAuditor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.language.field,
            title: briefReportExterior.language.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.keywords.field,
            title: briefReportExterior.keywords.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.informationOrigin.field,
            title: briefReportExterior.informationOrigin.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportExterior.referWebsite.field,
            title: briefReportExterior.referWebsite.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: briefReportExterior.fileName.field,
            title: briefReportExterior.fileName.title,
            fixed: "right",
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "操作",
            slots: { default: "uploadFile" },
            fixed: "right",
          },
        ],
      },
    };
  },
  methods: {
    removeFileById(row) {
      removeRemoteFileById({ id: row.id }).then((res) => {
        this.$refs.xGrid.commitProxy("query");
        Message({
          message: "删除成功！",
          type: "success",
        });
      });
    },
    uploadFileSuccess() {
      this.$refs.xGrid.commitProxy("query");
      Message({
        message: "上传成功",
        type: "success",
      });
    },
    replaceExcelTitle(workbook) {
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      for (let k1 in worksheet) {
        if (k1.endsWith(1)) {
          for (let k2 in briefReportExterior) {
            if (briefReportExterior[k2].title == worksheet[k1].v) {
              worksheet[k1].v = briefReportExterior[k2].field;
              worksheet[k1].r = "<t>" + briefReportExterior[k2].field + "</t>";
              worksheet[k1].h = briefReportExterior[k2].field;
              worksheet[k1].w = briefReportExterior[k2].field;
            }
          }
        }
      }
    },
    importMethod({ file }) {
      // return Promise.resolve(file.file).then((file) => {});
      let xGrid = this.$refs.xGrid;
      let methods = this.$options.methods;
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function (e) {
          let data = e.target.result;
          let workbook = XLSX.read(data, { type: "binary" });
          let worksheet = workbook.Sheets[workbook.SheetNames[0]];
          methods.replaceExcelTitle(workbook);
          let importData = XLSX.utils.sheet_to_json(worksheet);
          // console.log(workbook);
          // console.log(importData);
          confirmSaveBriefReportExterior({
            insertRecords: importData,
          }).then(() => {
            xGrid.commitProxy("query");
            Message({
              type: "success",
              message: "导入成功",
            });
          });
          resolve();
        };
        reader.onerror = function (e) {
          Message({
            type: "error",
            message: "读取文件出错",
          });
          reject();
        };
        reader.readAsBinaryString(file);
      }).catch(() => {
        Message({
          type: "error",
          message: "导入失败",
        });
      });
    },
  },
  mounted: function () {
    // var xGrid = this.$refs.xGrid;
  },
};
</script>

<style>
</style>