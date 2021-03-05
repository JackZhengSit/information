<template>
  <div class="result-item">
    <a class="title" @click="showDetails">{{ title }}</a>
    <p class="author">
      <strong>[{{ infoType }}]</strong> {{ author }}
    </p>

    <p class="abstract">
      {{ abstract }}
    </p>
    <el-button
      type="primary"
      size="mini"
      icon="el-icon-s-unfold"
      plain
      @click="showDetails"
      >情报详情</el-button
    >
    <el-button
      type="primary"
      size="mini"
      icon="el-icon-document"
      plain
      @click="openFile"
      >查看文件</el-button
    >
  </div>
</template>

<script>
import baseUrl from "@/config/baseUrl";
export default {
  props: {
    id: String,
    originId: String,
    title: String,
    author: String,
    infoType: String,
    abstract: String,
    fileUrl: String,
  },
  methods: {
    showDetails: function (event) {
      let routeData = this.$router.resolve({
        name: "Details",
        query: {
          originId: this.originId,
          infoType: this.infoType,
          infoTitle: this.title,
          infoFileUrl: this.fileUrl,
        },
        props: true,
      });
      window.open(routeData.href, "_blank");
    },
    openFile() {
      if (this.fileUrl.includes(".")) {
        window.open(baseUrl + this.fileUrl);
      } else {
        if (this.infoType == "情报简报") {
          this.$message({
            type: "warning",
            message: "若需全文，请联系标研中心情报科 5216",
          });
        } else {
          this.$message({
            type: "warning",
            message: "此情报附件无附件或未上传！",
          });
        }
      }
    },
  },
};
</script>

<style  scoped>
.result-item {
  padding: 10px 0 10px 0;
}
.result-item .title {
  display: block;
  margin: 0;
  color: #409eff;
  cursor: pointer;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  text-decoration: none;
}

.result-item .author {
  margin: 0;
  font-size: 14px;
  line-height: 30px;
  color: #666;
}

.result-item .abstract {
  margin: 0px 0 5px 0;
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