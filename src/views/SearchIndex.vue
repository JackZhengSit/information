<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-20 15:36:11
 * @LastEditTime: 2021-05-21 10:44:25
-->
<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClassResource } from "@/api/manageClassResource";

export default {
  data() {
    return {
      journalTableData: [
        {
          no: 1,
          name: "Exlibris中文核心期刊查询系统",
          introduce:
            "查询浏览的数据库及评价体系及评价体系以及所包含的期刊信息，由中国SFX用户共建共享。由于时间精力所限，本系统不保证所有的数据都能及时收录完整  http://sfx-86ali.hosted.exlibrisgroup.com/index.html",
        },
        {
          no: 2,
          name: "中文社会科学引文索引（CSSCI）收录期刊",
          introduce:
            "中文社会科学引文索引（Chinese Social Science Citation Index）是由南京大学中国社会科学研究评价中心开发研制的引文索引数据库，用来检索中文人文社会科学领域的论文收录和被引用情况。http://cssci.nju.edu.cn/",
        },
        {
          no: 3,
          name: "SCIE参考指南",
          introduce: "http://apps.webofknowledge.com/",
        },
        {
          no: 4,
          name: "SSCI参考指南",
          introduce: "http://apps.webofknowledge.com/",
        },
        {
          no: 5,
          name: "EI参考指南",
          introduce: "https://wwww.engineeringvillage.com/home.url",
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>

<style>
</style>