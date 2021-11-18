<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card shadow="never" style="margin: 10px">
          <h4>问题列表</h4>
          <el-card
            shadow="hover"
            style="margin: 10px 0 10px 0"
            v-for="item in questionList"
            :key="item.id"
          >
            <h5>{{ item.title }}</h5>
            <p>{{ item.detail }}</p>
            <p>
              {{ item.inquisitor }} 于
              {{ item.createTime.substring(0, 10) }}提问
            </p>
            <div>
              <p
                v-if="typeof item.anwser != 'undefined'"
                style="
                  background-color: #f8f8f8;
                  padding: 5px 5px 5px 30px;
                  margin: 0;
                "
              >
                <strong
                  >管理员于{{
                    item.anwser.createTime.substring(0, 10)
                  }}回答：</strong
                >
                {{ item.anwser.detail }}
              </p>
            </div>
          </el-card>
          <div
            style="
              padding: 5px 0 5px 0;
              display: flex;
              justify-content: flex-end;
            "
          >
            <el-pagination
              background
              @current-change="retriveQuestion"
              :current-page.sync="quesitonCurrent"
              :page-size="questionPageSize"
              layout="prev, pager, next,total"
              :total="questionTotal"
            >
            </el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <el-card shadow="never" style="margin: 10px">
          <h5>提出问题：</h5>
          <el-form :model="questionForm" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="questionForm.title" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="详情">
              <el-input
                type="textarea"
                v-model="questionForm.detail"
                placeholder=""
              ></el-input>
            </el-form-item>
            <el-form-item label="提问者">
              <el-input
                v-model="questionForm.inquisitor"
                placeholder=""
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitQuestion">提交</el-button>
              <el-button type="default" @click="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { insertQuestion, getQuestion } from "@/api/manageInfoQuestion";
import axios from "@/utils/axio";

export default {
  data() {
    return {
      questionForm: {
        title: "",
        detail: "",
        inquisitor: ""
      },
      questionList: [],
      questionTotal: 1,
      quesitonCurrent: 1,
      questionPageSize: 10
    };
  },
  methods: {
    reset() {
      this.questionForm = {
        title: "",
        detail: "",
        inquisitor: ""
      };
    },
    retriveQuestion() {
      let thisVm = this;
      getQuestion({
        page: this.quesitonCurrent - 1,
        size: this.questionPageSize
      }).then(res => {
        this.questionTotal = res.page.total;
        this.questionList = res.result;
        res.result.forEach(element => {
          axios({
            url: element._links.infoAnwsers.href,
            method: "get"
          }).then(anwserRes => {
            thisVm.$set(element, "anwser", anwserRes._embedded.infoAnwsers[0]);
            // element.anwser = anwserRes._embedded.infoAnwsers[0];
          });
        });
      });
    },
    async submitQuestion() {
      if (
        this.questionForm.title.trim() == "" ||
        this.questionForm.detail.trim() == ""
      ) {
        this.$message({
          type: "error",
          message: "标题与详情不可以为空！"
        });
      } else {
        await insertQuestion(this.questionForm).then(() => {
          this.$message({
            type: "success",
            message: "提交成功！"
          });
        });
        this.questionForm = {
          title: "",
          detail: "",
          inquisitor: ""
        };
        getQuestion({
          page: this.quesitonCurrent - 1,
          size: this.questionPageSize
        }).then(res => {
          this.questionTotal = res.page.total;
          this.questionList = res.result;
        });
      }
    }
  },
  created() {
    this.retriveQuestion();
  }
};
</script>

<style></style>
