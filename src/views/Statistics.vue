<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-27 09:39:18
 * @LastEditTime: 2021-05-25 14:36:13
-->
<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-card>
          <div class="chart" id="typeStatistcs"></div>
          <div class="chart" id="categoryStatistcs"></div>
          <div class="chart" id="fieldStatistcs"></div>
          <div class="chart" id="yearStatistcs"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getInfoTypeCount,
  getTopicCategoryCount,
  getProfessionFieldCount,
  getYearCount,
} from "../api/queryInformation";

export default {
  data() {
    return {};
  },
  methods: {
    initTypeChart(data) {
      let typeChart = this.$echarts.init(
        document.getElementById("typeStatistcs")
      );
      typeChart.setOption({
        title: {
          left: "40%",
          text: "情报类型统计",
        },
        tooltip: {},
        legend: {
          right: 10,
          data: ["数量"],
        },
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          {
            name: "数量",
            type: "bar",
          },
        ],
      });
    },
    initTopicCategoryChart(data) {
      let typeChart = this.$echarts.init(
        document.getElementById("categoryStatistcs")
      );
      typeChart.setOption({
        title: {
          left: "40%",
          text: "专题统计",
        },
        tooltip: {},
        legend: {
          right: 10,
          data: ["数量"],
        },
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          {
            name: "数量",
            type: "bar",
          },
        ],
      });
    },
    initProfessionFieldChart(data) {
      let typeChart = this.$echarts.init(
        document.getElementById("fieldStatistcs")
      );
      typeChart.setOption({
        title: {
          left: "40%",
          text: "专业领域统计",
        },
        tooltip: {},
        legend: {
          right: 10,
          data: ["数量"],
        },
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          {
            name: "数量",
            type: "bar",
          },
        ],
      });
    },
    initYearChart(data) {
      let typeChart = this.$echarts.init(
        document.getElementById("yearStatistcs")
      );
      typeChart.setOption({
        title: {
          left: "40%",
          text: "年份统计",
        },
        tooltip: {},
        legend: {
          right: 10,
          data: ["数量"],
        },
        dataset: {
          source: data,
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          {
            name: "数量",
            type: "bar",
          },
        ],
      });
    },
  },
  mounted() {
    getInfoTypeCount().then((res) => {
      this.initTypeChart(res);
    });
    getTopicCategoryCount().then((res) => {
      this.initTopicCategoryChart(res);
    });
    getProfessionFieldCount().then((res) => {
      this.initProfessionFieldChart(res);
    });
    getYearCount().then((res) => {
      this.initYearChart(res);
    });
  },
};
</script>

<style scpoed>
.chart {
  margin: 0 0 10px 0;
  height: 600px;
  /* background-color: aquamarine; */
}
</style>