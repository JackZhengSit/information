<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-27 09:38:49
 * @LastEditTime: 2021-05-19 11:13:52
-->
<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-tabs tab-position="left">
          <el-tab-pane label="核心期刊查询入口">
            <div>
              <el-table :data="journalTableData" style="width: 100%">
                <el-table-column
                  header-align="center"
                  align="center"
                  label="序号"
                  prop="no"
                  width="60"
                ></el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  label="系统名称"
                  prop="name"
                  width="280"
                ></el-table-column>
                <el-table-column
                  header-align="center"
                  label="说明"
                  prop="introduce"
                ></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="信息检索课程资源推荐">
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
          </el-tab-pane>
          <el-tab-pane label="常用工具书/软件推荐">
            <div style="padding: 0 20px 0 20px">
              <h5>常用软件</h5>
              <el-button
                plain
                @click="
                  download(
                    '/static/file/info-class-resource/Acrobat.9.Pro.ChS.rar'
                  )
                "
                >PDF阅读器</el-button
              >
              <el-button
                plain
                @click="
                  download(
                    '/static/file/info-class-resource/CAJViewer 7.2.self.exe'
                  )
                "
              >
                清华同方CAJ阅读器
              </el-button>

              <h5>百科词典/工具书</h5>
              <el-link
                type="primary"
                @click="
                  download('/static/file/info-class-resource/船舶百科.pdf')
                "
                >瓦锡兰船舶百科词典</el-link
              ><br />
              <el-link
                type="primary"
                @click="
                  download('/static/file/info-class-resource/专利百科手册.pdf')
                "
                >智慧芽专利百科全书</el-link
              >
            </div>
          </el-tab-pane>
        </el-tabs>
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
      journalTableData: [
        {
          no: 1,
          name: "Exlibris中文核心期刊查询系统",
          introduce:
            "查询浏览的数据库及评价体系及评价体系以及所包含的期刊信息，由中国SFX用户共建共享。由于时间精力所限，本系统不保证所有的数据都能及时收录完整  http://sfx-86ali.hosted.exlibrisgroup.com/index.html",
        },
        {
          no: 1,
          name: "中文社会科学引文索引（CSSCI）收录期刊",
          introduce:
            "中文社会科学引文索引（Chinese Social Science Citation Index）是由南京大学中国社会科学研究评价中心开发研制的引文索引数据库，用来检索中文人文社会科学领域的论文收录和被引用情况。http://cssci.nju.edu.cn/",
        },
        {
          no: 1,
          name: "SCIE参考指南",
          introduce: "http://apps.webofknowledge.com/",
        },
        {
          no: 1,
          name: "SSCI参考指南",
          introduce: "http://apps.webofknowledge.com/",
        },
        {
          no: 1,
          name: "EI参考指南",
          introduce: "https://wwww.engineeringvillage.com/home.url",
        },
      ],
      classResourceTableData: [],
    };
  },
  methods: {
    download(url) {
      let a = document.createElement("a");
      a.href = baseUrl + url;
      a.download = baseUrl + url;
      a.click();
    },
    downloadClassResource(id, row) {
      if (row.filePath != null && row.filePath != "") {
        // window.open(
        //   baseUrl + "/static/file/info-class-resource/" + row.filePath
        // );
        let a = document.createElement("a");
        a.href = baseUrl + "/static/file/info-class-resource/" + row.filePath;
        a.download = row.filePath;
        a.click();
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