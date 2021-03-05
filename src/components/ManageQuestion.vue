<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template v-slot:infoAnwser="{ row }">
        <el-button type="default" @click="anwserQuesion(row)">回答</el-button>
        <el-button type="danger" @click="deleteAnwser(row)">删除</el-button>
      </template>
    </vxe-grid>
    <el-dialog :visible.sync="dialogFormVisible">
      <h4 style="margin: 0 0 10px 0">{{ selectedQuestion.title }}</h4>
      <p>{{ selectedQuestion.detail }}</p>
      <p>
        {{ selectedQuestion.inquisitor }} 于
        {{ selectedQuestion.createTime }}提问
      </p>
      <el-form :model="anwserForm">
        <el-form-item label="回答">
          <el-input
            type="textarea"
            v-model="anwserForm.detail"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitAnwser">提交</el-button>
          <el-button type="" @click="resetAnwser">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { question } from "@/store/infoType";
import moment from "moment";
import {
  insertQuestion,
  updateQuestion,
  deleteQuestion,
  manageSearch,
} from "@/api/manageInfoQuestion";

import { insertAnwser, deleteAnwser } from "@/api/manageInfoAnwser";

import axios from "axios";

export default {
  data() {
    return {
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
          showStatus: true,
        },
        formConfig: {
          titleWidth: 100,
          titleAlign: "right",
          items: [
            {
              field: question.title.field,
              title: question.title.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: question.inquisitor.field,
              title: question.inquisitor.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: question.createDayStart.field,
              title: question.createDayStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: question.createDayEnd.field,
              //   title: question.title.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: moment().format("YYYY-MM-DD"),
              },
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
          zoom: true,
          custom: true,
        },
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
        },
        proxyConfig: {
          autoLoad: true,
          form: true,
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
              let p = manageSearch(queryParams);
              return p;
            },
            save: (data) => {
              //   console.log(data);
              Promise.all(
                data.body.insertRecords
                  .map((item) => {
                    insertQuestion(item);
                  })
                  .concat(
                    data.body.pendingRecords.map((item) => {
                      deleteQuestion({ id: item.id });
                    })
                  )
                  .concat(
                    data.body.updateRecords.map((item) => {
                      updateQuestion({ id: item.id }, item);
                    })
                  )
              );
            },
            delete: (data) => {
              Promise.all(
                data.body.removeRecords.map((item) => {
                  deleteQuestion({ id: item.id });
                })
              );
            },
          },
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: question.id.field,
            title: question.id.title,
          },
          {
            type: "checkbox",
            width: 50,
            fixed: "left",
            align: "center",
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: question.title.field,
            title: question.title.title,
          },

          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: question.inquisitor.field,
            title: question.inquisitor.title,
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: question.detail.field,
            title: question.detail.title,
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: question.createTime.field,
            title: question.createTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            },
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: question.updateTime.field,
            title: question.updateTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            },
          },
          {
            resizable: true,
            width: 180,
            align: "center",
            title: "操作",
            slots: { default: "infoAnwser" },
            fixed: "right",
          },
        ],
      },
      dialogFormVisible: false,
      selectedQuestion: {},
      anwserForm: {
        infoQuestion: {},
        detail: "",
      },
    };
  },
  computed: {},
  methods: {
    anwserQuesion(row) {
      this.dialogFormVisible = true;
      this.selectedQuestion = row;
      this.anwserForm.detail = "";
      axios({
        url: row._links.infoAnwsers.href,
        method: "get",
      }).then((res) => {
        if (res.data._embedded.infoAnwsers.length != 0)
          this.anwserForm.detail = res.data._embedded.infoAnwsers[0].detail;
      });
    },
    submitAnwser() {
      this.anwserForm.infoQuestion = this.selectedQuestion;
      insertAnwser(this.anwserForm).then(() => {
        this.dialogFormVisible = false;
        this.$message({
          type: "success",
          message: "提交成功",
        });
      });
    },
    resetAnwser() {
      this.anwserForm.detail = "";
    },
    deleteAnwser(row) {
      axios({
        url: row._links.infoAnwsers.href,
        method: "get",
      }).then((res) => {
        if (res.data._embedded.infoAnwsers.length != 0)
          deleteAnwser(res.data._embedded.infoAnwsers[0].id).then((res) =>
            this.$message({
              type: "success",
              message: "删除成功！",
            })
          );
      });
    },
  },
};
</script>

<style>
</style>