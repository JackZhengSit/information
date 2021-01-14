<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3" :offset="7">
          <h4 style="color: #409eff">信息情报系统</h4>
          <!-- <img src="" alt="" /> -->
        </el-col>
        <el-col :span="12" :offset="0">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
            background-color="#FFF"
            text-color="#909399"
            active-text-color="#409EFF"
            @select="handleSelect"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/search">检索</el-menu-item>
            <el-menu-item index="">馆藏书刊</el-menu-item>
            <el-menu-item index="">情报需求</el-menu-item>
            <el-menu-item index="">船舶百科</el-menu-item>
            <el-menu-item index="">总咨询台</el-menu-item>
            <el-menu-item index="">下载工具</el-menu-item>
            <el-menu-item index="">数据统计</el-menu-item>
            <el-menu-item index="/manage">后台管理</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/home",
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
  },
};
</script>

<style>
.el-header {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
}

.el-menu--horizontal > .el-menu-item {
  font-size: 15px;
  font-weight: 550;
  /* height: 100px; */
}

.el-menu-item:hover {
  background-color: rgba(179, 216, 255, 0.3) !important;
  color: #409eff !important;
}
</style>
