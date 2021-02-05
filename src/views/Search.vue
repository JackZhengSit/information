<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <!-- <div class="group">
          <el-select v-model="searchType" placeholder="">
            <el-option
              v-for="item in searchTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="searchInput" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="search">搜索</el-button>
        </div> -->
        <search-form-group></search-form-group>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="4" :offset="3">
        <div class="left-nav-menu" style="">
          <el-collapse v-model="activeNames">
            <el-collapse-item name="infoType">
              <template slot="title">
                情报类型
                <div style="margin-left: 30px">
                  <el-checkbox
                    :indeterminate="infoTypeIsIndeterminate"
                    v-model="infoTypeCheckAll"
                    @change="handleCheckAllInfoType"
                    >全选</el-checkbox
                  >
                </div>
              </template>
              <el-checkbox-group
                v-model="checkedInfoType"
                @change="handleCheckedInfoTypeChange"
              >
                <el-checkbox
                  style="width: 130px; margin: 0px"
                  v-for="item in infoTypeAndCount"
                  :label="item.infoType"
                  :key="item.infoType"
                  >{{ item.infoType }}({{ item.infoCount }})</el-checkbox
                >
              </el-checkbox-group>
            </el-collapse-item>
            <el-collapse-item name="topicCategory">
              <template slot="title">
                专题分类
                <div style="margin-left: 30px">
                  <el-checkbox
                    :indeterminate="topicCategoryIsIndeterminate"
                    v-model="topicCategoryCheckAll"
                    @change="handleCheckAllTopicCategory"
                    >全选</el-checkbox
                  >
                </div>
              </template>
              <el-checkbox-group
                v-model="checkedTopicCategory"
                @change="handleCheckedTopicCategoryChange"
              >
                <el-checkbox
                  style="width: 130px; margin: 0px"
                  v-for="item in topicCategoryAndCount"
                  :label="item.topicCategory"
                  :key="item.topicCategory"
                  >{{ item.topicCategory }}({{ item.count }})</el-checkbox
                >
              </el-checkbox-group>
            </el-collapse-item>
            <el-collapse-item name="professionField">
              <template slot="title">
                专业领域
                <div style="margin-left: 30px">
                  <el-checkbox
                    :indeterminate="professionFieldIsIndeterminate"
                    v-model="professionFieldCheckAll"
                    @change="handleCheckAllProfessionField"
                    >全选</el-checkbox
                  >
                </div>
              </template>
              <el-checkbox-group
                v-model="checkedProfessionField"
                @change="handleCheckedProfessionFieldChange"
              >
                <el-checkbox
                  style="width: 130px; margin: 0px"
                  v-for="item in professionFieldAndCount"
                  :label="item.professionField"
                  :key="item.professionField"
                  >{{ item.professionField }}({{ item.count }})</el-checkbox
                >
              </el-checkbox-group>
            </el-collapse-item>
            <el-collapse-item name="year">
              <template slot="title">
                年份
                <div style="margin-left: 56px">
                  <el-checkbox
                    :indeterminate="yearIsIndeterminate"
                    v-model="yearCheckAll"
                    @change="handleCheckAllYear"
                    >全选</el-checkbox
                  >
                </div>
              </template>
              <el-checkbox-group
                v-model="checkedYear"
                @change="handleCheckedYearChange"
              >
                <el-checkbox
                  style="width: 130px; margin: 0px"
                  v-for="item in yearAndCount"
                  :label="item.year"
                  :key="item.year"
                  >{{ item.year }}({{ item.count }})</el-checkbox
                >
              </el-checkbox-group>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="result-block" style="background-color: #fff">
          <div class="result-title" style="">
            <a href="#">共{{ pageCount }}页&nbsp;每页{{ pageSize }}条</a>
            <a href="#">下一页&nbsp;&nbsp;上一页</a>
          </div>
          <div class="result-body">
            <result-item
              v-for="li in resultList"
              :key="li.id"
              :title="li.infoTitle"
              :author="li.infoAuthor"
              :infoType="li.infoType"
              :abstract="li.abs"
            >
            </result-item>
          </div>

          <div class="result-footer">
            <el-pagination
              background
              layout="prev, pager, next,sizes,jumper"
              :total="total"
              :page-size="pageSize"
              :current-page.sync="currentPage"
              :page-sizes="[5, 10, 20, 50]"
              @size-change="handlePageSizeChange"
              @current-change="handleCurrentPageChange"
              style="float: right"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getInfoTypeCount,
  getTopicCategoryCount,
  getProfessionFieldCount,
  getYearCount,
  searchInformation,
} from "@/api/queryInformation";

export default {
  data() {
    return {
      //左侧导航栏
      activeNames: ["infoType"],

      infoTypeAndCount: [],
      checkedInfoType: [],
      infoTypeIsIndeterminate: false,
      infoTypeCheckAll: true,

      topicCategoryAndCount: [],
      checkedTopicCategory: [],
      topicCategoryIsIndeterminate: false,
      topicCategoryCheckAll: true,

      professionFieldAndCount: [],
      checkedProfessionField: [],
      professionFieldIsIndeterminate: false,
      professionFieldCheckAll: true,

      yearAndCount: [],
      checkedYear: [],
      yearIsIndeterminate: false,
      yearCheckAll: true,

      resultList: [],

      //分页
      total: 0,
      pageSize: 10,
      currentPage: 1,
      pageCount: 0,
    };
  },
  computed: {
    ...mapGetters(["getInfoTypeTitle"]),
  },
  methods: {
    initCheckbox() {
      let p1 = getInfoTypeCount().then((res) => {
        this.infoTypeAndCount = res;
        this.checkedInfoType = res.map((item) => item.infoType);
      });

      let p2 = getTopicCategoryCount().then((res) => {
        this.topicCategoryAndCount = res;
        this.checkedTopicCategory = res.map((item) => item.topicCategory);
      });

      let p3 = getProfessionFieldCount().then((res) => {
        this.professionFieldAndCount = res;
        this.checkedProfessionField = res.map((item) => item.professionField);
      });

      let p4 = getYearCount().then((res) => {
        this.yearAndCount = res;
        this.checkedYear = res.map((item) => item.year);
      });

      return Promise.all([p1, p2, p3, p4]);
    },

    handleCheckAllInfoType(val) {
      this.checkedInfoType = val
        ? this.infoTypeAndCount.map((item) => item.infoType)
        : [];
      this.infoTypeIsIndeterminate = false;
    },
    handleCheckedInfoTypeChange(val) {
      let checkedInfoCount = val.length;
      let allCount = this.infoTypeAndCount.length;
      this.infoTypeCheckAll = checkedInfoCount === allCount;
      this.infoTypeIsIndeterminate =
        checkedInfoCount > 0 && checkedInfoCount < allCount;
    },
    handleCheckAllTopicCategory(val) {
      this.checkedTopicCategory = val
        ? this.topicCategoryAndCount.map((item) => item.topicCategory)
        : [];
      this.topicCategoryIsIndeterminate = false;
    },
    handleCheckedTopicCategoryChange(val) {
      let topicCategoryCount = val.length;
      let allCount = this.topicCategoryAndCount.length;
      this.topicCategoryCheckAll = topicCategoryCount === allCount;
      this.topicCategoryIsIndeterminate =
        topicCategoryCount > 0 && topicCategoryCount < allCount;
    },
    handleCheckAllProfessionField(val) {
      this.checkedProfessionField = val
        ? this.professionFieldAndCount.map((item) => item.professionField)
        : [];
      this.professionFieldIsIndeterminate = false;
    },
    handleCheckedProfessionFieldChange(val) {
      let checkedProfessionFieldCount = val.length;
      let allCount = this.professionFieldAndCount.length;
      this.professionFieldCheckAll = checkedProfessionFieldCount === allCount;
      this.professionFieldIsIndeterminate =
        checkedProfessionFieldCount > 0 &&
        checkedProfessionFieldCount < allCount;
    },
    handleCheckAllYear(val) {
      this.checkedYear = val ? this.yearAndCount.map((item) => item.year) : [];
      this.yearIsIndeterminate = false;
    },
    handleCheckedYearChange(val) {
      let checkedYearCount = val.length;
      let allCount = this.yearAndCount.length;
      this.yearCheckAll = checkedYearCount === allCount;
      this.yearIsIndeterminate =
        checkedYearCount > 0 && checkedYearCount < allCount;
    },
    handlePageSizeChange(val) {
      this.pageSize = val;
      this.$options.methods.search();
    },
    handleCurrentPageChange(val) {
      this.currentPage = val;
      this.$options.methods.search();
    },
    search() {
      let data = {
        current: this.currentPage,
        size: this.pageSize,
        infoType: this.checkedInfoType,
        topicCategory: this.checkedTopicCategory,
        professionField: this.checkedProfessionField,
        year: this.checkedYear,
      };
      console.log(this);
      console.log(data);
      searchInformation({
        current: this.currentPage,
        size: this.pageSize,
        infoType: this.checkedInfoType
          .map((item) => "'" + item + "'")
          .toString(),
        topicCategory: this.checkedTopicCategory
          .map((item) => "'" + item + "'")
          .toString(),
        professionField: this.checkedProfessionField
          .map((item) => "'" + item + "'")
          .toString(),
        year: this.checkedYear.map((item) => "'" + item + "'").toString(),
      }).then((res) => {
        console.log(res);
        this.resultList = res.records;
        this.total = res.total;
        this.currentPage = res.current;
      });
    },
  },
  created() {
    this.initCheckbox().then(() => {
      this.search(this);
    });
  },
};
</script>

<style>
.left-nav-menu {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: rgb(235, 238, 245) solid 1px;
  padding: 15px;
}

.result-block {
  border-radius: 4px;
  border: rgb(235, 238, 245) solid 1px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.result-title {
  background-color: rgba(179, 216, 255, 0.3);
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #409eff solid 1px;
  border-radius: 4px;
}
.result-title a {
  color: #409eff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 20px;
  opacity: 1;
}

.result-body {
  padding: 0 15px;
}

.result-item {
  border-bottom: rgb(235, 238, 245) solid 1px;
}
</style>
