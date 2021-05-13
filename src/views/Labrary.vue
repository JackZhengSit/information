<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-06 08:49:51
 * @LastEditTime: 2021-05-12 09:39:31
-->
<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-tabs tab-position="left">
          <el-tab-pane label="馆藏图书">
            <el-row>
              <el-col :span="12" :offset="6">
                <div class="searchGroup">
                  <el-select v-model="bookSelect" placeholder="">
                    <el-option
                      v-for="item in bookSelectList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-input v-model="bookSearchInput" placeholder=""></el-input>
                  <el-button type="primary" @click="searchBook">搜索</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-table :data="books">
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="书名"
                    prop="name"
                  ></el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="作者"
                    prop="author"
                    width="150"
                  ></el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="馆藏地"
                    prop="storeSite"
                    width="200"
                  ></el-table-column>

                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="出版时间"
                    prop="publicationDate"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="登记时间"
                    prop="publicationDate"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="出版社/主办方"
                    prop="publication"
                    width="150"
                  ></el-table-column>
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="类别"
                    prop="type"
                    width="100"
                  ></el-table-column>
                </el-table>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="page">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="searchBook"
                    :total="bookPageTotal"
                    :current-page.sync="bookPageCur"
                    :page-size="bookPageSize"
                  ></el-pagination>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="所内期刊">
            <el-row>
              <el-col :span="12" :offset="6">
                <div class="searchGroup">
                  <el-select v-model="journalSelect" placeholder="">
                    <el-option
                      v-for="item in journalSelectList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  <el-input
                    v-model="journalSearchInput"
                    placeholder=""
                  ></el-input>
                  <el-button type="primary" @click="searchJournal"
                    >搜索</el-button
                  >
                </div>
              </el-col>
            </el-row>
            <el-row style="margin: 20px 0">
              <el-col :span="7" :offset="13">
                <el-radio-group
                  v-model="journalDisplayType"
                  @change="displayChange"
                >
                  <el-radio label="image" border>按图片显示</el-radio>
                  <el-radio label="list" border>按列表显示</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row style="margin: 20px 0">
              <el-col :span="6" :offset="6">
                期刊分类：
                <el-select
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
              <el-col :span="7" :offset="1">
                <el-radio-group v-model="journalSort" @change="sortChange">
                  <el-radio label="publication_date" border
                    >出版日排序</el-radio
                  >
                  <el-radio label="title" border>按名称排序</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-table :data="journals" v-if="journalDisplayType == 'list'">
                  <el-table-column
                    show-overflow-tooltip
                    header-align="center"
                    align="center"
                    label="期刊名称"
                    prop="title"
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
                    prop="publicationDate"
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
                  <el-card
                    v-for="item in journals"
                    :key="item.id"
                    shadow="hover"
                    :body-style="{ padding: '0px' }"
                    style="width: 150px; height: 250px; margin: 10px"
                    ><el-image
                      :src="
                        baseUrl +
                        '/static/file/info-library/pic/' +
                        item.imgPath
                      "
                      fit="fill"
                      style="width: 150px; height: 220px"
                    ></el-image>
                    <div>
                      <span>{{ item.title }}</span>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
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
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { searchBook } from "@/api/manageInfoLibrary";
import { searchJournal } from "@/api/manageInfoLibrary";
import baseUrl from "@/config/baseUrl";
import { Message, MessageBox } from "element-ui";

export default {
  data() {
    return {
      baseUrl,
      bookSelectList: [
        { label: "书名", value: "name" },
        { label: "作者", value: "author" },
        { label: "出版时间", value: "publication_date" },
        { label: "馆藏地", value: "storeSite" },
      ],
      bookSelect: "name",
      bookSearchInput: "",

      books: [],
      bookPageCur: 0,
      bookPageSize: 10,
      bookPageTotal: 0,

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
      journalPageSize: 16,
      journalPageTotal: 0,
    };
  },
  methods: {
    searchBook() {
      searchBook({
        cur: this.bookPageCur,
        size: this.bookPageSize,
        option: this.bookSelect,
        text: this.bookSearchInput,
      }).then((res) => {
        this.books = res.records;
        this.bookPageTotal = res.total;
      });
    },

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
    this.searchBook();
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