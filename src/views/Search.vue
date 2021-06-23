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
            <div>
              <a>当前第{{ currentPage }}页</a>
              <a>每页{{ pageSize }}条</a>
              <a>共{{ pageCount }}页</a>
            </div>
            <div>
              <a @click="prePage">上一页</a>
              <a @click="nextPage">下一页</a>
            </div>
          </div>
          <div class="result-body">
            <result-item
              v-for="li in resultList"
              :key="li.id"
              :id="li.id"
              :originId="li.originId"
              :title="li.infoTitle"
              :author="li.infoAuthor"
              :infoType="li.infoType"
              :abstract="li.abs"
              :fileUrl="li.fileUrl"
            >
            </result-item>
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
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      //左侧导航栏
      // activeNames: ["infoType"],

      infoTypeIsIndeterminate: false,
      infoTypeCheckAll: true,

      topicCategoryIsIndeterminate: false,
      topicCategoryCheckAll: true,

      professionFieldIsIndeterminate: false,
      professionFieldCheckAll: true,

      yearIsIndeterminate: false,
      yearCheckAll: true,
    };
  },
  computed: {
    ...mapState("search", [
      "activeNames",
      "infoTypeAndCount",
      "checkedInfoType",
      "topicCategoryAndCount",
      "checkedTopicCategory",
      "professionFieldAndCount",
      "checkedProfessionField",
      "yearAndCount",
      "checkedYear",
      "resultList",
      "total",
      "pageSize",
      "currentPage",
      "pageCount",
    ]),

    pageSize: {
      get() {
        return this.$store.state.search.pageSize;
      },
      set(val) {
        this.$store.commit("search/setPageSize", val);
      },
    },
    currentPage: {
      get() {
        return this.$store.state.search.currentPage;
      },
      set(val) {
        this.$store.commit("search/setCurrentPage", val);
      },
    },
    pageCount: {
      get() {
        return this.$store.state.search.pageCount;
      },
      set(val) {
        this.$store.commit("search/setPageCount", val);
      },
    },
    checkedInfoType: {
      get() {
        return this.$store.state.search.checkedInfoType;
      },
      set(val) {
        this.$store.commit("search/setCheckedInfoType", val);
      },
    },
    checkedTopicCategory: {
      get() {
        return this.$store.state.search.checkedTopicCategory;
      },
      set(val) {
        this.$store.commit("search/setCheckedTopicCategory", val);
      },
    },
    checkedProfessionField: {
      get() {
        return this.$store.state.search.checkedProfessionField;
      },
      set(val) {
        this.$store.commit("search/setCheckedProfessionField", val);
      },
    },
    checkedYear: {
      get() {
        // //把其他放在最后
        // let year = this.$store.state.search.checkedYear;
        // let otherIdx = year.findIndex((v) => {
        //   v.year == "其它";
        // });
        // let temp = year[otherIdx];
        // year[otherIdx] = year[year.length - 1];
        // year[year.length - 1] = temp;
        // return year;
        return this.$store.state.search.checkedYear;
      },
      set(val) {
        this.$store.commit("search/setCheckedYear", val);
      },
    },
  },
  methods: {
    ...mapActions("search", ["getCheckbox", "search"]),
    initCheckbox() {
      return this.getCheckbox();
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
      this.search();
    },
    handleCurrentPageChange(val) {
      this.currentPage = val;
      this.search();
    },
    nextPage() {
      if (0 <= this.currentPage <= this.pageSize) {
        this.currentPage++;
      }
      this.search();
    },
    prePage() {
      if (0 <= this.currentPage <= this.pageSize) {
        this.currentPage--;
      }
      this.search();
    },
  },
  created() {
    let isInited =
      this.checkedInfoType.length != 0 ||
      this.checkedTopicCategory != 0 ||
      this.checkedProfessionField != 0 ||
      this.checkedYear != 0;
    if (isInited) this.search();
    else
      this.initCheckbox().then(() => {
        this.search().then(() => {
          // console.log(this.checkedProfessionField);
        });
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
  margin: 0 10px;
  opacity: 1;
  cursor: pointer;
}

.result-body {
  padding: 0 15px;
}

.result-item {
  border-bottom: rgb(235, 238, 245) solid 1px;
}

.result-footer {
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
