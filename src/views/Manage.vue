<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card>
          <el-row :gutter="20">
            <el-col :span="4">
              <el-menu
                text-color="#909399"
                active-text-color="#409EFF"
                class="el-menu-vertical-manage"
                router
                :default-active="activeIndex"
              >
                <el-menu-item index="/manage/industryTrend">
                  <i class="el-icon-tickets"></i>
                  <span slot="title">{{ infoType.industryTrend }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/reportInterior">
                  <i class="el-icon-suitcase"></i>
                  <span slot="title">{{ infoType.reportInterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/briefReportInterior">
                  <i class="el-icon-notebook-2"></i>
                  <span slot="title">{{ infoType.briefReportInterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/standardExterior">
                  <i class="el-icon-office-building"></i>
                  <span slot="title">{{ infoType.standardExterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/reportExterior">
                  <i class="el-icon-folder"></i>
                  <span slot="title">{{ infoType.reportExterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/briefReportExterior">
                  <i class="el-icon-link"></i>
                  <span slot="title">{{ infoType.briefReportExterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/paperExterior">
                  <i class="el-icon-notebook-1"></i>
                  <span slot="title">{{ infoType.paperExterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/patentExterior">
                  <i class="el-icon-postcard"></i>
                  <span slot="title">{{ infoType.patentExterior }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/notice">
                  <i class="el-icon-bell"></i>
                  <span slot="title">{{ infoType.notice }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/question">
                  <i class="el-icon-microphone"></i>
                  <span slot="title">{{ infoType.question }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/classResource">
                  <i class="el-icon-download"></i>
                  <span slot="title">{{ infoType.classResource }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/infoLibrary">
                  <i class="el-icon-notebook-1"></i>
                  <span slot="title">{{ infoType.infoLibrary }}</span>
                </el-menu-item>
                <el-menu-item index="/manage/importantProduct">
                  <i class="el-icon-copy-document"></i>
                  <span slot="title">{{ infoType.importantProduct }}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { infoType } from "../store/infoType";
import { mapState } from "vuex";
export default {
  data() {
    return {
      infoType,
      defaultActiveIndex: "/manage/industryTrend"
    };
  },
  computed: {
    ...mapState({
      activeIndex: state => state.RouteModule.path
    })
  },
  methods: {
    onSubmit() {
      //submit
    },
    reset() {
      //reset
    }
  }
};
</script>

<style></style>
