<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-14 15:11:31
 * @LastEditTime: 2021-01-11 10:55:34
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
import { patentExterior } from "../store/infoType";
import {
  searchPatentExterior,
  removeRemoteFileById,
  confirmSavePatentExterior,
} from "@/api/managePatentExterior";
import baseUrl from "@/config/baseUrl";

function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(patentExterior).forEach(function (key) {
      if (patentExterior[key].title == headers[i])
        headers[i] = patentExterior[key].field;
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
      uploadUrl: baseUrl + "/manual/patent-exterior/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "patentExteriorGrid",
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
              field: patentExterior.orderNumStart.field,
              title: patentExterior.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1,
              },
            },
            {
              field: patentExterior.orderNumEnd.field,
              // title: patentExterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000,
              },
            },

            {
              field: patentExterior.inventionTitile.field,
              title: patentExterior.inventionTitile.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.applicationNo.field,
              title: patentExterior.applicationNo.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.publicationNo.field,
              title: patentExterior.publicationNo.title,
              span: 8,

              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.applicationDayStart.field,
              title: patentExterior.applicationDayStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: patentExterior.applicationDayEnd.field,
              // title: patentExterior.applicationDayEnd.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "2020-12-12",
              },
            },

            {
              field: patentExterior.applicationType.field,
              title: patentExterior.applicationType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.patentType.field,
              title: patentExterior.patentType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.assignee.field,
              title: patentExterior.assignee.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.publicationDayStart.field,
              title: patentExterior.publicationDayStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: patentExterior.publicationDayEnd.field,
              // title: patentExterior.publicationDayEnd.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "2020-12-12",
              },
            },

            {
              field: patentExterior.patentType.field,
              title: patentExterior.patentType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.assignee.field,
              title: patentExterior.assignee.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.firstAssignee.field,
              title: patentExterior.firstAssignee.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.inventor.field,
              title: patentExterior.inventor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.priorityNum.field,
              title: patentExterior.priorityNum.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.priorityDayStart.field,
              title: patentExterior.priorityDayStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: patentExterior.priorityDayEnd.field,
              // title: patentExterior.priorityDayEnd.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: patentExterior.mainClassNum.field,
              title: patentExterior.mainClassNum.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.legalStatus.field,
              title: patentExterior.legalStatus.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },

            {
              field: patentExterior.industryType.field,
              title: patentExterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.industryDetailType.field,
              title: patentExterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.industryChainType.field,
              title: patentExterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referDeviceType.field,
              title: patentExterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referDevice.field,
              title: patentExterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referProduct.field,
              title: patentExterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referProject.field,
              title: patentExterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referInstitution.field,
              title: patentExterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referTechnology.field,
              title: patentExterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referCategory.field,
              title: patentExterior.referCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.department.field,
              title: patentExterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.researchField.field,
              title: patentExterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.researchOrientation.field,
              title: patentExterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.researchSystem.field,
              title: patentExterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.techFieldType1.field,
              title: patentExterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.techFieldType2.field,
              title: patentExterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.techFieldType3.field,
              title: patentExterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.industryField.field,
              title: patentExterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.industryOrientation.field,
              title: patentExterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.publishDepartment.field,
              title: patentExterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.checkInTimeStart.field,
              title: patentExterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: patentExterior.checkInTimeEnd.field,
              // title: patentExterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: patentExterior.knowledgeType.field,
              title: patentExterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.securityLevel.field,
              title: patentExterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },

            {
              field: patentExterior.formatTimeStart.field,
              title: patentExterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: patentExterior.formatTimeEnd.field,
              // title: patentExterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: patentExterior.informationCollactor.field,
              title: patentExterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.informationAuditor.field,
              title: patentExterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.language.field,
              title: patentExterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.keywords.field,
              title: patentExterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.informationOrigin.field,
              title: patentExterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: patentExterior.referWebsite.field,
              title: patentExterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            // {
            //   field: patentExterior.createTime.field,
            //   title: patentExterior.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: patentExterior.updateTime.field,
            //   title: patentExterior.updateTime.title,
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
          types: ["csv"],
          importMethod: this.importMethod,
        },
        exportConfig: {
          // columnFilterMethod(column) {
          //   console.log(column);
          //   column.type = "checkbox";
          // },
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
              let p = searchPatentExterior(queryParams);
              return p;
            },
            save: (data) => {
              confirmSavePatentExterior(data.body);
            },
            delete: (data) => {
              confirmSavePatentExterior(data.body);
            },
          },
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: patentExterior.id.field,
            title: patentExterior.id.title,
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
            field: patentExterior.orderNum.field,
            title: patentExterior.orderNum.title,
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.inventionTitile.field,
            title: patentExterior.inventionTitile.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.applicationNo.field,
            title: patentExterior.applicationNo.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.applicationDay.field,
            title: patentExterior.applicationDay.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.publicationNo.field,
            title: patentExterior.publicationNo.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.publicationDay.field,
            title: patentExterior.publicationDay.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.applicationType.field,
            title: patentExterior.applicationType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.patentType.field,
            title: patentExterior.patentType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.assignee.field,
            title: patentExterior.assignee.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.firstAssignee.field,
            title: patentExterior.firstAssignee.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.inventor.field,
            title: patentExterior.inventor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.claims.field,
            title: patentExterior.claims.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.priorityNum.field,
            title: patentExterior.priorityNum.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.priorityDay.field,
            title: patentExterior.priorityDay.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.mainClassNum.field,
            title: patentExterior.mainClassNum.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.legalStatus.field,
            title: patentExterior.legalStatus.title,
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.industryType.field,
            title: patentExterior.industryType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.industryDetailType.field,
            title: patentExterior.industryDetailType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.industryChainType.field,
            title: patentExterior.industryChainType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referDeviceType.field,
            title: patentExterior.referDeviceType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referDevice.field,
            title: patentExterior.referDevice.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referProduct.field,
            title: patentExterior.referProduct.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referProject.field,
            title: patentExterior.referProject.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referInstitution.field,
            title: patentExterior.referInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referTechnology.field,
            title: patentExterior.referTechnology.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referCategory.field,
            title: patentExterior.referCategory.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.department.field,
            title: patentExterior.department.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.researchField.field,
            title: patentExterior.researchField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.researchOrientation.field,
            title: patentExterior.researchOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.researchSystem.field,
            title: patentExterior.researchSystem.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.techFieldType1.field,
            title: patentExterior.techFieldType1.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.techFieldType2.field,
            title: patentExterior.techFieldType2.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.techFieldType3.field,
            title: patentExterior.techFieldType3.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.industryField.field,
            title: patentExterior.industryField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.industryOrientation.field,
            title: patentExterior.industryOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.publishDepartment.field,
            title: patentExterior.publishDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.checkInTime.field,
            title: patentExterior.checkInTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.knowledgeType.field,
            title: patentExterior.knowledgeType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.securityLevel.field,
            title: patentExterior.securityLevel.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.abs.field,
            title: patentExterior.abs.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.formatTime.field,
            title: patentExterior.formatTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.informationCollactor.field,
            title: patentExterior.informationCollactor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.informationAuditor.field,
            title: patentExterior.informationAuditor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.language.field,
            title: patentExterior.language.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.keywords.field,
            title: patentExterior.keywords.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.informationOrigin.field,
            title: patentExterior.informationOrigin.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: patentExterior.referWebsite.field,
            title: patentExterior.referWebsite.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: patentExterior.fileName.field,
            title: patentExterior.fileName.title,
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
    importMethod(file) {
      let xGrid = this.$refs.xGrid;
      return Promise.resolve(file.file)
        .then((file) => {
          let reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function () {
            let data = csvToObject(this.result);
            // console.log(data);
            confirmSavePatentExterior({
              insertRecords: data,
            }).then(() => {
              xGrid.commitProxy("query");
              Message({
                message: "导入成功",
                type: "success",
              });
            });
          };
        })
        .catch(() => {
          Message({
            message: "导入失败",
            type: "error",
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