<template>
  <div id="index">
    <header id="header">
      <router-view name="header"></router-view>
    </header>

    <main id="content">
      <el-main><router-view name="content"></router-view></el-main>
    </main>

    <footer id="footer">
      <router-view name="footer"></router-view>
    </footer>
    <el-backtop :bottom="100"></el-backtop>
  </div>

  <!-- <el-container>
    <el-main>
      <router-view name="header"></router-view>
    </el-main>
    <el-main>
      <router-view name="content"></router-view>
    </el-main>
    <el-footer>
      <router-view name="footer"></router-view>
    </el-footer>
  </el-container> -->
</template>

<script>
export default {
  data() {
    return {
      background: {
        backgroundImage: "url(" + require("../assets/back.jpg") + ")",
        backgroundRepeat: "no-repeat",
      },
    };
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#index {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
/* #header {
  flex: 1;
} */

#content {
  flex: 1;
  padding-top: 100px;
}

/* #footer {
  flex: 1;
} */
</style>
