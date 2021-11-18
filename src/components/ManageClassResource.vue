<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-03-25 09:32:33
 * @LastEditTime: 2021-03-25 13:37:29
-->
<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template v-slot:fileOperation="{ row }">
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
import { classResource } from "@/store/infoType";
import moment from "moment";
import {
  insertClassResource,
  updateClassResource,
  deleteClassResource,
  manageSearch,
  removeRemoteFileById
} from "@/api/manageClassResource";
import baseUrl from "@/config/baseUrl";

export default {
  data() {
    return {
      uploadUrl: baseUrl + "/manual/info-class-resource/upload",
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "quesiton",
        maxHeight: 1000,
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
              field: classResource.orderNumStart.field,
              title: classResource.orderNumStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "0"
              }
            },
            {
              field: classResource.orderNumEnd.field,
              //   title: question.title.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: 100000
              }
            },
            {
              field: classResource.name.field,
              title: classResource.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: classResource.teacher.field,
              title: classResource.teacher.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              field: classResource.target.field,
              title: classResource.target.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: ""
              }
            },
            {
              span: 24,
              align: "center",
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
          zoom: true,
          custom: true
        },
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000]
        },
        proxyConfig: {
          autoLoad: true,
          form: true,
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
              let p = manageSearch(queryParams);
              return p;
            },
            save: data => {
              //   console.log(data);
              Promise.all(
                data.body.insertRecords
                  .map(item => {
                    insertClassResource(item);
                  })
                  .concat(
                    data.body.pendingRecords.map(item => {
                      deleteClassResource({ id: item.id });
                    })
                  )
                  .concat(
                    data.body.updateRecords.map(item => {
                      updateClassResource({ id: item.id }, item);
                    })
                  )
              );
            },
            delete: data => {
              Promise.all(
                data.body.removeRecords.map(item => {
                  deleteClassResource({ id: item.id });
                })
              );
            }
          }
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: classResource.id.field,
            title: classResource.id.title
          },
          {
            type: "checkbox",
            width: 50,
            fixed: "left",
            align: "center"
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.orderNum.field,
            title: classResource.orderNum.title
          },

          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.name.field,
            title: classResource.name.title
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.teacher.field,
            title: classResource.teacher.title
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.target.field,
            title: classResource.target.title
          },

          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.createTime.field,
            title: classResource.createTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            }
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.updateTime.field,
            title: classResource.updateTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            }
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: classResource.filePath.field,
            title: classResource.filePath.title,
            fixed: "right"
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "操作",
            slots: { default: "fileOperation" },
            fixed: "right"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    uploadFileSuccess() {
      this.$refs.xGrid.commitProxy("query");
      this.Message({
        message: "上传成功",
        type: "success"
      });
    },
    removeFileById(row) {
      removeRemoteFileById({ id: row.id }).then(res => {
        this.$refs.xGrid.commitProxy("query");
        this.Message({
          message: "删除成功！",
          type: "success"
        });
      });
    }
  }
};
</script>

<style></style>
