<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-24 10:00:33
 * @LastEditTime: 2020-11-30 13:45:51
-->
<template>
  <div>
    <!-- <vxe-form
      :data="formData"
      title-align="center"
      title-width
      @submit="search"
      @reset="reset"
    >
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.orderNum"
        span="8"
        :item-render="{ name: 'orderNum' }"
      ></vxe-form-item>
      <vxe-form-item
        field="name"
        :title="briefReportExterior.name"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="type"
        :title="briefReportExterior.type"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="completeDepartment"
        :title="briefReportExterior.completeDepartment"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="title"
        :title="briefReportExterior.title"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.industryType"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.industryDetailType"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.industryChainType"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.referDeviceType"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.referDevice"
        span="8"
      ></vxe-form-item>
      <vxe-form-item
        field="orderNum"
        :title="briefReportExterior.referProduct"
        span="8"
      ></vxe-form-item>
    </vxe-form> -->
    <el-form :model="formData" ref="form" label-width="130px">
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.orderNum">
            <el-input v-model="formData.orderNum" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.name">
            <el-input v-model="formData.name" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.type">
            <el-input v-model="formData.type" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.completeDepartment">
            <el-input
              v-model="formData.completeDepartment"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.title">
            <el-input v-model="formData.title" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.industryType">
            <el-input v-model="formData.industryType" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.industryDetailType">
            <el-input
              v-model="formData.industryDetailType"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.industryChainType">
            <el-input
              v-model="formData.industryChainType"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label-width="180px"
            :label="briefReportExterior.referDeviceType"
          >
            <el-input
              v-model="formData.referDeviceType"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referDevice">
            <el-input v-model="formData.referDevice" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referProduct">
            <el-input v-model="formData.referProduct" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referProject">
            <el-input v-model="formData.referProject" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referInstitution">
            <el-input
              v-model="formData.referInstitution"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referTechnology">
            <el-input
              v-model="formData.referTechnology"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referCategory">
            <el-input
              v-model="formData.referCategory"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.department">
            <el-input v-model="formData.department" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.researchField">
            <el-input
              v-model="formData.researchField"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.researchOrientation">
            <el-input
              v-model="formData.researchOrientation"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.researchSystem">
            <el-input
              v-model="formData.researchSystem"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.techFieldType1">
            <el-input
              v-model="formData.techFieldType1"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.techFieldType2">
            <el-input
              v-model="formData.techFieldType2"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.techFieldType3">
            <el-input
              v-model="formData.techFieldType3"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.industryField">
            <el-input
              v-model="formData.industryField"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.industryOrientation">
            <el-input
              v-model="formData.industryOrientation"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.publishDepartment">
            <el-input
              v-model="formData.publishDepartment"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.informationCollactor">
            <el-input
              v-model="formData.informationCollactor"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.knowledgeType">
            <el-input
              v-model="formData.knowledgeType"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.securityLevel">
            <el-input
              v-model="formData.securityLevel"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.abs">
            <el-input v-model="formData.abs" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.informationAuditor">
            <el-input
              v-model="formData.informationAuditor"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.language">
            <el-input v-model="formData.language" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.keywords">
            <el-input v-model="formData.keywords" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.informationOrigin">
            <el-input
              v-model="formData.informationOrigin"
              placeholder=""
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item :label="briefReportExterior.referWebsite">
            <el-input v-model="formData.language" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item :label="briefReportExterior.formatTime">
            <el-col :span="8">
              <el-date-picker
                type="date"
                v-model="formData.formatTimeStart"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line-center" :span="1"> — </el-col>
            <el-col :span="8">
              <el-date-picker
                type="date"
                v-model="formData.formatTimeend"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item :label="briefReportExterior.checkInTime">
            <el-col :span="8">
              <el-date-picker
                type="date"
                v-model="formData.checkInTimeStart"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line-center" :span="1"> — </el-col>
            <el-col :span="8">
              <el-date-picker
                type="date"
                v-model="formData.checkInTimeEnd"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="">
        <el-button type="primary" @click="searchEvent">搜索</el-button>
        <el-button type="">重置</el-button>
      </el-form-item>
    </el-form>

    <vxe-toolbar export custom>
      <template v-slot:buttons>
        <el-button plain type="primary" @click="insertEvent">新增</el-button>
        <el-button plain type="danger" @click="deleteEvent">删除</el-button>
        <el-button type="primary" @click="saveEvent">保存</el-button>
        <el-button plain type="primary" @click="$refs.xGrid.zoom()"
          >缩放</el-button
        >
      </template>
    </vxe-toolbar>
    <vxe-table
      align="center"
      border
      highlight-hover-row
      ref="xTable"
      max-height="600"
      :export-config="{ isPrint: false }"
      :edit-config="{ trigger: 'dblclick', mode: 'cell' }"
      :data="tableData"
    >
      <vxe-table-column
        type="checkbox"
        width="60"
        fixed="left"
      ></vxe-table-column>
      <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
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
  </div>
</template>

<script>
import { briefReportExterior } from "../store/infoType";
export default {
  data() {
    return {
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
      briefReportExterior,
      formData: {
        orderNum: "序号",
        name: "简报名称",
        type: "简报类型",
        completeDepartment: "完成作者单位",
        title: "题名",

        /** 行业类别 */
        industryType: "行业类别",

        /** 行业细分 */
        industryDetailType: "行业细分",

        /** 产业链类型 */
        industryChainType: "产业链类型",

        /** 涉及装备/平台具体类型 */
        referDeviceType: "涉及装备/平台具体类型",

        /** 涉及装备名称 */
        referDevice: "涉及装备名称",

        /** 涉及具体产品名称 */
        referProduct: "涉及具体产品名称",

        /** 涉及项目名称 */
        referProject: "涉及项目名称",

        /** 涉及机构名称 */
        referInstitution: "涉及机构名称",

        /** 涉及技术 */
        referTechnology: "涉及技术",

        /** 所属类别 */
        referCategory: "所属类别",

        /** 部门类别 */
        department: "部门类别",

        /** 业务板块 */
        researchField: "业务板块",

        /** 业务方向 */
        researchOrientation: "业务方向",

        /** 系统 */
        researchSystem: "系统",

        /** 技术领域一级分类 */
        techFieldType1: "技术领域一级分类",

        /** 技术领域二级分类 */
        techFieldType2: "技术领域二级分类",

        /** 技术领域二级分类 */
        techFieldType3: "技术领域三级分类",

        /** 产业领域 */
        industryField: "产业领域",

        /** 产业方向 */
        industryOrientation: "产业方向",

        /** 知识发布部门 */
        publishDepartment: "知识发布部门",

        /** 登记时间 */
        checkInTimeStart: "登记时间",
        checkInTimeEnd: "登记时间",

        /** 知识类型 */
        knowledgeType: "知识类型",

        /** 密级 */
        securityLevel: "密级",

        /** 摘要 */

        abs: "摘要",

        /** 形成时间 */
        formatTimeStart: "形成时间",
        formatTimeEnd: "形成时间",

        /** 知识收集人 */
        informationCollactor: "知识收集人",

        /** 知识审核人 */
        informationAuditor: "知识审核人",

        /** 语种 */
        language: "语种",

        /** 关键词 */
        keywords: "关键词",

        /** 信息来源 */
        informationOrigin: "信息来源",

        /** 参考网址 */
        referWebsite: "参考网址",
      },
    };
  },
  methods: {
    searchEvent() {},
    resetEvent() {},
    insertEvent() {},
    deleteEvent() {},
    saveEvent() {},
  },
};
</script>

<style>
.line-center {
  text-align: center;
}
</style>