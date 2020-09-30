<template>
  <div class="index">
    <div id="header">
      <router-view name="header"></router-view>
    </div>
    <div id="content">
      <router-view name="content"></router-view>
    </div>
    <div>
      <router-view name="footer"></router-view>
    </div>
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
#header {
  position: fixed;
  width: 1920px;
  top: 0px;
  z-index: 1000;
}

#content {
  padding-top: 60px;
}
</style>
