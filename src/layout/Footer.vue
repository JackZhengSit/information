<template>
  <div class="footer">
    <el-row style>
      <el-col :span="10" :offset="1">
        <div>
          <h4>关于信息情报库</h4>
          <p>
            信息情报库下设“信息情报”知识类型，包括数据资源、行业动态、外部资料、情报产品等4个子类，主要用于存放外部信息资源，以及有效支撑我所科技创新与产业发展。
          </p>
        </div>
      </el-col>
      <el-col :span="3" :offset="2">
        <h4>相关链接</h4>
        <el-link
          type="primary"
          href="http://200.100.68.18:8088/default/newportal/index.html"
          >知识管理</el-link
        >
      </el-col>
      <el-col :span="3" :offset="3">
        <div>
          <h4>联系我们</h4>
          <p>标准研究中心 情报研究科</p>
          <p>联系方式：5216 5219</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <div style="border-top: 2px solid #409eff"></div>
        <p style="margin: 0px; font-size: 12px">
          第七〇四研究所版权所有 计算机中心研发
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  height: 200px;
  background-color: #fff;
  border-top: #409eff solid 1px;
}
</style>
