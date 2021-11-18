<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-30 13:46:45
 * @LastEditTime: 2021-02-02 15:28:51
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
import { briefReportInterior } from "../store/infoType";
import { briefReportInteriorExample } from "@/store/infoExample";
import {
  searchBriefReportInterior,
  removeRemoteFileById,
  confirmSaveBriefReportInterior
} from "@/api/manageBriefReportInterior";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";
import moment from "moment";

function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(briefReportInterior).forEach(function(key) {
      if (briefReportInterior[key].title == headers[i])
        headers[i] = briefReportInterior[key].field;
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
      uploadUrl: baseUrl + "/manual/brief-report-interior/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "briefReportInteriorGrid",
        maxHeight: 1500,
        // rowId: "orderNum",
        editConfig: {
          trigger: "dblclick",
          mode: "row",
          showStatus: true
        },
        formConfig: {
          data: {},
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: briefReportInterior.orderNumStart.field,
              title: briefReportInterior.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1
              }
            },
            {
              field: briefReportInterior.orderNumEnd.field,
              // title: briefReportInterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000
              }
            },
            {
              field: briefReportInterior.name.field,
              title: briefReportInterior.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.type.field,
              title: briefReportInterior.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.completeDepartment.field,
              title: briefReportInterior.completeDepartment.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.topicCategory.field,
              title: briefReportInterior.topicCategory.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.professionField.field,
              title: briefReportInterior.professionField.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.infoNo.field,
              title: briefReportInterior.infoNo.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.title.field,
              title: briefReportInterior.title.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.industryType.field,
              title: briefReportInterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.industryDetailType.field,
              title: briefReportInterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.industryChainType.field,
              title: briefReportInterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referDeviceType.field,
              title: briefReportInterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referDevice.field,
              title: briefReportInterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referProduct.field,
              title: briefReportInterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referProject.field,
              title: briefReportInterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referInstitution.field,
              title: briefReportInterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referTechnology.field,
              title: briefReportInterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.infoCategory.field,
              title: briefReportInterior.infoCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.department.field,
              title: briefReportInterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.researchField.field,
              title: briefReportInterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.researchOrientation.field,
              title: briefReportInterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.researchSystem.field,
              title: briefReportInterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.techFieldType1.field,
              title: briefReportInterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.techFieldType2.field,
              title: briefReportInterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.techFieldType3.field,
              title: briefReportInterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.industryField.field,
              title: briefReportInterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.industryOrientation.field,
              title: briefReportInterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.publishDepartment.field,
              title: briefReportInterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.checkInTimeStart.field,
              title: briefReportInterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: briefReportInterior.checkInTimeEnd.field,
              // title: briefReportInterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: briefReportInterior.knowledgeType.field,
              title: briefReportInterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.securityLevel.field,
              title: briefReportInterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },

            {
              field: briefReportInterior.formatTimeStart.field,
              title: briefReportInterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: briefReportInterior.formatTimeEnd.field,
              // title: briefReportInterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: briefReportInterior.informationCollactor.field,
              title: briefReportInterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.informationAuditor.field,
              title: briefReportInterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.language.field,
              title: briefReportInterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.keywords.field,
              title: briefReportInterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.informationOrigin.field,
              title: briefReportInterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: briefReportInterior.referWebsite.field,
              title: briefReportInterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            // {
            //   field: briefReportInterior.createTime.field,
            //   title: briefReportInterior.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: briefReportInterior.updateTime.field,
            //   title: briefReportInterior.updateTime.title,
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
                      status: "primary"
                    }
                  },
                  { props: { type: "reset", content: "重置" } }
                ]
              }
            }
          ]
        },
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000]
        },
        sortConfig: {
          trigger: "cell",
          remote: true
        },
        importConfig: {
          mode: "insert",
          remote: true,
          types: ["xlsx"],
          importMethod: this.importMethod
        },
        exportConfig: {
          remote: true,
          exportMethod: this.exportMethod,
          // original: true,
          // types: ["xlsx"],
          modes: ["current", "selected"]
        },
        toolbarConfig: {
          buttons: [
            { code: "insert_actived", name: "新增" },
            { code: "delete", name: "直接删除" },
            { code: "mark_cancel", name: "删除/取消" },
            {
              code: "save",
              name: "保存",
              status: "success"
            }
          ],
          refresh: true,
          import: true,
          export: true,
          zoom: true,
          custom: true
        },
        proxyConfig: {
          autoLoad: true,
          form: true,
          sort: true,
          props: {
            result: "result",
            total: "page.total"
          },
          ajax: {
            query: ({ page, sorts, form }) => {
              const queryParams = Object.assign({}, form, {
                page: page.currentPage - 1,
                size: page.pageSize
              });
              let firstSort = sorts[0];
              if (firstSort) {
                queryParams.sort = firstSort.property + "," + firstSort.order;
                // queryParams.order = firstSort.order;
              }
              // console.log(queryParams);
              let p = searchBriefReportInterior(queryParams);
              return p;
            },
            save: data => {
              confirmSaveBriefReportInterior(data.body);
              // .then((result) =>
              //   Message({
              //     message: "保存成功",
              //     type: "success",
              //   })
              // );
            },
            delete: data => {
              confirmSaveBriefReportInterior(data.body);
              // .then((result) =>
              //   Message({
              //     message: "删除成功",
              //     type: "success",
              //   })
              // );
            }
          }
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: briefReportInterior.id.field,
            title: briefReportInterior.id.title
          },
          {
            type: "checkbox",
            width: 50,
            fixed: "left",
            align: "center"
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
            field: briefReportInterior.orderNum.field,
            title: briefReportInterior.orderNum.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.name.field,
            title: briefReportInterior.name.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.type.field,
            title: briefReportInterior.type.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.completeDepartment.field,
            title: briefReportInterior.completeDepartment.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.title.field,
            title: briefReportInterior.title.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryType.field,
            title: briefReportInterior.industryType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryDetailType.field,
            title: briefReportInterior.industryDetailType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryChainType.field,
            title: briefReportInterior.industryChainType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referDeviceType.field,
            title: briefReportInterior.referDeviceType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referDevice.field,
            title: briefReportInterior.referDevice.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referProduct.field,
            title: briefReportInterior.referProduct.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referProject.field,
            title: briefReportInterior.referProject.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referInstitution.field,
            title: briefReportInterior.referInstitution.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referTechnology.field,
            title: briefReportInterior.referTechnology.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.infoCategory.field,
            title: briefReportInterior.infoCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.topicCategory.field,
            title: briefReportInterior.topicCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.professionField.field,
            title: briefReportInterior.professionField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.infoNo.field,
            title: briefReportInterior.infoNo.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.department.field,
            title: briefReportInterior.department.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchField.field,
            title: briefReportInterior.researchField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchOrientation.field,
            title: briefReportInterior.researchOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchSystem.field,
            title: briefReportInterior.researchSystem.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType1.field,
            title: briefReportInterior.techFieldType1.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType2.field,
            title: briefReportInterior.techFieldType2.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType3.field,
            title: briefReportInterior.techFieldType3.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryField.field,
            title: briefReportInterior.industryField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryOrientation.field,
            title: briefReportInterior.industryOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.publishDepartment.field,
            title: briefReportInterior.publishDepartment.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.checkInTime.field,
            title: briefReportInterior.checkInTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.knowledgeType.field,
            title: briefReportInterior.knowledgeType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.securityLevel.field,
            title: briefReportInterior.securityLevel.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.abs.field,
            title: briefReportInterior.abs.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.formatTime.field,
            title: briefReportInterior.formatTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationCollactor.field,
            title: briefReportInterior.informationCollactor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationAuditor.field,
            title: briefReportInterior.informationAuditor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.language.field,
            title: briefReportInterior.language.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.keywords.field,
            title: briefReportInterior.keywords.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationOrigin.field,
            title: briefReportInterior.informationOrigin.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referWebsite.field,
            title: briefReportInterior.referWebsite.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: briefReportInterior.fileName.field,
            title: briefReportInterior.fileName.title,
            fixed: "right"
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "操作",
            slots: { default: "uploadFile" },
            fixed: "right"
          }
        ]
      }
    };
  },
  methods: {
    removeFileById(row) {
      removeRemoteFileById({ id: row.id }).then(res => {
        this.$refs.xGrid.commitProxy("query");
        Message({
          message: "删除成功！",
          type: "success"
        });
      });
    },
    uploadFileSuccess() {
      this.$refs.xGrid.commitProxy("query");
      Message({
        message: "上传成功",
        type: "success"
      });
    },
    replaceExcelTitle(workbook) {
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      for (let k1 in worksheet) {
        if (k1.endsWith(1)) {
          for (let k2 in briefReportInterior) {
            if (briefReportInterior[k2].title == worksheet[k1].v) {
              worksheet[k1].v = briefReportInterior[k2].field;
              worksheet[k1].r = "<t>" + briefReportInterior[k2].field + "</t>";
              worksheet[k1].h = briefReportInterior[k2].field;
              worksheet[k1].w = briefReportInterior[k2].field;
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
        reader.onload = function(e) {
          let data = e.target.result;
          let workbook = XLSX.read(data, { type: "binary" });
          let worksheet = workbook.Sheets[workbook.SheetNames[0]];
          methods.replaceExcelTitle(workbook);
          let importData = XLSX.utils.sheet_to_json(worksheet);
          // console.log(workbook);
          // console.log(importData);
          confirmSaveBriefReportInterior({
            insertRecords: importData
          }).then(() => {
            xGrid.commitProxy("query");
            Message({
              type: "success",
              message: "导入成功"
            });
          });
          resolve();
        };
        reader.onerror = function(e) {
          Message({
            type: "error",
            message: "读取文件出错"
          });
          reject();
        };
        reader.readAsBinaryString(file);
      }).catch(() => {
        Message({
          type: "error",
          message: "导入失败"
        });
      });
    },
    exportMethod({ options }) {
      this.tableExportMethod(options, briefReportInterior);
      return Promise.resolve();
    }
  },
  mounted: function() {
    // var xGrid = this.$refs.xGrid;
  }
};
</script>

<style></style>
