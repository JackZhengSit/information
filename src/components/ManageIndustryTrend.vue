<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-14 15:11:31
 * @LastEditTime: 2021-02-02 15:29:29
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

          <el-button
            type="primary"
            style="margin-left: 10px"
            @click="relate(row)"
            >关联</el-button
          >
        </el-upload>
      </template>
    </vxe-grid>

    <relate-dialog
      ref="relateDialogRef"
      :originId="originId"
      :infoType="infoType"
    ></relate-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";

import { industryTrend } from "../store/infoType";
import {
  searchIndustryTrend,
  removeRemoteFileById,
  confirmSaveIndustryTrend
} from "@/api/manageIndustryTrend";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";
import moment from "moment";

export default {
  data() {
    return {
      // xGrid: this.$refs.xGrid,
      uploadUrl: baseUrl + "/manual/industry-trend/upload",

      originId: "",
      infoType: "industryTrend",

      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "industryTrendGrid",
        maxHeight: 1500,
        // rowId: "orderNum",
        editConfig: {
          trigger: "dblclick",
          mode: "row",
          showStatus: true
        },
        formConfig: {
          // data: {},
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: industryTrend.orderNumStart.field,
              title: industryTrend.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1
              }
            },
            {
              field: industryTrend.orderNumEnd.field,
              // title: industryTrend.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000
              }
            },
            {
              field: industryTrend.title.field,
              title: industryTrend.title.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.trendType.field,
              title: industryTrend.trendType.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.industryType.field,
              title: industryTrend.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.topicCategory.field,
              title: industryTrend.topicCategory.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.professionField.field,
              title: industryTrend.professionField.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.infoNo.field,
              title: industryTrend.infoNo.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.industryDetailType.field,
              title: industryTrend.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.industryChainType.field,
              title: industryTrend.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referDeviceType.field,
              title: industryTrend.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referDevice.field,
              title: industryTrend.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referProduct.field,
              title: industryTrend.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referProject.field,
              title: industryTrend.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referInstitution.field,
              title: industryTrend.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referTechnology.field,
              title: industryTrend.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.infoCategory.field,
              title: industryTrend.infoCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.department.field,
              title: industryTrend.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.researchField.field,
              title: industryTrend.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.researchOrientation.field,
              title: industryTrend.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.researchSystem.field,
              title: industryTrend.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.techFieldType1.field,
              title: industryTrend.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.techFieldType2.field,
              title: industryTrend.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.techFieldType3.field,
              title: industryTrend.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.industryField.field,
              title: industryTrend.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.industryOrientation.field,
              title: industryTrend.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.publishDepartment.field,
              title: industryTrend.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            { span: 8 },
            {
              field: industryTrend.checkInTimeStart.field,
              title: industryTrend.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: industryTrend.checkInTimeEnd.field,
              // title: industryTrend.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: industryTrend.knowledgeType.field,
              title: industryTrend.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.securityLevel.field,
              title: industryTrend.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },

            {
              field: industryTrend.formatTimeStart.field,
              title: industryTrend.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01"
              }
            },
            {
              field: industryTrend.formatTimeEnd.field,
              // title: industryTrend.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD")
              }
            },
            {
              field: industryTrend.informationCollactor.field,
              title: industryTrend.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.informationAuditor.field,
              title: industryTrend.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.language.field,
              title: industryTrend.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.keywords.field,
              title: industryTrend.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.informationOrigin.field,
              title: industryTrend.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: industryTrend.referWebsite.field,
              title: industryTrend.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            // {
            //   field: industryTrend.createTime.field,
            //   title: industryTrend.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: industryTrend.updateTime.field,
            //   title: industryTrend.updateTime.title,
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
              let p = searchIndustryTrend(queryParams);
              return p;
            },
            save: data => {
              confirmSaveIndustryTrend(data.body);
            },
            delete: data => {
              confirmSaveIndustryTrend(data.body);
            }
          }
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: industryTrend.id.field,
            title: industryTrend.id.title
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
            field: industryTrend.orderNum.field,
            title: industryTrend.orderNum.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.trendType.field,
            title: industryTrend.trendType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.title.field,
            title: industryTrend.title.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.industryType.field,
            title: industryTrend.industryType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.industryDetailType.field,
            title: industryTrend.industryDetailType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.industryChainType.field,
            title: industryTrend.industryChainType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referDeviceType.field,
            title: industryTrend.referDeviceType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referDevice.field,
            title: industryTrend.referDevice.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referProduct.field,
            title: industryTrend.referProduct.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referProject.field,
            title: industryTrend.referProject.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referInstitution.field,
            title: industryTrend.referInstitution.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referTechnology.field,
            title: industryTrend.referTechnology.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.infoCategory.field,
            title: industryTrend.infoCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.topicCategory.field,
            title: industryTrend.topicCategory.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.professionField.field,
            title: industryTrend.professionField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.infoNo.field,
            title: industryTrend.infoNo.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.department.field,
            title: industryTrend.department.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.researchField.field,
            title: industryTrend.researchField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.researchOrientation.field,
            title: industryTrend.researchOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.researchSystem.field,
            title: industryTrend.researchSystem.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.techFieldType1.field,
            title: industryTrend.techFieldType1.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.techFieldType2.field,
            title: industryTrend.techFieldType2.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.techFieldType3.field,
            title: industryTrend.techFieldType3.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.industryField.field,
            title: industryTrend.industryField.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.industryOrientation.field,
            title: industryTrend.industryOrientation.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.publishDepartment.field,
            title: industryTrend.publishDepartment.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.checkInTime.field,
            title: industryTrend.checkInTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.knowledgeType.field,
            title: industryTrend.knowledgeType.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.securityLevel.field,
            title: industryTrend.securityLevel.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.abs.field,
            title: industryTrend.abs.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.formatTime.field,
            title: industryTrend.formatTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.informationCollactor.field,
            title: industryTrend.informationCollactor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.informationAuditor.field,
            title: industryTrend.informationAuditor.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.language.field,
            title: industryTrend.language.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.keywords.field,
            title: industryTrend.keywords.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.informationOrigin.field,
            title: industryTrend.informationOrigin.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: industryTrend.referWebsite.field,
            title: industryTrend.referWebsite.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: industryTrend.fileName.field,
            title: industryTrend.fileName.title,
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
    removeFileById(row) {
      removeRemoteFileById({ id: row.id }).then(() => {
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
          for (let k2 in industryTrend) {
            if (industryTrend[k2].title == worksheet[k1].v) {
              worksheet[k1].v = industryTrend[k2].field;
              worksheet[k1].r = "<t>" + industryTrend[k2].field + "</t>";
              worksheet[k1].h = industryTrend[k2].field;
              worksheet[k1].w = industryTrend[k2].field;
            }
          }
        }
      }
    },
    importMethod({ file }) {
      // return Promise.resolve(file.file).then((file) => {});
      let xGrid = this.$refs.xGrid;
      let methods = this.$options.methods;
      // this.$XModal.message({ message: "loading 消息提示", status: "loading" });
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
          confirmSaveIndustryTrend({
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
        reader.onerror = function () {
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
      this.tableExportMethod(options, industryTrend);
      return Promise.resolve();
    },
    relate(row) {
      this.originId = row.id.toString();
      this.$refs.relateDialogRef.show();
    }
  },
  mounted() {
    // var xGrid = this.$refs.xGrid;
  }
};
</script>

<style></style>
