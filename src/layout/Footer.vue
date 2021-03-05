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
      <el-col :span="3" :offset="9">
        <div>
          <h4>联系我们</h4>
          <p>标准研究中心：情报研究科</p>
          <p>李佳佳：5216</p>
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
