<template>
  <div class="header">
    <div class="header-box">
      <div class="logo-box">
        <h2 class="logo-title" @click="toHome">信息情报库</h2>
        <span class="worning">非密软件<br>禁止处理涉密信息</span>
      </div>
      <div class="menu-box">
        <a path="/home" @click="toHome($event)" class="menu-title">首页</a>

        <a path="/search" @click="toSearch($event)" class="menu-title">信息检索</a>
        <!-- onclick="window.open('http://200.100.65.13:8080/r/library/index.jsp')" -->
        <!-- <a path="/labrary" class="menu-title" @click="toLabrary">馆藏书刊</a> -->

        <el-dropdown :hide-on-click="false" @command="toLibrary">
          <span path="/library" class="menu-title"> 馆藏书刊</span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="Book">馆藏图书</el-dropdown-item>
            <el-dropdown-item command="Journal">所内期刊</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- <a path="/wiki" class="menu-title" @click="toWiki">船舶百科</a> -->
        <!-- <a
          onclick="window.open('http://200.100.65.13:8080/r/library/lib_advice.jsp')"
          class="menu-title"
          >总咨询台</a
        > -->

        <!-- <a path="/download" class="menu-title" @click="toDownload">下载工具</a> -->
        <el-dropdown :hide-on-click="false" @command="toDownload">
          <span path="/download" class="menu-title"> 下载工具</span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="SearchIndex">核心期刊查询入口</el-dropdown-item>
            <el-dropdown-item command="ClassResource">信息检索课程推荐</el-dropdown-item>
            <el-dropdown-item command="Tools">常用工具书/软件推荐</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a path="/statistics" class="menu-title" @click="toStatistics">数据统计</a>
        <el-tooltip content="如出现“调用异常”，请在异常界面刷新" placement="bottom"><a
            onclick="window.open('http://200.100.68.18:8088/default/management/informationPortal.jsp')"
            class="menu-title">情报需求</a>
        </el-tooltip>
        <a path="/question" class="menu-title" @click="toQuestion">总咨询台</a>

        <!-- <a path="/manage" @click="toManage($event)" class="menu-title"
          >后台管理</a
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      activeUrl: ""
    };
  },
  computed: {
    ...mapState({
      path: state => state.RouteModule.path
    })
  },
  methods: {
    ...mapActions("search", ["getCheckbox"]),
    acitveMenuItem() {
      let menu = document.getElementsByClassName("menu-title");
      menu.forEach(element => {
        if (this.path.startsWith(element.getAttribute("path"))) {
          element.className = "menu-title-active";
        }
      });
    },
    toHome({ srcElement }) {
      this.$router.push({ name: "Home" });
    },
    toSearch({ srcElement }) {
      this.getCheckbox().then(() => {
        this.$router.push({ name: "Search" });
      });
    },
    toManage({ srcElement }) {
      this.$router.push({ name: "Manage" });
    },
    toLibrary(command) {
      this.$router.push({ name: command });
    },

    toWiki() {
      this.$router.push({ name: "Wiki" });
    },
    toQuestion() {
      this.$router.push({ name: "Question" });
    },
    toDownload(command) {
      this.$router.push({ name: command });
    },
    toStatistics() {
      this.$router.push({ name: "Statistics" });
    }
  },
  watch: {
    "$route.path": function (newVal, oldVal) {
      let menu = document.getElementsByClassName("menu-title");
      document.getElementsByClassName("menu-title-active")[0].className =
        "menu-title";
      menu.forEach(element => {
        let pathStr = element.getAttribute("path");
        // console.log(pathStr);
        if (newVal.startsWith(pathStr)) {
          element.className = "menu-title-active";
        }
      });
    }
  },

  mounted() {
    this.acitveMenuItem();
  }
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
  cursor: pointer;
}

.worning {
  margin: 0 20px;
  font-size: 13px;
  color: red;
  width: 130px;
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

.el-dropdown {
  display: inline;
}

.el-dropdown span {
  font-size: 16px;
  display: block;
  line-height: 98px;
}
</style>
