<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-20 15:36:41
 * @LastEditTime: 2021-07-07 10:35:14
-->
<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <div style="padding: 0 20px 0 20px">
          <h5>常用软件</h5>
          <!-- <el-button
            plain
            @click="
              download('/static/file/info-class-resource/Acrobat.9.Pro.ChS.rar')
            "
            >PDF阅读器</el-button
          > -->
          <a
            class="linke"
            :href="
              this.baseUrl +
              '/static/file/info-class-resource/Acrobat.9.Pro.ChS.rar'
            "
            >PDF阅读器</a
          >

          <a
            class="linke"
            :href="
              this.baseUrl +
              '/static/file/info-class-resource/CAJViewer 7.2.self.exe'
            "
            >清华同方CAJ阅读器</a
          >

          <a
            class="linke"            
            >chrome默认地址：C:\Program Files(x86)\Google\Chrome\Frame\Application</a
          >
          <!-- <el-button
            plain
            @click="
              download(
                '/static/file/info-class-resource/CAJViewer 7.2.self.exe'
              )
            "
          >
            清华同方CAJ阅读器
          </el-button> -->

          <h5>百科词典/工具书</h5>
          <!-- <el-link
            type="primary"
            @click="download('/static/file/info-class-resource/船舶百科.pdf')"
            >瓦锡兰船舶百科词典</el-link
          ><br />
          <el-link
            type="primary"
            @click="
              download('/static/file/info-class-resource/专利百科手册.pdf')
            "
            >智慧芽专利百科全书</el-link
          > -->
          <a
            class="linke"
            :href="
              this.baseUrl + '/static/file/info-class-resource/船舶百科.pdf'
            "
            >瓦锡兰船舶百科词典</a
          >
          <a
            class="linke"
            :href="
              this.baseUrl + '/static/file/info-class-resource/专利百科手册.pdf'
            "
            >智慧芽专利百科全书</a
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import baseUrl from "@/config/baseUrl";
import { Message, MessageBox } from "element-ui";

export default {
  data() {
    return {
      baseUrl,
    };
  },
  methods: {
    download(url) {
      let a = document.createElement("a");
      a.href = baseUrl + url;
      a.download = baseUrl + url;
      a.click();
    },
  },
  created() {},
};
</script>

<style scoped>
.linke {
  color: #66b1ff;
  text-decoration: none;
  margin: 0 20px 0 0;
}
.linke:hover {
  color: #66b1ff;
  text-decoration: underline;
}
</style>
