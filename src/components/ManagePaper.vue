<template>
  <div>
    <el-form :model="form" ref="form" label-width="100px">
      <el-row>
        <el-col :span="10" :offset="2">
          <el-form-item label="题名">
            <el-input v-model="form.title" placeholder="题名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="作者">
            <el-input v-model="form.author" placeholder="作者"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">
          <el-form-item label="摘要">
            <el-input
              type="textarea"
              v-model="form.abstract"
              placeholder="摘要"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" :offset="2">
          <el-form-item label="发表日期">
            <el-date-picker
              type="date"
              v-model="form.publicateDate"
              placeholder="请选择日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" offset="2">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="default" @click="reset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <el-row>
        <el-col :span="24">
          <vxe-table
            align="center"
            border
            highlight-hover-row
            ref="xTable"
            max-height="600"
            :toolbar-config="{
              zoom: true,
            }"
            :export-config="{ isPrint: false }"
            :edit-config="{ trigger: 'dblclick', mode: 'cell' }"
            :data="tableData"
          >
            <vxe-table-column
              type="checkbox"
              width="60"
              fixed="left"
            ></vxe-table-column>
            <vxe-table-column
              type="seq"
              width="60"
              fixed="left"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="60"
              :title="briefReportExterior.orderNum"
            ></vxe-table-column>
            <vxe-table-column
              field="author"
              width="100"
              :title="briefReportExterior.name"
              :edit-render="{
                name: 'input',
                immediate: true,
                attrs: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="abstract"
              width="100"
              :title="briefReportExterior.type"
              show-overflow
              :edit-render="{
                name: 'input',
                immediate: true,
                attrs: { type: 'textarea' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.completeDepartment"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.title"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.industryType"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.industryDetailType"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.industryChainType"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referDeviceType"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referDevice"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referProduct"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referProject"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referInstitution"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referTechnology"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referCategory"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.department"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.researchField"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column
            ><vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.researchOrientation"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.researchSystem"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.techFieldType1"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.techFieldType2"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.techFieldType3"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.industryField"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.industryOrientation"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.publishDepartment"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.checkInTime"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.knowledgeType"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.securityLevel"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.abs"
              :edit-render="{
                name: 'input',
                props: { type: 'textarea' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.formatTime"
              :edit-render="{
                name: 'input',
                props: { type: 'date' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.informationCollactor"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.informationAuditor"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.language"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.keywords"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.informationOrigin"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
            <vxe-table-column
              field="title"
              width="100"
              :title="briefReportExterior.referWebsite"
              :edit-render="{
                name: 'input',
                props: { type: 'text' },
              }"
            ></vxe-table-column>
          </vxe-table>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px" justify="end">
        <el-button plain type="danger" @click="clearDataEvent"
          >清空数据</el-button
        >
        <el-button plain type="primary" @click="exportDataEvent"
          >导出数据</el-button
        >
        <el-button plain type="primary" @click="importDataEvent"
          >导入数据</el-button
        >
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { briefReportExterior } from "../store/infoType";
export default {
  data() {
    return {
      briefReportExterior,
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

    clearDataEvent() {
      this.tableData = [];
    },
    exportDataEvent() {
      this.$refs.xTable.openExport({
        // 默认勾选源
        original: true,
      });
    },
    importDataEvent() {
      this.$refs.xTable.importData();
    },
  },
  created() {},
};
</script>

<style>
</style>