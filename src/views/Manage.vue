<template>
  <el-container>
    <el-main>
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
                  :default-active="defaultActiveIndex"
                >
                  <el-menu-item index="/manage/industryTrend">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">{{ infoType.industryTrend }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/briefReportExterior">
                    <i class="el-icon-link"></i>
                    <span slot="title">{{ infoType.briefReportExterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/briefReportInterior">
                    <i class="el-icon-notebook-2"></i>
                    <span slot="title">{{ infoType.briefReportInterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/reportExterior">
                    <i class="el-icon-folder"></i>
                    <span slot="title">{{ infoType.reportExterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/reportInterior">
                    <i class="el-icon-suitcase"></i>
                    <span slot="title">{{ infoType.reportInterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/patentExterior">
                    <i class="el-icon-postcard"></i>
                    <span slot="title">{{ infoType.patentExterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/paperExterior">
                    <i class="el-icon-notebook-1"></i>
                    <span slot="title">{{ infoType.paperExterior }}</span>
                  </el-menu-item>
                  <el-menu-item index="/manage/standardExterior">
                    <i class="el-icon-office-building"></i>
                    <span slot="title">{{ infoType.standardExterior }}</span>
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
    </el-main>
  </el-container>
</template>

<script>
import { infoType } from "../store/infoType";
export default {
  data() {
    return {
      infoType,
      defaultActiveIndex: "/manage/industryTrend",
      form: {
        title: "",
        author: "",
        abstract: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          id: 1,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
        {
          id: 2,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
        {
          id: 3,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
        {
          id: 4,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
        {
          id: 5,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
        {
          id: 6,
          title: "机器学习的可解释性",
          author: " 陈珂锐 孟小峰",
          abstract:
            "近年来,机器学习发展迅速,尤其是深度学习在图像、声音、自然语言处理等领域取得卓越成效.机器学习算法的表示能力大幅度提高,但是伴随着模型复杂度的增加,机器学习算法的可解释性越差,至今,机器学习的可解释性依旧是个难题.通过算法训练出的模型被看作成黑盒子,严重阻碍了机器学习在某些特定领域的使用,譬如医学、金融等领域.目前针对机器学习的可解释性综述性的工作极少,因此,将现有的可解释方法进行归类描述和分析比较,一方面对可解释性的定义、度量进行阐述,另一方面针对可解释对象的不同,从模型的解释、预测结果的解释和模仿者模型的解释3个方面,总结和分析各种机器学习可解释技术,并讨论了机器学习可解释方法面临的挑战和机遇以及未来的可能发展方向.",
          publicateDate: "2020-09-15",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      //submit
    },
    reset() {
      //reset
    },
  },
};
</script>

<style>
</style>