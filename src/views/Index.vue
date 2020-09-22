<template>
  <el-container>
    <el-header>
      <router-view name="header"></router-view>
    </el-header>
    <el-main>
      <router-view name="main"></router-view>
    </el-main>
    <el-footer>
      <router-view name="footer"></router-view>
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
</style>