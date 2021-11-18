<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-20 15:17:31
 * @LastEditTime: 2021-07-07 09:56:40
-->
<template>
  <div>
    <el-row style="margin: 0px 10px 20px 10px">
      <el-col :span="10" :offset="7">
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
      <el-col :span="18" :offset="3">
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
            width="160"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="馆藏地"
            prop="storeSite"
            width="210"
          ></el-table-column>

          <!-- <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="出版时间"
            prop="publicationDate"
            width="110"
          ></el-table-column> -->
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="登记时间"
            prop="checkInTime"
            width="110"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="出版社/主办方"
            prop="publication"
            width="160"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            header-align="center"
            align="center"
            label="类别"
            prop="type"
            width="110"
          ></el-table-column>
        </el-table>
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
  </div>
</template>

<script>
import { searchBook } from "@/api/manageInfoLibrary";
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
        { label: "馆藏地", value: "storeSite" }
      ],
      bookSelect: "name",
      bookSearchInput: "",

      books: [],
      bookPageCur: 0,
      bookPageSize: 20,
      bookPageTotal: 0
    };
  },
  methods: {
    searchBook() {
      searchBook({
        cur: this.bookPageCur,
        size: this.bookPageSize,
        option: this.bookSelect,
        text: this.bookSearchInput
      }).then(res => {
        this.books = res.records;
        this.bookPageTotal = res.total;
      });
    }
  },

  created() {
    this.searchBook();
  }
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
</style>
