<template>
  <div class="result-item">
    <a class="title">{{ title }}</a>
    <p class="auther">{{ author }}</p>
    <p class="abstract">
      {{ abstract }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    abstract: String
  }
};
</script>

<style  scoped>
.result-item .title {
  display: block;
  margin: 16px 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  color: #409eff;
  cursor: pointer;
}

.result-item .auther {
  margin: 10px 0 10px 0;
  font-size: 14px;
  color: #303133;
}

.result-item .abstract {
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 4;
  display: -webkit-box;
}
</style>