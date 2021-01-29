<template>
  <div class="header">
    <div class="header-box">
      <div class="logo-box">
        <h2 class="logo-title">信息情报库</h2>
      </div>
      <div class="menu-box">
        <a path="/home" @click="toHome($event)" class="menu-title">首页</a>
        <a
          href="http://200.100.68.18:8088/default/management/informationPortal.jsp"
          class="menu-title"
          >情报需求</a
        >
        <a path="/search" @click="toSearch($event)" class="menu-title"
          >信息检索</a
        >
        <a
          href="http://200.100.65.13:8080/r/library/index.jsp"
          class="menu-title"
          >馆藏书刊</a
        >
        <a class="menu-title" @click="toWiki">船舶百科</a>
        <a
          href="http://200.100.65.13:8080/r/library/lib_adice.jsp"
          class="menu-title"
          >总咨询台</a
        >
        <a class="menu-title" @click="toDownload">下载工具</a>
        <a class="menu-title" @click="toStatistics">数据统计</a>
        <a path="/manage" @click="toManage($event)" class="menu-title"
          >后台管理</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeUrl: "",
    };
  },
  computed: {
    ...mapState({
      path: (state) => state.RouteModule.path,
    }),
  },
  methods: {
    acitveMenuItem() {
      let menu = document.getElementsByClassName("menu-title");
      menu.forEach((element) => {
        if (this.path.startsWith(element.getAttribute("path"))) {
          element.className = "menu-title-active";
        }
      });
    },
    toHome({ srcElement }) {
      this.$router.push({ name: "Home" });
    },
    toSearch({ srcElement }) {
      this.$router.push({ name: "Search" });
    },
    toManage({ srcElement }) {
      this.$router.push({ name: "Manage" });
    },
    toWiki() {
      this.$router.push({ name: "Wiki" });
    },
    toDownload() {
      this.$router.push({ name: "Download" });
    },
    toStatistics() {
      this.$router.push({ name: "Statistics" });
    },
  },
  watch: {
    "$route.path": function (newVal, oldVal) {
      let menu = document.getElementsByClassName("menu-title");
      document.getElementsByClassName("menu-title-active")[0].className =
        "menu-title";
      menu.forEach((element) => {
        let pathStr = element.getAttribute("path");
        // console.log(pathStr);
        if (newVal.startsWith(pathStr)) {
          element.className = "menu-title-active";
        }
      });
    },
  },

  mounted() {
    this.acitveMenuItem();
  },
};
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
  /* flex: 1 1 40%; */
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
  /* flex: 1 0 60%; */
  display: flex;
  justify-content: flex-end;
  justify-items: stretch;
}
.menu-title {
  text-decoration: none;
  text-align: center;
  color: #1989fa;
  opacity: 0.6;
  line-height: 100px;
  padding: 0 22px;
  cursor: pointer;
}

.menu-title:hover {
  color: #1989fa;
  opacity: 1;
  border-bottom: 2px solid #1989fa;
}

.menu-title-active {
  text-decoration: none;
  text-align: center;
  line-height: 100px;
  padding: 0 22px;
  cursor: pointer;
  color: #1989fa;
  opacity: 1;
  border-bottom: 2px solid #1989fa;
}
</style>
