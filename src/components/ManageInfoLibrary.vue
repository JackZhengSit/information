<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-07 10:30:19
 * @LastEditTime: 2021-05-10 14:12:00
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
          :action="uploadFileUrl"
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
      <template v-slot:uploadImg="{ row }">
        <el-upload
          :show-file-list="false"
          :on-success="uploadFileSuccess"
          :data="{ id: row.id }"
          accept=".bmp,.jpg,.png,.tif,.gif"
          :action="uploadImgUrl"
        >
          <el-button slot="trigger" type="default">上传</el-button>
          <el-button
            type="danger"
            style="margin-left: 10px"
            @click="removeImgbyId(row)"
            >删除</el-button
          >
        </el-upload>
      </template>
    </vxe-grid>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import { infoLibrary } from "../store/infoType";
import {
  searchInfoLibrary,
  removeRemoteFileById,
  removeRemoteImgById,
  confirmSaveInfoLibrary
} from "@/api/manageInfoLibrary";
import baseUrl from "@/config/baseUrl";
import XLSX from "xlsx";
import moment from "moment";

function csvToObject(csvString) {
  let csvarry = csvString.split("\r\n");
  let datas = [];
  let headers = csvarry[0].split(",");
  for (let i = 0; i < headers.length; i++) {
    Object.keys(infoLibrary).forEach(function(key) {
      if (infoLibrary[key].title == headers[i])
        headers[i] = infoLibrary[key].field;
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
      uploadFileUrl: baseUrl + "/manual/info-library/uploadFile",
      uploadImgUrl: baseUrl + "/manual/info-library/uploadImg",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "infoLibraryGrid",
        maxHeight: 1500,
        // rowId: "orderNum",
        editConfig: {
          trigger: "dblclick",
          mode: "row",
          showStatus: true
        },
        formConfig: {
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: infoLibrary.type.field,
              title: infoLibrary.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.name.field,
              title: infoLibrary.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.title.field,
              title: infoLibrary.title.title,
              span: 8,

              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.author.field,
              title: infoLibrary.author.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.language.field,
              title: infoLibrary.language.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.publication.field,
              title: infoLibrary.publication.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.publicationDate.field,
              title: infoLibrary.publicationDate.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.checkInTime.field,
              title: infoLibrary.checkInTime.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: infoLibrary.storeSite.field,
              title: infoLibrary.storeSite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
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
                // queryParams.sort = firstSort.property + "," + firstSort.order;
                // queryParams.order = firstSort.order;
              }
              // console.log(queryParams);
              let p = searchInfoLibrary(queryParams);
              return p;
            },
            save: data => {
              confirmSaveInfoLibrary(data.body);
            },
            delete: data => {
              confirmSaveInfoLibrary(data.body);
            }
          }
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: infoLibrary.id.field,
            title: infoLibrary.id.title
          },
          {
            type: "checkbox",
            width: 50,
            fixed: "left",
            align: "center"
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.num.field,
            title: infoLibrary.num.title
          },
          {
            resizable: true,
            width: 120,
            align: "center",
            showOverflow: "tooltip",
            sortable: true,
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.type.field,
            title: infoLibrary.type.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.name.field,
            title: infoLibrary.name.title
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.title.field,
            title: infoLibrary.title.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.author.field,
            title: infoLibrary.author.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.language.field,
            title: infoLibrary.language.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.sum.field,
            title: infoLibrary.sum.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.publication.field,
            title: infoLibrary.publication.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.publicationDate.field,
            title: infoLibrary.publicationDate.title
          },

          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.checkInTime.field,
            title: infoLibrary.checkInTime.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: infoLibrary.storeSite.field,
            title: infoLibrary.storeSite.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",

            field: infoLibrary.clickCount.field,
            title: infoLibrary.clickCount.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",

            field: infoLibrary.imgPath.field,
            title: infoLibrary.imgPath.title
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",

            field: infoLibrary.filePath.field,
            title: infoLibrary.filePath.title
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "图片操作",
            slots: { default: "uploadImg" },
            fixed: "right"
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "文件操作",
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
    removeImgbyId(row) {
      removeRemoteImgById({ id: row.id }).then(res => {
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
          for (let k2 in infoLibrary) {
            if (infoLibrary[k2].title == worksheet[k1].v) {
              worksheet[k1].v = infoLibrary[k2].field;
              worksheet[k1].r = "<t>" + infoLibrary[k2].field + "</t>";
              worksheet[k1].h = infoLibrary[k2].field;
              worksheet[k1].w = infoLibrary[k2].field;
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
          //   console.log(importData);
          confirmSaveInfoLibrary({
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
      this.tableExportMethod(options, infoLibrary);
      return Promise.resolve();
    }
  },
  mounted: function() {
    // var xGrid = this.$refs.xGrid;
  }
};
</script>

<style></style>
