<template>
  <!-- <el-container>
    <el-header>
      <el-row>
        <el-col :span="3" :offset="7">
          <h4 style="color: #409eff">信息情报系统</h4>
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
  </el-container> -->
  <div class="header">
    <!-- <el-row>
      <el-col :span="3" :offset="5"> </el-col>
    </el-row> -->
    <div class="header-box">
      <div class="logo-box">
        <h3 class="logo-title">信息情报库</h3>
      </div>
      <div class="menu-box">
        <a class="menu-title">首页</a>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       activeIndex: "/home",
//     };
//   },
//   methods: {
//     handleSelect(key, keyPath) {},
//   },
// };
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  height: 100px;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #dcdfe6;
  justify-content: center;
  background: #fff;
  /* border-bottom: 1px solid red; */
}

.header-box {
  flex: 0 0 70%;
  display: flex;
  justify-content: space-between;
}

.logo-box {
  flex: 1 1 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo-title {
  color: #409eff;
  margin: 0;
  padding: 0;
}

.menu-box {
  flex: 1 0 60%;
  display: flex;
  justify-content: flex-end;
  justify-items: stretch;
}
.menu-title {
  text-decoration: none;
  text-align: center;
  color: #1989fa;
  opacity: 0.5;
  line-height: 100px;
  padding: 0 22px;
}

/* .el-header {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
}

.el-menu--horizontal > .el-menu-item {
  font-size: 15px;
  font-weight: 550;
}

.el-menu-item:hover {
  background-color: rgba(179, 216, 255, 0.3) !important;
  color: #409eff !important;
} */
</style>
