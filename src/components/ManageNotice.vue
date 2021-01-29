<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-28 14:32:04
 * @LastEditTime: 2021-01-29 09:40:32
-->
<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script>
import { notice } from "@/store/infoType";
import {
  searchNotice,
  insertNotice,
  deleteNotice,
  updateNotice,
} from "@/api/manageNotice";
import moment from "moment";

export default {
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "notice",
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
              field: notice.title.field,
              title: notice.title.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: notice.author.field,
              title: notice.author.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: notice.publicateDayStart.field,
              title: notice.publicateDayStart.title,
              span: 12,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: notice.publicateDayEnd.field,
              //   title: notice.title.title,
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
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
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
              let p = searchNotice(queryParams);
              return p;
            },
            save: (data) => {
              //   console.log(data);
              Promise.all(
                data.body.insertRecords
                  .map((item) => {
                    insertNotice(item);
                  })
                  .concat(
                    data.body.pendingRecords.map((item) => {
                      deleteNotice({ id: item.id }, item);
                    })
                  )
                  .concat(
                    data.body.updateRecords.map((item) => {
                      updateNotice({ id: item.id }, item);
                    })
                  )
              );
            },
            delete: (data) => {
              Promise.all(
                data.body.removeRecords.map((item) => {
                  deleteNotice({ id: item.id }, item);
                })
              );
            },
          },
        },
        columns: [
          {
            width: 100,
            visible: false,
            field: notice.id.field,
            title: notice.id.title,
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
            field: notice.title.field,
            title: notice.title.title,
          },

          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: notice.author.field,
            title: notice.author.title,
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: notice.mainText.field,
            title: notice.mainText.title,
          },
          {
            resizable: true,
            align: "center",
            editRender: { name: "input" },
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: notice.publicateDay.field,
            title: notice.publicateDay.title,
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: notice.createTime.field,
            title: notice.createTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            },
          },
          {
            resizable: true,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: notice.updateTime.field,
            title: notice.updateTime.title,
            formatter: ({ cellValue, row, column }) => {
              return moment(cellValue).format("YYYY-MM-DD HH:MM:SS");
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>