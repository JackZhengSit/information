<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <!-- <div class="group">
          <el-select v-model="searchType" placeholder="" style="width: 150px">
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
      <el-col :span="10" :offset="2">
        <!-- <el-carousel :interval="4000" height="280px"> -->
        <el-card shadow="hover" style="height: 420px">
          <el-carousel :interval="4000" height="381px">
            <el-carousel-item>
              <div
                id="infoTypeChart"
                class="chartItem"
                @click="toStatistics"
              ></div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                id="infoTypeChartInterior"
                class="chartItem"
                @click="toStatistics"
              ></div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                id="infoTypeChartExterior"
                class="chartItem"
                @click="toStatistics"
              ></div>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover" style="height: 420px">
          <el-tabs v-model="activeTab" type="card">
            <el-tab-pane
              label="数据资源"
              name="dataResource"
              style="height: 289px"
            >
              <el-button
                plain
                type="primary"
                onclick="window.open('http://200.100.65.13/kns55/')"
                ><i class="el-icon-s-cooperation" style="font-size: 80px"></i>
                <span style="margin: 20px auto; display: block"
                  >知网数据库</span
                ></el-button
              >

              <el-button
                plain
                type="primary"
                onclick="window.open('http://200.100.68.15:8090/Main.htm')"
              >
                <i class="el-icon-s-management" style="font-size: 80px"> </i>
                <span style="margin: 20px auto; display: block"
                  >国家军用标准全文数据库</span
                >
              </el-button>
              <el-button
                plain
                type="primary"
                onclick="window.open('http://200.100.68.28:8080')"
              >
                <i class="el-icon-s-claim" style="font-size: 80px"> </i>
                <span style="margin: 20px auto; display: block"
                  >标准实施系统</span
                >
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="行业动态" name="industryTrend">
              <el-table
                :data="newestIndustyTrendData"
                style="width: 100%"
                @row-click="showDetails"
              >
                <el-table-column
                  show-overflow-tooltip
                  :label="information.infoTitle.title"
                  :prop="information.infoTitle.field"
                  min-width="200"
                >
                </el-table-column>
                <el-table-column label="" width="50">
                  <template slot-scope="scope">
                    <span
                      v-if="isnew(scope.row.createTime)"
                      class="new-animation"
                      >new</span
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.infoType.field"
                  :label="information.infoType.title"
                  width="100"
                ></el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.createTime.field"
                  :label="information.createTime.title"
                  :formatter="formatDate"
                  width="100"
                ></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="" name="infoInterior">
              <template #label>
                <el-dropdown @command="newestInfoInteriorCommand">
                  <span class="el-dropdown-link">
                    情报产品<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="item in getInteriorInfoTypeTitle"
                      :key="item"
                      :command="item"
                      >{{ item }}</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
              <el-table
                :data="newestInfoInteriorData"
                style="width: 100%"
                @row-click="showDetails"
              >
                <el-table-column
                  show-overflow-tooltip
                  :prop="information.infoTitle.field"
                  :label="information.infoTitle.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column label="" width="50">
                  <template slot-scope="scope">
                    <span
                      v-if="isnew(scope.row.createTime)"
                      class="new-animation"
                      >new</span
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.infoType.field"
                  :label="information.infoType.title"
                  width="100"
                ></el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.createTime.field"
                  :label="information.createTime.title"
                  :formatter="formatDate"
                  width="100"
                ></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="" name="infoExterior">
              <template #label>
                <el-dropdown @command="newestInfoExteriorCommand">
                  <span class="el-dropdown-link">
                    外部资料<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="item in getExteriorInfoTypeTitle.filter(
                        (item) => item != '行业动态'
                      )"
                      :key="item"
                      :command="item"
                      >{{ item }}</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
              <el-table
                :data="newestInfoExteriorData"
                style="width: 100%"
                @row-click="showDetails"
              >
                <el-table-column
                  show-overflow-tooltip
                  :prop="information.infoTitle.field"
                  :label="information.infoTitle.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column label="" width="50">
                  <template slot-scope="scope">
                    <span
                      v-if="isnew(scope.row.createTime)"
                      class="new-animation"
                      >new</span
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.infoType.field"
                  :label="information.infoType.title"
                  width="100"
                ></el-table-column>
                <el-table-column
                  align="center"
                  :prop="information.createTime.field"
                  :label="information.createTime.title"
                  :formatter="formatDate"
                  width="100"
                ></el-table-column>
              </el-table>
            </el-tab-pane>

            <el-link
              v-if="this.activeTab != 'dataResource'"
              style="float: right; padding: 10px 20px 5px 20px"
              type="primary"
              @click="infoTypeMore"
              >更多</el-link
            >
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="20" :offset="2">
        <el-card shadow="hover">
          <el-row>
            <el-col :span="4">
              <span style="font-size: 1em; font-weight: bold; color: #409eff"
                >重点产品<br />检测导航</span
              >
            </el-col>
            <el-col :span="20">
              <el-col :span="12">
                <el-button plain type="primary" onclick="">
                  <i
                    class="el-icon-s-home"
                    style="font-size: 30px; width: 500px; display: inline-block"
                    ><span style="font-size: 20px"
                      >船舶设备智能故障诊断</span
                    ></i
                  >
                </el-button>
              </el-col>
              <el-col :span="12">
                <el-button
                  plain
                  type="primary"
                  onclick=""
                  style="display: block; width: 500px; display: inline-block"
                >
                  <i class="el-icon-s-home" style="font-size: 30px"
                    ><span style="font-size: 20px">行星滚柱丝杠</span></i
                  >
                </el-button>
              </el-col>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2" style="margin-top: 10px">
        <el-card shadow="hover">
          <el-link type="primary" @click="drawer = true" style="float: right"
            >更多</el-link
          >
          <el-carousel height="66px" direction="vertical" arrow="always">
            <el-carousel-item
              v-for="item in newestNoticeData"
              :key="item.title"
            >
              <div class="noticeTitle">
                <h5 style="margin: 0">
                  <i
                    class="el-icon-message-solid"
                    style="font-size: 20px; color: #409eff"
                  ></i
                  ><strong> 公告：</strong>
                  {{ item.title }}
                </h5>
              </div>

              <p style="margin: 3px 0 0 0">
                {{ item.mainText }}
                <!-- <a
                  style="color: #409eff; cursor: pointer"
                  v-if="item.mainText.length > 168"
                  type="text"
                  @click="showNoticeDetail = true"
                  >...更多</a
                > -->
              </p>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
      title="公告查询"
      :visible.sync="drawer"
      :with-header="false"
      size="70%"
      @opened="searchNotice"
      show-close="true"
      close-on-press-escape
    >
      <el-container>
        <el-main style="overflow-y: scroll; width: 100vh; height: 100vh">
          <el-row>
            <el-col :span="2">
              <h3>公告查询</h3>
            </el-col>
            <el-col :span="1" :offset="20">
              <el-button type="danger" @click="drawer = false">关闭</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" justify="center">
              <el-form :model="noticeForm" ref="noticeForm">
                <el-form-item label="标题">
                  <el-input
                    v-model="noticeForm.title"
                    style="width: 500px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="作者">
                  <el-input
                    v-model="noticeForm.author"
                    style="width: 500px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="发布时间">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="noticeForm.publicateDayStart"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                  -
                  <el-date-picker
                    placeholder="选择时间"
                    v-model="noticeForm.publicateDayEnd"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="">
                  <el-button type="primary" @click="searchNotice"
                    >搜索</el-button
                  >
                  <el-button type="default" @click="resetSearchNotice"
                    >重置</el-button
                  >
                </el-form-item>
              </el-form></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table
                ref="noticeTable"
                :data="noticeTableData"
                style="width: 100%"
                @row-click="rowClick"
              >
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-row>
                      <el-col :span="2" style="text-align: right"
                        ><strong>标题：</strong></el-col
                      >
                      <el-col :span="20">{{ props.row.title }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="2" style="text-align: right"
                        ><strong>作者：</strong></el-col
                      >
                      <el-col :span="20">{{ props.row.author }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="2" style="text-align: right"
                        ><strong>内容：</strong></el-col
                      >
                      <el-col :span="20">{{ props.row.mainText }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="2" style="text-align: right"
                        ><strong>发布日：</strong></el-col
                      >
                      <el-col :span="20">{{ props.row.publicateDay }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="2" style="text-align: right"
                        ><strong>创建时间：</strong></el-col
                      >
                      <el-col :span="20">{{ props.row.createTime }}</el-col>
                    </el-row>
                  </template>
                </el-table-column>
                <el-table-column label="标题" prop="title"></el-table-column>
                <el-table-column label="作者" prop="author"></el-table-column>
                <el-table-column
                  label="内容"
                  prop="mainText"
                  :show-overflow-tooltip="true"
                ></el-table-column>
                <el-table-column
                  label="发布时间"
                  prop="publicateDay"
                ></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-drawer>
    <el-row style="margin-top: 5px">
      <el-col :span="20" :offset="2">
        <div class="topic">
          <div
            v-for="topicItem in topics"
            :key="topicItem.name"
            class="topicItem"
          >
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <span><strong>专题：</strong>{{ topicItem.name }}</span>
                <el-link
                  style="float: right; padding: 3px 0"
                  type="primary"
                  @click="topicMore(topicItem.name)"
                  >更多</el-link
                >
              </div>
              <div>
                <el-table :data="topicItem.list" @row-click="showDetails">
                  <el-table-column
                    show-overflow-tooltip
                    :prop="information.infoTitle.field"
                    :label="information.infoTitle.title"
                    min-width="180"
                  ></el-table-column>
                  <el-table-column label="" width="50">
                    <template slot-scope="scope">
                      <span
                        v-if="isnew(scope.row.createTime)"
                        class="new-animation"
                        >new</span
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :prop="information.infoType.field"
                    :label="information.infoType.title"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    align="center"
                    width="100"
                    :prop="information.createTime.field"
                    :label="information.createTime.title"
                    :formatter="formatDate"
                  ></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { information } from "../store/infoType";
import {
  getNewestIndustryTrend,
  getNewestInfoExterior,
  getNewestInfoInterior,
  getTopicInformation,
  getNewestInfoByInfoType,
} from "@/api/queryInformation";

import { countInfoType } from "@/api/queryInformation";

import { getNewestNotice, searchNotice } from "@/api/manageNotice";

import { mapActions, mapGetters, mapMutations } from "vuex";

import moment from "moment";

export default {
  data() {
    return {
      drawer: false,
      showNoticeDetail: false,
      searchInput: "",
      searchType: "全部",
      searchTypes: [
        { value: "全部" },
        { value: "标题" },
        { value: "作者" },
        { value: "关键词" },
      ],
      information,
      activeTab: "dataResource",
      newestIndustyTrendData: [],
      newestInfoExteriorData: [],
      newestInfoInteriorData: [],
      newestNoticeData: [],
      topics: [
        {
          id: 1,
          name: "配套产品",
          list: [],
        },
        {
          id: 2,
          name: "前沿技术",
          list: [],
        },
        {
          id: 3,
          name: "市场运行",
          list: [],
        },
      ],
      noticeForm: {
        title: "",
        author: "",
        publicateDayStart: moment().subtract(3, "years").format("YYYY-MM-DD"),
        publicateDayEnd: moment().format("YYYY-MM-DD"),
      },
      noticeTableData: [],
    };
  },
  computed: {
    ...mapGetters([
      "getInfoTypeField",
      "getInfoTypeTitle",
      "getExteriorInfoTypeField",
      "getExteriorInfoTypeTitle",
      "getInteriorInfoTypeField",
      "getInteriorInfoTypeTitle",
    ]),
  },
  methods: {
    ...mapMutations("search", [
      "setActiveNames",
      "setCheckedInfoType",
      "setCheckedTopicCategory",
      "setCheckedProfessionField",
      "setCheckedYear",
    ]),
    ...mapActions("search", ["getCheckbox"]),
    async infoTypeChart() {
      let value = [];
      for (const item of this.getInfoTypeTitle) {
        await countInfoType({ infoType: item }).then((res) => {
          value.push(res);
        });
      }

      let myEcharts = this.$echarts.init(
        document.getElementById("infoTypeChart"),
        "light"
      );
      let option = {
        title: {
          text: "全部情报数据统计",
          left: 80,
          top: 20,
        },
        tooltip: {},
        legend: {
          data: ["知识量"],
        },
        graphic: {
          elements: [
            {
              type: "text",
              left: "70%",
              top: "10%",
              style: {
                text: "总量：" + value.reduce((acc, cur) => (acc += cur)),
              },
            },
          ],
        },
        grid: {
          left: 90,
        },
        xAxis: { type: "value" },
        yAxis: {
          type: "category",
          data: [...this.getInfoTypeTitle].reverse(),
        },
        series: [
          {
            name: "数量",
            type: "bar",
            data: [...value].reverse(),
          },
        ],
      };
      // this.$nextTick(() => {
      //   myEcharts.setOption(option);
      //   window.addEventListener("resize", function () {
      //     myEcharts.resize();
      //   });
      // });
      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
    async infoTypeChartInterior() {
      let value = [];

      for (const item of this.getInteriorInfoTypeTitle) {
        await countInfoType({ infoType: item }).then((res) => {
          value.push(res);
        });
      }

      let myEcharts = this.$echarts.init(
        document.getElementById("infoTypeChartInterior"),
        "light"
      );
      let option = {
        title: {
          text: "内部情报数据统计",
          left: 80,
          top: 20,
        },
        graphic: {
          elements: [
            {
              type: "text",
              left: "70%",
              top: "10%",
              style: {
                text: "总量：" + value.reduce((acc, cur) => (acc += cur)),
              },
            },
          ],
        },
        tooltip: {},
        legend: {
          data: ["知识量"],
        },
        grid: {
          left: 90,
        },
        xAxis: { type: "value" },
        yAxis: {
          type: "category",
          data: [...this.getInteriorInfoTypeTitle].reverse(),
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [...value].reverse(),
          },
        ],
      };
      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
    async infoTypeChartExterior() {
      let value = [];

      for (const item of this.getExteriorInfoTypeTitle) {
        await countInfoType({ infoType: item }).then((res) => {
          value.push(res);
        });
      }

      let myEcharts = this.$echarts.init(
        document.getElementById("infoTypeChartExterior"),
        "light"
      );
      let option = {
        title: {
          text: "外部情报数据统计",
          left: 80,
          top: 20,
        },
        graphic: {
          elements: [
            {
              type: "text",
              left: "70%",
              top: "10%",
              style: {
                text: "总量：" + value.reduce((acc, cur) => (acc += cur)),
              },
            },
          ],
        },
        tooltip: {},
        legend: {
          data: ["知识量"],
        },
        grid: {
          left: 90,
        },
        xAxis: { type: "value" },
        yAxis: {
          type: "category",
          data: [...this.getExteriorInfoTypeTitle].reverse(),
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [...value].reverse(),
          },
        ],
      };
      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
    newestInfoInteriorCommand(command) {
      getNewestInfoByInfoType({ infoType: command }).then((res) => {
        this.newestInfoInteriorData = res;
        this.activeTab = "infoInterior";
      });
    },
    newestInfoExteriorCommand(command) {
      getNewestInfoByInfoType({ infoType: command }).then((res) => {
        this.newestInfoExteriorData = res;
        this.activeTab = "infoExterior";
      });
    },
    formatDate(row, column, cellValue, index) {
      const date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD");
    },
    isnew(createTime) {
      //是否为一周内
      return moment(createTime).isAfter(moment().subtract(7, "d"));
    },
    searchNotice() {
      let queryParams = Object.assign({}, this.noticeForm, {
        page: 0,
        size: 1000,
      });
      console.log(queryParams);
      searchNotice(queryParams).then((res) => {
        this.noticeTableData = res.result;
        console.log(res);
      });
    },
    resetSearchNotice() {
      this.noticeForm.title = "";
      this.noticeForm.author = "";
      this.noticeForm.publicateDayStart = moment()
        .subtract(3, "years")
        .format("YYYY-MM-DD");
      this.noticeForm.publicateDayEnd = moment().format("YYYY-MM-DD");
    },
    infoTypeMore() {
      this.setActiveNames(["infoType"]);
      switch (this.activeTab) {
        case "dataResource":
          // window.open("http://200.100.68.15:8090/Main.htm");
          break;
        case "industryTrend":
          // this.$store.commit("search/setCheckedInfoType", ["行业动态"]);
          this.getCheckbox().then(() => {
            this.setCheckedInfoType(["行业动态"]);
            this.$router.push({ name: "Search" });
          });
          break;
        case "infoInterior":
          this.getCheckbox().then(() => {
            this.setCheckedInfoType([...this.getInteriorInfoTypeTitle]);
            this.$router.push({ name: "Search" });
          });

          break;
        case "infoExterior":
          this.getCheckbox().then(() => {
            this.setCheckedInfoType(
              this.getExteriorInfoTypeTitle.filter((item) => item != "行业动态")
            );
            this.$router.push({ name: "Search" });
          });

          break;
      }
    },
    topicMore(topicName) {
      this.setActiveNames(["topicCategory"]);
      this.getCheckbox().then(() => {
        this.setCheckedTopicCategory([topicName]);
        this.$router.push({ name: "Search" });
      });
    },
    showDetails(row) {
      let routeData = this.$router.resolve({
        name: "Details",
        query: {
          originId: row.originId,
          infoType: row.infoType,
          infoTitle: row.infoTitle,
          infoFileUrl: row.fileUrl,
        },
        props: true,
      });
      window.open(routeData.href, "_blank");
    },
    rowClick(row) {
      // console.log(this.$refs.noticeTable);
      // this.$refs.noticeTable.toggleRowExpansion(row, true);
    },
    toStatistics() {
      this.$router.push({ name: "Statistics" });
    },
  },
  created() {
    getNewestIndustryTrend().then((res) => {
      this.newestIndustyTrendData = res;
    });
    getNewestInfoExterior().then((res) => {
      this.newestInfoExteriorData = res;
    });
    getNewestInfoInterior().then((res) => {
      this.newestInfoInteriorData = res;
    });
    getNewestNotice().then((res) => {
      this.newestNoticeData = res;
    });
    this.topics.forEach((v, i) => {
      getTopicInformation({ topic: v.name }).then(
        (res) => (this.topics[i].list = res)
      );
    });
    this.$notify.info({
      title: "提示",
      message: "为获得最佳使用体验，建议使用chrome浏览器。",
      offset: 100,
    });
  },
  mounted() {
    this.infoTypeChart();
    this.infoTypeChartInterior();
    this.infoTypeChartExterior();
  },
};
</script>

<style>
.el-dropdown-link {
  color: #303133;
}
.chartItem {
  height: 400px;
}

.topic {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
}
.topicItem {
  flex: 0 0 32%;
  padding: 5px;
}

.new-animation {
  color: #409eff;
  -webkit-animation: newAnimation 0.5s 0.2s linear infinite alternate; /* Safari and Chrome */
}

@-webkit-keyframes newAnimation /* Safari and Chrome */ {
  from {
    color: #409eff;
    opacity: 0.5;
  }
  to {
    color: #409eff;
  }
}

.noticeTitle {
  display: flex;
  justify-content: space-between;
}

.el-drawer:focus {
  outline: none;
}
</style>