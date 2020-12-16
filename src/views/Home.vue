<template>
  <el-container>
    <el-main>
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
          <el-carousel :interval="4000" type="card" height="280px">
            <el-carousel-item v-for="item in 3" :key="item">
              <div id="infoTypeChart" style="width: 600; height: 300px"></div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="10">
          <el-card shadow="hover">
            <!-- <div slot="header" class="clearfix">
              <span>行业动态</span>
              <el-link style="float: right; padding: 3px 0" type="primary"
                >更多</el-link
              >
            </div> -->
            <el-tabs v-model="activeTab" type="card">
              <el-tab-pane label="数据资源" name="1">
                <el-table :data="industyTrendData" style="width: 100%">
                  <el-table-column
                    :prop="industryTrend.title.field"
                    :label="industryTrend.title.title"
                    min-width="200"
                  ></el-table-column>
                  <el-table-column
                    :prop="industryTrend.checkInTime.field"
                    :label="industryTrend.checkInTime.title"
                    width="100"
                  ></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="行业动态" name="2">
                <el-table :data="industyTrendData" style="width: 100%">
                  <el-table-column
                    :prop="industryTrend.title.field"
                    :label="industryTrend.title.title"
                    min-width="200"
                  ></el-table-column>
                  <el-table-column
                    :prop="industryTrend.checkInTime.field"
                    :label="industryTrend.checkInTime.title"
                    width="100"
                  ></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="外部资料" name="3">
                <el-table :data="industyTrendData" style="width: 100%">
                  <el-table-column
                    :prop="industryTrend.title.field"
                    :label="industryTrend.title.title"
                    min-width="200"
                  ></el-table-column>
                  <el-table-column
                    :prop="industryTrend.checkInTime.field"
                    :label="industryTrend.checkInTime.title"
                    width="100"
                  ></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="情报产品" name="4">
                <el-table :data="industyTrendData" style="width: 100%">
                  <el-table-column
                    :prop="industryTrend.title.field"
                    :label="industryTrend.title.title"
                    min-width="200"
                  ></el-table-column>
                  <el-table-column
                    :prop="industryTrend.checkInTime.field"
                    :label="industryTrend.checkInTime.title"
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
            <!-- <div>
              <el-table :data="industyTrendData" style="width: 100%">
                <el-table-column
                  :prop="industryTrend.title.field"
                  :label="industryTrend.title.title"
                  min-width="200"
                ></el-table-column>
                <el-table-column
                  :prop="industryTrend.checkInTime.field"
                  :label="industryTrend.checkInTime.title"
                  width="100"
                ></el-table-column>
              </el-table>
            </div> -->
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="20" :offset="2">
          <el-card shadow="hover" style="margin: 10px 0">
            <div slot="header" class="clearfix">
              <span>馆藏图书</span>
            </div>
            <div>
              <el-link style="padding: 3px 10px" type="primary">图书</el-link>
              <el-link style="padding: 3px 10px" type="primary">期刊</el-link>
            </div>
          </el-card>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="20" :offset="2">
          <div class="topic">
            <!-- <el-card class="topicItem" shadow="hover">
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
            <el-card class="topicItem" shadow="hover">
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
            <el-card class="topicItem" shadow="hover">
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
            <el-card class="topicItem" shadow="hover">
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
            <el-card class="topicItem" shadow="hover">
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
            </el-card> -->
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
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { industryTrend } from "../store/infoType";
// import echarts from "echarts";
export default {
  data() {
    return {
      searchInput: "",
      searchType: "全部",
      activeTab: "1",

      searchTypes: [
        { value: "全部" },
        { value: "标题" },
        { value: "作者" },
        { value: "关键词" },
      ],
      industryTrend,
      industyTrendData: [
        {
          title: "动态名1动态名1动态名1动态名1",
          checkInTime: "2020-10-2",
        },
        {
          title: "动态名1动态名1动态名1动态名1",
          checkInTime: "2020-10-2",
        },
        {
          title: "动态名1动态名1动态名1动态名1",
          checkInTime: "2020-10-2",
        },
      ],
      topicData: [
        {
          title: "动态名1动态名1动态名1动态名1",
          type: "外部报告",
          checkInTime: "2020-10-2",
        },
        {
          title: "动态名1动态名1动态名1动态名1",
          type: "外部报告",
          checkInTime: "2020-10-2",
        },
        {
          title: "动态名1动态名1动态名1动态名1",
          type: "外部报告",
          checkInTime: "2020-10-2",
        },
      ],
    };
  },
  methods: {
    infoTypeChart() {
      let myEcharts = this.$echarts.init(
        document.getElementById("infoTypeChart"),
        "light"
      );
      let option = {
        title: {
          text: "表格示例",
        },
        tooltip: {},
        legend: {
          data: ["知识量"],
        },
        xAxis: {
          data: [
            "行业动态",
            "外部简报",
            "外部论文著作",
            "外部专利",
            "外部标准",
            "情报外部报告",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 27],
          },
        ],
      };
      myEcharts.setOption(option);
      window.addEventListener("resize", function () {
        myEcharts.resize();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.infoTypeChart();
    });
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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