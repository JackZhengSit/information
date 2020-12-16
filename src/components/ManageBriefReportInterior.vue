<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-30 13:46:45
 * @LastEditTime: 2020-12-16 17:01:29
-->
<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script>
import { briefReportInterior } from "../store/infoType";
import { briefReportInteriorExample } from "@/store/infoExample";
import {
  getBriefReportInterior,
  searchBriefReportInterior,
  postBriefReportInterior,
  deleteBriefReportInterior,
} from "@/api/manageBriefReportInterior";
import axios from "axios";

const findPageList = (pageSize, currentPage) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = [
        {
          id: 10001,
          name: "Test1",
          nickname: "T1",
          role: "Develop",
          sex: "Man",
          age: 28,
          address: "Shenzhen",
        },
        {
          id: 10002,
          name: "Test2",
          nickname: "T2",
          role: "Test",
          sex: "Women",
          age: 22,
          address: "Guangzhou",
        },
        {
          id: 10003,
          name: "Test3",
          nickname: "T3",
          role: "PM",
          sex: "Man",
          age: 32,
          address: "Shanghai",
        },
        {
          id: 10004,
          name: "Test4",
          nickname: "T4",
          role: "Designer",
          sex: "Women ",
          age: 23,
          address: "Shenzhen",
        },
        {
          id: 10005,
          name: "Test5",
          nickname: "T5",
          role: "Develop",
          sex: "Women ",
          age: 30,
          address: "Shanghai",
        },
        {
          id: 10006,
          name: "Test6",
          nickname: "T6",
          role: "Designer",
          sex: "Women ",
          age: 21,
          address: "Shenzhen",
        },
        {
          id: 10007,
          name: "Test7",
          nickname: "T7",
          role: "Test",
          sex: "Man ",
          age: 29,
          address: "Shenzhen",
        },
        {
          id: 10008,
          name: "Test8",
          nickname: "T8",
          role: "Develop",
          sex: "Man ",
          age: 35,
          address: "Shenzhen",
        },
        {
          id: 10009,
          name: "Test9",
          nickname: "T9",
          role: "Develop",
          sex: "Man ",
          age: 35,
          address: "Shenzhen",
        },
        {
          id: 100010,
          name: "Test10",
          nickname: "T10",
          role: "Develop",
          sex: "Man ",
          age: 35,
          address: "Guangzhou",
        },
        {
          id: 100011,
          name: "Test11",
          nickname: "T11",
          role: "Test",
          sex: "Women ",
          age: 26,
          address: "Shenzhen",
        },
        {
          id: 100012,
          name: "Test12",
          nickname: "T12",
          role: "Develop",
          sex: "Man ",
          age: 34,
          address: "Guangzhou",
        },
        {
          id: 100013,
          name: "Test13",
          nickname: "T13",
          role: "Test",
          sex: "Women ",
          age: 22,
          address: "Shenzhen",
        },
      ];
      resolve({
        page: {
          total: list.length,
        },
        result: list.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        ),
      });
    }, 100);
  });
};

export default {
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        highlightHoverRow: true,
        keepSource: true,
        id: "briefReportInteriorGrid",
        height: 600,
        rowId: "orderNum",
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
                defaultValue: 1,
              },
            },
            {
              field: briefReportInterior.orderNumEnd.field,
              // title: briefReportInterior.orderNum.title,
              span: 10,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: 1000000,
              },
            },
            {
              field: briefReportInterior.name.field,
              title: briefReportInterior.name.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.type.field,
              title: briefReportInterior.type.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.completeDepartment.field,
              title: briefReportInterior.completeDepartment.title,
              span: 8,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.title.field,
              title: briefReportInterior.title.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.industryType.field,
              title: briefReportInterior.industryType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.industryDetailType.field,
              title: briefReportInterior.industryDetailType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.industryChainType.field,
              title: briefReportInterior.industryChainType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referDeviceType.field,
              title: briefReportInterior.referDeviceType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referDevice.field,
              title: briefReportInterior.referDevice.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referProduct.field,
              title: briefReportInterior.referProduct.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referProject.field,
              title: briefReportInterior.referProject.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referInstitution.field,
              title: briefReportInterior.referInstitution.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referTechnology.field,
              title: briefReportInterior.referTechnology.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referCategory.field,
              title: briefReportInterior.referCategory.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.department.field,
              title: briefReportInterior.department.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.researchField.field,
              title: briefReportInterior.researchField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.researchOrientation.field,
              title: briefReportInterior.researchOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.researchSystem.field,
              title: briefReportInterior.researchSystem.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.techFieldType1.field,
              title: briefReportInterior.techFieldType1.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.techFieldType2.field,
              title: briefReportInterior.techFieldType2.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.techFieldType3.field,
              title: briefReportInterior.techFieldType3.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.industryField.field,
              title: briefReportInterior.industryField.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.industryOrientation.field,
              title: briefReportInterior.industryOrientation.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.publishDepartment.field,
              title: briefReportInterior.publishDepartment.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.checkInTimeStart.field,
              title: briefReportInterior.checkInTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: briefReportInterior.checkInTimeEnd.field,
              // title: briefReportInterior.checkInTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: briefReportInterior.knowledgeType.field,
              title: briefReportInterior.knowledgeType.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.securityLevel.field,
              title: briefReportInterior.securityLevel.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.abs.field,
              title: briefReportInterior.abs.title,
              span: 24,
              folding: true,
              itemRender: {
                name: "$textarea",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.formatTimeStart.field,
              title: briefReportInterior.formatTimeStart.title,
              span: 12,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "start" },
                defaultValue: "1900-01-01",
              },
            },
            {
              field: briefReportInterior.formatTimeEnd.field,
              // title: briefReportInterior.formatTime.title,
              span: 10,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "end" },
                defaultValue: "2020-12-12",
              },
            },
            {
              field: briefReportInterior.informationCollactor.field,
              title: briefReportInterior.informationCollactor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.informationAuditor.field,
              title: briefReportInterior.informationAuditor.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.language.field,
              title: briefReportInterior.language.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.keywords.field,
              title: briefReportInterior.keywords.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.informationOrigin.field,
              title: briefReportInterior.informationOrigin.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
            },
            {
              field: briefReportInterior.referWebsite.field,
              title: briefReportInterior.referWebsite.title,
              span: 8,
              folding: true,
              itemRender: {
                name: "$input",
                props: { placeholder: "" },
                defaultValue: "",
              },
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
          import: true,
          export: true,
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
            // query: ({ page }) => {
            //   // console.log(page);
            //   let p = getBriefReportInterior({
            //     page: page.currentPage - 1,
            //     size: page.pageSize,
            //   });
            //   console.log(p);
            //   return p;
            // },
            query: ({ page, form }) => {
              const queryParams = Object.assign({}, form, {
                page: page.currentPage - 1,
                size: page.pageSize,
              });
              console.log(queryParams);
              let p = searchBriefReportInterior(queryParams);
              return p;
            },
            save: (data) => {
              console.log(data);
              postBriefReportInterior(data);
            },
            delete: (data) => {
              console.log(data);
              deleteBriefReportInterior();
            },
          },
        },
        columns: [
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
            width: 80,
            sortable: true,
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            field: briefReportInterior.orderNum.field,
            title: briefReportInterior.orderNum.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.name.field,
            title: briefReportInterior.name.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.type.field,
            title: briefReportInterior.type.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.completeDepartment.field,
            title: briefReportInterior.completeDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.title.field,
            title: briefReportInterior.title.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryType.field,
            title: briefReportInterior.industryType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryDetailType.field,
            title: briefReportInterior.industryDetailType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryChainType.field,
            title: briefReportInterior.industryChainType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referDeviceType.field,
            title: briefReportInterior.referDeviceType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referDevice.field,
            title: briefReportInterior.referDevice.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referProduct.field,
            title: briefReportInterior.referProduct.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referProject.field,
            title: briefReportInterior.referProject.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referInstitution.field,
            title: briefReportInterior.referInstitution.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referTechnology.field,
            title: briefReportInterior.referTechnology.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referCategory.field,
            title: briefReportInterior.referCategory.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.department.field,
            title: briefReportInterior.department.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchField.field,
            title: briefReportInterior.researchField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchOrientation.field,
            title: briefReportInterior.researchOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.researchSystem.field,
            title: briefReportInterior.researchSystem.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType1.field,
            title: briefReportInterior.techFieldType1.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType2.field,
            title: briefReportInterior.techFieldType2.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.techFieldType3.field,
            title: briefReportInterior.techFieldType3.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryField.field,
            title: briefReportInterior.industryField.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.industryOrientation.field,
            title: briefReportInterior.industryOrientation.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.publishDepartment.field,
            title: briefReportInterior.publishDepartment.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.checkInTime.field,
            title: briefReportInterior.checkInTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.knowledgeType.field,
            title: briefReportInterior.knowledgeType.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.securityLevel.field,
            title: briefReportInterior.securityLevel.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.abs.field,
            title: briefReportInterior.abs.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.formatTime.field,
            title: briefReportInterior.formatTime.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationCollactor.field,
            title: briefReportInterior.informationCollactor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationAuditor.field,
            title: briefReportInterior.informationAuditor.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.language.field,
            title: briefReportInterior.language.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.keywords.field,
            title: briefReportInterior.keywords.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.informationOrigin.field,
            title: briefReportInterior.informationOrigin.title,
          },
          {
            resizable: true,
            width: 100,
            align: "center",
            showOverflow: "tooltip",
            showHeaderOverflow: "tooltip",
            editRender: { name: "input" },
            field: briefReportInterior.referWebsite.field,
            title: briefReportInterior.referWebsite.title,
          },
        ],
      },
      gridOptions1: {
        border: true,
        resizable: true,
        height: 530,
        pagerConfig: {
          pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
        },
        proxyConfig: {
          seq: true, // 启用动态序号代理
          props: {
            result: "result",
            total: "page.total",
          },
          ajax: {
            query: ({ page }) => {
              let p = findPageList(page.pageSize, page.currentPage);
              console.log(p);
              return p;
            },
          },
        },
        columns: [
          { type: "checkbox", width: 50 },
          { type: "seq", width: 60 },
          { field: "name", title: "Name" },
          { field: "nickname", title: "Nickname" },
          { field: "role", title: "Role" },
          { field: "address", title: "Address", showOverflow: true },
        ],
      },
    };
  },
  methods: {
    // formSubmit() {
    //   this.loading = true;
    //   console.log(this.gridOptions);
    //   searchBriefReportInterior(this.gridOptions.formConfig.data).then(
    //     (data) => {
    //       this.tableData = data;
    //       this.loading = false;
    //     }
    //   );
    // },
    // formReset() {
    //   // this.loading = true;
    // },
  },
};
</script>

<style>
</style>