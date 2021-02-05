<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-14 15:11:31
 * @LastEditTime: 2021-02-02 15:32:53
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
import { standardExterior } from "../store/infoType";
import {
  searchStandardExterior,
  removeRemoteFileById,
  confirmSaveStandardExterior,
} from "@/api/manageStandardExterior";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";
import moment from "moment";
function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(standardExterior).forEach(function (key) {
      if (standardExterior[key].title == headers[i])
        headers[i] = standardExterior[key].field;
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
      uploadUrl: baseUrl + "/manual/standard-exterior/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "standardExteriorGrid",
        maxHeight: 1500,
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
              field: standardExterior.orderNumStart.field,
              title: standardExterior.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: 1,
              },
            },
            {
              field: standardExterior.orderNumEnd.field,
              // title: standardExterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000,
              },
            },
            {
              field: standardExterior.type.field,
              title: standardExterior.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.name.field,
              title: standardExterior.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.num.field,
              title: standardExterior.num.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.topicCategory.field,
              title: standardExterior.topicCategory.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.professionField.field,
              title: standardExterior.professionField.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.infoNo.field,
              title: standardExterior.infoNo.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.specifyInstitution.field,
              title: standardExterior.specifyInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.specifyInstitution.field,
              title: standardExterior.specifyInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.applicationScope.field,
              title: standardExterior.applicationScope.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.publicateDateStart.field,
              title: standardExterior.publicateDateStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: standardExterior.publicateDateEnd.field,
              // title: standardExterior.publicateDateEnd.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: moment().format("YYYY-MM-DD"),
              },
            },
            {
              field: standardExterior.executeDateStart.field,
              title: standardExterior.executeDateStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: standardExterior.executeDateEnd.field,
              // title: standardExterior.executeDateEnd.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: moment().format("YYYY-MM-DD"),
              },
            },

            {
              field: standardExterior.author.field,
              title: standardExterior.author.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.status.field,
              title: standardExterior.status.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.authorInstitution.field,
              title: standardExterior.authorInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.chineseStandardClassNumname.field,
              title: standardExterior.chineseStandardClassNumname.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.substituteStandard.field,
              title: standardExterior.substituteStandard.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.publicateCompony.field,
              title: standardExterior.publicateCompony.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },

            {
              field: standardExterior.industryType.field,
              title: standardExterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.industryDetailType.field,
              title: standardExterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.industryChainType.field,
              title: standardExterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referDeviceType.field,
              title: standardExterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referDevice.field,
              title: standardExterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referProduct.field,
              title: standardExterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referProject.field,
              title: standardExterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referInstitution.field,
              title: standardExterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referTechnology.field,
              title: standardExterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.infoCategory.field,
              title: standardExterior.infoCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.department.field,
              title: standardExterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.researchField.field,
              title: standardExterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.researchOrientation.field,
              title: standardExterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.researchSystem.field,
              title: standardExterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.techFieldType1.field,
              title: standardExterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.techFieldType2.field,
              title: standardExterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.techFieldType3.field,
              title: standardExterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.industryField.field,
              title: standardExterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.industryOrientation.field,
              title: standardExterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.publishDepartment.field,
              title: standardExterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.knowledgeType.field,
              title: standardExterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },

            {
              field: standardExterior.checkInTimeStart.field,
              title: standardExterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: standardExterior.checkInTimeEnd.field,
              // title: standardExterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD"),
              },
            },

            {
              field: standardExterior.formatTimeStart.field,
              title: standardExterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: standardExterior.formatTimeEnd.field,
              // title: standardExterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: moment().format("YYYY-MM-DD"),
              },
            },
            {
              field: standardExterior.securityLevel.field,
              title: standardExterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.informationCollactor.field,
              title: standardExterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.informationAuditor.field,
              title: standardExterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.language.field,
              title: standardExterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.keywords.field,
              title: standardExterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.informationOrigin.field,
              title: standardExterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: standardExterior.referWebsite.field,
              title: standardExterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            // {
            //   field: standardExterior.createTime.field,
            //   title: standardExterior.createTime.title,
            //   span: 8,
            //   folding: true,
            //   itemRender: {
            //     name: "$input",
            //     props: { placeholder: "" },
            //   },
            // },
            // {
            //   field: standardExterior.updateTime.field,
            //   title: standardExterior.updateTime.title,
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
          remote: true,
          exportMethod: this.exportMethod,
          // original: true,
          // types: ["xlsx"],
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
              let p = searchStandardExterior(queryParams);
              return p;
            },
            save: (data) => {
              confirmSaveStandardExterior(data.body);
            },
            delete: (data) => {
              confirmSaveStandardExterior(data.body);
            },
          },
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: standardExterior.id.field,
            title: standardExterior.id.title,
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
            field: standardExterior.orderNum.field,
            title: standardExterior.orderNum.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.type.field,
            title: standardExterior.type.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.name.field,
            title: standardExterior.name.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.num.field,
            title: standardExterior.num.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.publicateDate.field,
            title: standardExterior.publicateDate.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.executeDate.field,
            title: standardExterior.executeDate.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.specifyInstitution.field,
            title: standardExterior.specifyInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.applicationScope.field,
            title: standardExterior.applicationScope.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.author.field,
            title: standardExterior.author.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.status.field,
            title: standardExterior.status.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.authorInstitution.field,
            title: standardExterior.authorInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.chineseStandardClassNumname.field,
            title: standardExterior.chineseStandardClassNumname.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.substituteStandard.field,
            title: standardExterior.substituteStandard.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.publicateCompony.field,
            title: standardExterior.publicateCompony.title,
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.industryType.field,
            title: standardExterior.industryType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.industryDetailType.field,
            title: standardExterior.industryDetailType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.industryChainType.field,
            title: standardExterior.industryChainType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referDeviceType.field,
            title: standardExterior.referDeviceType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referDevice.field,
            title: standardExterior.referDevice.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referProduct.field,
            title: standardExterior.referProduct.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referProject.field,
            title: standardExterior.referProject.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referInstitution.field,
            title: standardExterior.referInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referTechnology.field,
            title: standardExterior.referTechnology.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.infoCategory.field,
            title: standardExterior.infoCategory.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.topicCategory.field,
            title: standardExterior.topicCategory.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.professionField.field,
            title: standardExterior.professionField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.infoNo.field,
            title: standardExterior.infoNo.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.department.field,
            title: standardExterior.department.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.researchField.field,
            title: standardExterior.researchField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.researchOrientation.field,
            title: standardExterior.researchOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.researchSystem.field,
            title: standardExterior.researchSystem.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.techFieldType1.field,
            title: standardExterior.techFieldType1.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.techFieldType2.field,
            title: standardExterior.techFieldType2.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.techFieldType3.field,
            title: standardExterior.techFieldType3.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.industryField.field,
            title: standardExterior.industryField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.industryOrientation.field,
            title: standardExterior.industryOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.publishDepartment.field,
            title: standardExterior.publishDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.checkInTime.field,
            title: standardExterior.checkInTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.knowledgeType.field,
            title: standardExterior.knowledgeType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.securityLevel.field,
            title: standardExterior.securityLevel.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.abs.field,
            title: standardExterior.abs.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.formatTime.field,
            title: standardExterior.formatTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.informationCollactor.field,
            title: standardExterior.informationCollactor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.informationAuditor.field,
            title: standardExterior.informationAuditor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.language.field,
            title: standardExterior.language.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.keywords.field,
            title: standardExterior.keywords.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.informationOrigin.field,
            title: standardExterior.informationOrigin.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: standardExterior.referWebsite.field,
            title: standardExterior.referWebsite.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            // editRender: { name: "input", enabled: false },
            field: standardExterior.fileName.field,
            title: standardExterior.fileName.title,
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
          for (let k2 in standardExterior) {
            if (standardExterior[k2].title == worksheet[k1].v) {
              worksheet[k1].v = standardExterior[k2].field;
              worksheet[k1].r = "<t>" + standardExterior[k2].field + "</t>";
              worksheet[k1].h = standardExterior[k2].field;
              worksheet[k1].w = standardExterior[k2].field;
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
          confirmSaveStandardExterior({
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
    exportMethod({ options }) {
      this.tableExportMethod(options, standardExterior);
      return Promise.resolve();
    },
  },
  mounted: function () {
    // var xGrid = this.$refs.xGrid;
  },
};
</script>

<style>
</style>