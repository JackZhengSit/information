<template>
  <div class="index">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="content">
      <router-view name="content"></router-view>
    </div>
    <div id="footer">
      <router-view name="footer"></router-view>
    </div>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#index {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#header {
  flex: 1;
  position: fixed;
  width: 1920px;
  top: 0px;
  z-index: 1000;
}

#content {
  flex: 1;
  padding-top: 60px;
}
#footer {
  flex: 1;
}
</style>
