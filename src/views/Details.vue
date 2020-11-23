<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="10" :offset="5"
          ><div class="bkgrd">
            <el-card class="infoBlock">
              <h3>这是标题</h3>
              <div>
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-document"
                  plain
                  >查看问件</el-button
                >
              </div>
              <p>
                这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要
                这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要
                这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要
                这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要
                这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要这是摘要摘要
              </p>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">
                    这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="info-label">这是标题名：</div>
                </el-col>
                <el-col :span="18">
                  <div class="info-text">这是文本这是文本这是文本</div>
                </el-col>
              </el-row>
            </el-card>
          </div></el-col
        >
        <el-col :span="5">
          <el-card>
            <h4>此知识的分类</h4>
            <el-row>
              <el-col :span="12">
                <div class="info-label">这是分类名：</div>
              </el-col>
              <el-col :span="12">
                <div class="info-text">这是分类文本</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="info-label">这是分类名：</div>
              </el-col>
              <el-col :span="12">
                <div class="info-text">这是分类文本</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="info-label">这是分类名：</div>
              </el-col>
              <el-col :span="12">
                <div class="info-text">这是分类文本</div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: {
    id: Number
  }
};
</script>

<style>
/* .bkgrd {
  background-color: lightblue;
  height: 1000px;
} */
.infoBlock {
  padding: 10px;
}

.info-label {
  padding: 5px;
  font-weight: 600;
  right: 0;
  text-align: right;
}
.info-text {
  padding: 5px;
}
</style>