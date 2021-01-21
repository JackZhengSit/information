<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <!-- <div class="search-input">
            <el-input
              size="large"
              placeholder="请输入内容"
              v-model="input"
              class="input-with-select"
            >
              <el-select v-model="select" slot="prepend" placeholder="全部">
                <el-option label="标题" value="1"></el-option>
                <el-option label="作者" value="2"></el-option>
                <el-option label="摘要" value="3"></el-option>
                <el-option label="关键词" value="4"></el-option>
              </el-select>
              <el-button
                type="primary"
                slot="append"
                icon="el-icon-search"
                style="co"
              ></el-button>
            </el-input>
          </div> -->
        <div class="group">
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
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="10" :offset="2">
        <!-- <div id="infoTypeChart" style="width: 600; height: 400px"></div> -->
        <el-carousel :interval="4000" height="280px">
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
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover">
          <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="数据资源" name="1">
              <el-button type="default"
                ><i class="el-icon-s-cooperation" style="font-size: 80px"></i>
                <span style="margin: 20px auto; display: block"
                  >知网数据库</span
                ></el-button
              >
              <el-button type="default">
                <i class="el-icon-s-management" style="font-size: 80px"> </i>
                <span style="margin: 20px auto; display: block"
                  >国军标网站</span
                >
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="行业动态" name="2">
              <el-table :data="newestIndustyTrendData" style="width: 100%">
                <el-table-column
                  :prop="information.infoTitle.field"
                  :label="information.infoTitle.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column
                  :prop="information.checkInTime.field"
                  :label="information.checkInTime.title"
                  width="100"
                ></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="外部资料" name="3">
              <el-table :data="newestInfoExteriorData" style="width: 100%">
                <el-table-column
                  :prop="information.infoTitle.field"
                  :label="information.infoTitle.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column
                  :prop="information.checkInTime.field"
                  :label="information.checkInTime.title"
                  width="100"
                ></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="情报产品" name="4">
              <el-table :data="newestInfoExteriorData" style="width: 100%">
                <el-table-column
                  :prop="information.infoTitle.field"
                  :label="information.infoTitle.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column
                  :prop="information.checkInTime.field"
                  :label="information.checkInTime.title"
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
      <el-col :span="20" :offset="2" style="margin-top: 15px">
        <el-card shadow="hover">
          <!-- <h5 style="margin-top: 0px">公告信息</h5> -->
          <el-carousel height="60px" direction="vertical" arrow="always">
            <el-carousel-item
              v-for="item in newestNoticeData"
              :key="item.title"
            >
              <h5 style="margin: 0"><strong>公告：</strong>{{ item.title }}</h5>
              <p style="margin: 3px 0 0 0">{{ item.mainText }}</p>
            </el-carousel-item>
          </el-carousel>
        </el-card>
        <div></div>
      </el-col>
    </el-row>
    <el-row>
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
                    :label="information.infoTitle.title"
                    min-width="200"
                    :prop="information.infoTitle.field"
                  ></el-table-column>
                  <!-- <el-table-column
                      :label="information.infoType.title"
                      width="100"
                      :prop="information.infoType.field"
                    ></el-table-column> -->
                  <el-table-column
                    :label="information.checkInTime.title"
                    width="100"
                    :prop="information.checkInTime.field"
                  ></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
          <!-- <div class="topicItem">
              <el-card shadow="hover">
                <div slot="header" class="clearfix">
                  <span><strong>专题：</strong>高端装备行业</span>
                  <el-link style="float: right; padding: 3px 0" type="primary"
                    >更多</el-link
                  >
                </div>
                <div>
                  <el-table :data="topicData">
                    <el-table-column
                      label="题名"
                      min-width="200"
                      prop="title"
                    ></el-table-column>
                    <el-table-column
                      label="类型"
                      width="100"
                      prop="type"
                    ></el-table-column>
                    <el-table-column
                      label="登记时间"
                      width="100"
                      prop="checkInTime"
                    ></el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
            <div class="topicItem">
              <el-card shadow="hover">
                <div slot="header" class="clearfix">
                  <span><strong>专题：</strong>高端装备行业</span>
                  <el-link style="float: right; padding: 3px 0" type="primary"
                    >更多</el-link
                  >
                </div>
                <div>
                  <el-table :data="topicData">
                    <el-table-column
                      label="题名"
                      min-width="200"
                      prop="title"
                    ></el-table-column>
                    <el-table-column
                      label="类型"
                      width="100"
                      prop="type"
                    ></el-table-column>
                    <el-table-column
                      label="登记时间"
                      width="100"
                      prop="checkInTime"
                    ></el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
            <div class="topicItem">
              <el-card shadow="hover">
                <div slot="header" class="clearfix">
                  <span><strong>专题：</strong>高端装备行业</span>
                  <el-link style="float: right; padding: 3px 0" type="primary"
                    >更多</el-link
                  >
                </div>
                <div>
                  <el-table :data="topicData">
                    <el-table-column
                      label="题名"
                      min-width="200"
                      prop="title"
                    ></el-table-column>
                    <el-table-column
                      label="类型"
                      width="100"
                      prop="type"
                    ></el-table-column>
                    <el-table-column
                      label="登记时间"
                      width="100"
                      prop="checkInTime"
                    ></el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div> -->
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
} from "@/api/queryInformation";

import { countInfoType } from "@/api/queryInformation";

import { getNewestNotice } from "@/api/manageNotice";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchInput: "",
      searchType: "全部",
      activeTab: "1",
      information,
      searchTypes: [
        { value: "全部" },
        { value: "标题" },
        { value: "作者" },
        { value: "关键词" },
      ],
      newestIndustyTrendData: [],
      newestInfoExteriorData: [],
      newestinfoInteriorData: [],
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
      // topicData: [
      //   {
      //     title: "动态名1动态名1动态名1动态名1",
      //     type: "外部报告",
      //     checkInTime: "2020-10-2",
      //   },
      //   {
      //     title: "动态名1动态名1动态名1动态名1",
      //     type: "外部报告",
      //     checkInTime: "2020-10-2",
      //   },
      //   {
      //     title: "动态名1动态名1动态名1动态名1",
      //     type: "外部报告",
      //     checkInTime: "2020-10-2",
      //   },
      // ],
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

      for (const item of this.getInfoTypeField) {
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
          data: this.getInfoTypeTitle,
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: value,
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

      for (const item of this.getInteriorInfoTypeField) {
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
          data: this.getInteriorInfoTypeTitle,
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: value,
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

      for (const item of this.getExteriorInfoTypeField) {
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
          data: this.getExteriorInfoTypeTitle,
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: value,
          },
        ],
      };
      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
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
      this.newestinfoInteriorData = res;
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
/* .el-carousel__item {
  background-color: #d3dce6;
} */
.chartItem {
  width: 600;
  height: 300px;
  background-color: #fbfcfd;
  /* border: 1px solid #dcdfe6; */
  border-radius: 2px;
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
</style>