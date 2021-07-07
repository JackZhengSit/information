<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-20 15:36:32
 * @LastEditTime: 2021-07-07 10:38:06
-->
<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-table :data="classResourceTableData">
          <el-table-column
            label="序号"
            header-align="center"
            align="center"
            prop="orderNum"
            width="60"
          ></el-table-column>
          <el-table-column
            label="课程名称"
            header-align="center"
            align="center"
            prop="name"
            width="200"
          ></el-table-column>
          <el-table-column
            label="主讲人"
            header-align="center"
            align="center"
            prop="teacher"
            width="100"
          ></el-table-column>
          <el-table-column
            label="课程目标"
            header-align="center"
            prop="target"
          ></el-table-column>
          <el-table-column
            label="下载"
            header-align="center"
            align="center"
            width="80"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                plain
                @click="downloadClassResource(scope.$index, scope.row)"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClassResource } from "@/api/manageClassResource";
import baseUrl from "@/config/baseUrl";
import { Message, MessageBox } from "element-ui";

export default {
  data() {
    return {
      baseUrl,

      classResourceTableData: [],
    };
  },
  methods: {
    downloadClassResource(id, row) {
      if (row.filePath != null && row.filePath != "") {
        window.open(
          baseUrl + "/static/file/info-class-resource/" + row.filePath
        );
        // let a = document.createElement("a");
        // a.href = baseUrl + "/static/file/info-class-resource/" + row.filePath;
        // a.download = row.filePath;
        // a.click();
      } else
        Message({
          message: "文件不存在！",
          type: "error",
        });
    },
  },
  created() {
    getClassResource({ page: 0, size: 1000 }).then((res) => {
      this.classResourceTableData = res.result;
    });
  },
};
</script>

<style>
</style>