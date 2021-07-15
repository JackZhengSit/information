<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-20 15:17:57
 * @LastEditTime: 2021-07-15 10:21:57
-->
<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="7">
        <div class="searchGroup">
          <el-select v-model="journalSelect" placeholder="">
            <el-option
              v-for="item in journalSelectList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="journalSearchInput" placeholder=""></el-input>
          <el-button type="primary" @click="searchJournal">搜索</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row style="margin: 20px 0 0 0">
      <el-col :span="17" :offset="0">
        <div style="display: flex; justify-content: flex-end">
          <el-radio-group
            v-model="journalSort"
            @change="sortChange"
            style="margin: 10px 10px 0 10px"
          >
            <el-radio label="publication_date">出版日排序</el-radio>
            <el-radio label="title">按名称排序</el-radio> </el-radio-group
          >|
          <el-radio-group
            v-model="journalDisplayType"
            @change="displayChange"
            style="margin: 10px 10px 0 10px"
          >
            <el-radio label="image">按图片显示</el-radio>
            <el-radio label="list">按列表显示</el-radio>
          </el-radio-group>
        </div>
      </el-col>
      <el-col :span="2" :offset="0">
        <el-select
          size="small"
          v-model="journalType"
          placeholder=""
          style="width: 270px"
          @change="selectedTypeChange"
        >
          <el-option
            v-for="item in journalTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-table :data="journals" v-if="journalDisplayType == 'list'">
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="期刊名称"
            prop="name"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="出版社/主办方"
            prop="publication"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="出版时间"
            prop="publicationDate"
            width="150"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="登记时间"
            prop="checkInTime"
            width="150"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="类别"
            prop="type"
            width="150"
          ></el-table-column>
          <el-table-column
            label="下载"
            header-align="center"
            align="center"
            width="80"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                plain
                @click="downloadJournal(scope.$index, scope.row)"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <div class="imgBox" v-if="journalDisplayType == 'image'">
          <div
            v-for="item in journals"
            :key="item.id"
            style="width: 152px; margin: 10px"
          >
            <el-card
              shadow="hover"
              :body-style="{ padding: '0px' }"
              style="height: 220px"
              ><el-image
                :src="baseUrl + '/static/file/info-library/pic/' + item.imgPath"
                fit="fill"
                style="width: 150px; height: 220px; cursor: pointer"
                @click="downloadJournal(item.id, item)"
              ></el-image>
            </el-card>
            <div>
              <span
                style="cursor: pointer; font-size: 12px; color: #409eff"
                @click="downloadJournal(item.id, item)"
                >{{ item.name }}</span
              >
            </div>
          </div>
        </div>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="searchJournal"
            :total="journalPageTotal"
            :current-page.sync="journalPageCur"
            :page-size="journalPageSize"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { searchJournal } from "@/api/manageInfoLibrary";
import baseUrl from "@/config/baseUrl";
import { Message, MessageBox } from "element-ui";

export default {
  data() {
    return {
      baseUrl,
      journalSelectList: [
        { label: "期刊名称", value: "title" },
        { label: "出版社", value: "publication" },
        { label: "出版时间", value: "publication_date" },
      ],
      journalSelect: "title",
      journalDisplayType: "image",
      journalSort: "publication_date",
      journalTypeList: [
        { label: "全部分类", value: "" },
        { label: "船舶工程", value: "船舶工程" },
        { label: "标准化工程师", value: "标准化工程师" },
        { label: "机电设备", value: "机电设备" },
        { label: "第一情报", value: "第一情报" },
        { label: "Marine Engineering Review", value: "Engineering" },
        { label: "The Naval ARCHITECT", value: "ARCHITECT" },
        { label: "Offshore Marine Technology", value: "Offshore" },
        { label: "Warship Technology", value: "Warship" },
        { label: "The Marine Professional", value: "Professional" },
      ],
      journalType: "",
      journalSearchInput: "",
      journals: [],
      journalPageCur: 0,
      journalPageSize: 24,
      journalPageTotal: 0,
    };
  },
  methods: {
    searchJournal() {
      searchJournal({
        cur: this.journalPageCur,
        size: this.journalPageSize,
        option: this.journalSelect,
        text: this.journalSearchInput,
        sort: this.journalSort,
        type: this.journalType,
      }).then((res) => {
        this.journals = res.records;
        this.journalPageTotal = res.total;
      });
    },
    downloadJournal(id, row) {
      if (row.filePath != null && row.filePath != "")
        window.open(baseUrl + "/static/file/info-library/" + row.filePath);
      else
        Message({
          message: "文件不存在！",
          type: "error",
        });
    },
    displayChange() {},
    sortChange() {
      searchJournal({
        cur: this.journalPageCur,
        size: this.journalPageSize,
        option: this.journalSelect,
        text: this.journalSearchInput,
        sort: this.journalSort,
        type: this.journalType,
      }).then((res) => {
        this.journals = res.records;
        this.journalPageTotal = res.total;
      });
    },
    selectedTypeChange() {
      searchJournal({
        cur: this.journalPageCur,
        size: this.journalPageSize,
        option: this.journalSelect,
        text: this.journalSearchInput,
        sort: this.journalSort,
        type: this.journalType,
      }).then((res) => {
        this.journals = res.records;
        this.journalPageTotal = res.total;
      });
    },
  },

  created() {
    this.searchJournal();
  },
};
</script>

<style scoped>
.searchGroup {
  display: flex;
  justify-content: start;
}
.page {
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: flex-end;
}
.imgBox {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.imgCell {
  width: 150px;
  height: 250px;
}
</style>