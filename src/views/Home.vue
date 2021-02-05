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
              <div id="infoTypeChart" class="chartItem"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="infoTypeChartInterior" class="chartItem"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="infoTypeChartExterior" class="chartItem"></div>
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
                onclick="window.location.href = 'http://200.100.65.13/kns55/'"
                ><i class="el-icon-s-cooperation" style="font-size: 80px"></i>
                <span style="margin: 20px auto; display: block"
                  >知网数据库</span
                ></el-button
              >
              <el-button
                plain
                type="primary"
                onclick="window.location.href = 'http://200.100.68.15:8090/Main.htm'"
              >
                <i class="el-icon-s-management" style="font-size: 80px"> </i>
                <span style="margin: 20px auto; display: block"
                  >国军标网站</span
                >
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="行业动态" name="industryTrend">
              <el-table :data="newestIndustyTrendData" style="width: 100%">
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
              <el-table :data="newestInfoInteriorData" style="width: 100%">
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
              <el-table :data="newestInfoExteriorData" style="width: 100%">
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
              style="float: right; padding: 10px 20px 5px 20px"
              type="primary"
              >更多</el-link
            >
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2" style="margin-top: 10px">
        <el-card shadow="hover">
          <!-- <h5 style="margin-top: 0px">公告信息</h5> -->
          <el-carousel height="66px" direction="vertical" arrow="always">
            <el-carousel-item
              v-for="item in newestNoticeData"
              :key="item.title"
            >
              <h5 style="margin: 0">
                <i
                  class="el-icon-message-solid"
                  style="font-size: 20px; color: #409eff"
                ></i
                ><strong> 公告：</strong>
                {{ item.title }}
              </h5>
              <p style="margin: 3px 0 0 0">{{ item.mainText }}</p>
            </el-carousel-item>
          </el-carousel>
        </el-card>
        <div></div>
      </el-col>
    </el-row>
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
                <el-link style="float: right; padding: 3px 0" type="primary"
                  >更多</el-link
                >
              </div>
              <div>
                <el-table :data="topicItem.list">
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

import { getNewestNotice } from "@/api/manageNotice";

import { mapGetters } from "vuex";

import moment from "moment";

export default {
  data() {
    return {
      searchInput: "",
      searchType: "全部",
      searchTypes: [
        { value: "全部" },
        { value: "标题" },
        { value: "作者" },
        { value: "关键词" },
      ],
      information,
      activeTab: "industryTrend",
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
          name: "市场经营",
          list: [],
        },
      ],
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
          text: "全部情报信息统计",
          left: 80,
          top: 20,
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
          data: [...this.getInfoTypeTitle].reverse(),
        },
        series: [
          {
            name: "销量",
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
          text: "内部情报信息统计",
          left: 80,
          top: 20,
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
          text: "外部情报信息统计",
          left: 80,
          top: 20,
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
</style>