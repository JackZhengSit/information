<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-14 15:11:31
 * @LastEditTime: 2021-02-02 15:31:17
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
          ><el-button
            type="primary"
            style="margin-left: 10px"
            @click="relate(row)"
            >关联</el-button
          >
        </el-upload>
      </template> </vxe-grid
    ><relate-dialog
      ref="relateDialogRef"
      :originId="originId"
      :infoType="infoType"
    ></relate-dialog>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import { reportExterior } from "../store/infoType";
import {
  searchReportExterior,
  removeRemoteFileById,
  confirmSaveReportExterior
} from "@/api/manageReportExterior";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";
import moment from "moment";
function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(reportExterior).forEach(function (key) {
      if (reportExterior[key].title == headers[i])
        headers[i] = reportExterior[key].field;
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
      originId: "",
      infoType: "reportExterior",
      // xGrid: this.$refs.xGrid,
      uploadUrl: baseUrl + "/manual/report-exterior/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "reportExteriorGrid",
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
              field: reportExterior.orderNumStart.field,
              title: reportExterior.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1
              }
            },
            {
              field: reportExterior.orderNumEnd.field,
              // title: reportExterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000
              }
            },

            {
              field: reportExterior.type.field,
              title: reportExterior.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.completeDepartment.field,
              title: reportExterior.completeDepartment.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.title.field,
              title: reportExterior.title.title,
              span: 8,
              // folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.topicCategory.field,
              title: reportExterior.topicCategory.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.professionField.field,
              title: reportExterior.professionField.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.infoNo.field,
              title: reportExterior.infoNo.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.industryType.field,
              title: reportExterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.industryDetailType.field,
              title: reportExterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.industryChainType.field,
              title: reportExterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referDeviceType.field,
              title: reportExterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referDevice.field,
              title: reportExterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referProduct.field,
              title: reportExterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referProject.field,
              title: reportExterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referInstitution.field,
              title: reportExterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referTechnology.field,
              title: reportExterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.infoCategory.field,
              title: reportExterior.infoCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.department.field,
              title: reportExterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.researchField.field,
              title: reportExterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.researchOrientation.field,
              title: reportExterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.researchSystem.field,
              title: reportExterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.techFieldType1.field,
              title: reportExterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.techFieldType2.field,
              title: reportExterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.techFieldType3.field,
              title: reportExterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.industryField.field,
              title: reportExterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.industryOrientation.field,
              title: reportExterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.publishDepartment.field,
              title: reportExterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.checkInTimeStart.field,
              title: reportExterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: reportExterior.checkInTimeEnd.field,
              // title: reportExterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: reportExterior.knowledgeType.field,
              title: reportExterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.securityLevel.field,
              title: reportExterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },

            {
              field: reportExterior.formatTimeStart.field,
              title: reportExterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: reportExterior.formatTimeEnd.field,
              // title: reportExterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: reportExterior.informationCollactor.field,
              title: reportExterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.informationAuditor.field,
              title: reportExterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.language.field,
              title: reportExterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.keywords.field,
              title: reportExterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.informationOrigin.field,
              title: reportExterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: reportExterior.referWebsite.field,
              title: reportExterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            // {
            //   field: reportExterior.createTime.field,
            //   title: reportExterior.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: reportExterior.updateTime.field,
            //   title: reportExterior.updateTime.title,
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
              let p = searchReportExterior(queryParams);
              return p;
            },
            save: data => {
              confirmSaveReportExterior(data.body);
            },
            delete: data => {
              confirmSaveReportExterior(data.body);
            }
          }
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: reportExterior.id.field,
            title: reportExterior.id.title
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
            field: reportExterior.orderNum.field,
            title: reportExterior.orderNum.title
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.type.field,
            title: reportExterior.type.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.completeDepartment.field,
            title: reportExterior.completeDepartment.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.title.field,
            title: reportExterior.title.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.industryType.field,
            title: reportExterior.industryType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.industryDetailType.field,
            title: reportExterior.industryDetailType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.industryChainType.field,
            title: reportExterior.industryChainType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referDeviceType.field,
            title: reportExterior.referDeviceType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referDevice.field,
            title: reportExterior.referDevice.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referProduct.field,
            title: reportExterior.referProduct.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referProject.field,
            title: reportExterior.referProject.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referInstitution.field,
            title: reportExterior.referInstitution.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referTechnology.field,
            title: reportExterior.referTechnology.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.infoCategory.field,
            title: reportExterior.infoCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.topicCategory.field,
            title: reportExterior.topicCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.professionField.field,
            title: reportExterior.professionField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.infoNo.field,
            title: reportExterior.infoNo.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.department.field,
            title: reportExterior.department.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.researchField.field,
            title: reportExterior.researchField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.researchOrientation.field,
            title: reportExterior.researchOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.researchSystem.field,
            title: reportExterior.researchSystem.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.techFieldType1.field,
            title: reportExterior.techFieldType1.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.techFieldType2.field,
            title: reportExterior.techFieldType2.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.techFieldType3.field,
            title: reportExterior.techFieldType3.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.industryField.field,
            title: reportExterior.industryField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.industryOrientation.field,
            title: reportExterior.industryOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.publishDepartment.field,
            title: reportExterior.publishDepartment.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.checkInTime.field,
            title: reportExterior.checkInTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.knowledgeType.field,
            title: reportExterior.knowledgeType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.securityLevel.field,
            title: reportExterior.securityLevel.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.abs.field,
            title: reportExterior.abs.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.formatTime.field,
            title: reportExterior.formatTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.informationCollactor.field,
            title: reportExterior.informationCollactor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.informationAuditor.field,
            title: reportExterior.informationAuditor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.language.field,
            title: reportExterior.language.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.keywords.field,
            title: reportExterior.keywords.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.informationOrigin.field,
            title: reportExterior.informationOrigin.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: reportExterior.referWebsite.field,
            title: reportExterior.referWebsite.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: reportExterior.fileName.field,
            title: reportExterior.fileName.title,
            fixed: "right"
          },
          {
            resizable: true,
            width: 250,
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
    relate(row) {
      this.originId = row.id.toString();
      this.$refs.relateDialogRef.show();
    },
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
          for (let k2 in reportExterior) {
            if (reportExterior[k2].title == worksheet[k1].v) {
              worksheet[k1].v = reportExterior[k2].field;
              worksheet[k1].r = "<t>" + reportExterior[k2].field + "</t>";
              worksheet[k1].h = reportExterior[k2].field;
              worksheet[k1].w = reportExterior[k2].field;
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
          confirmSaveReportExterior({
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
        reader.onerror = function (e) {
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
      this.tableExportMethod(options, reportExterior);
      return Promise.resolve();
    }
  },
  mounted: function () {
    // var xGrid = this.$refs.xGrid;
  }
};
</script>

<style></style>
