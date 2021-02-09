<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-27 15:55:12
 * @LastEditTime: 2021-02-08 09:25:10
-->
<template>
  <div class="group">
    <el-select v-model="searchType" placeholder="" style="width: 150px">
      <el-option
        v-for="item in searchTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-input
      v-model="searchInput"
      placeholder="请输入内容"
      @keyup.enter.native="handleSearch"
    ></el-input>
    <el-button type="primary" icon="search" @click="handleSearch"
      >搜索</el-button
    >
  </div>
</template>



<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      searchTypes: [
        { label: "全部", value: "all" },
        { label: "标题", value: "info_title" },
        { label: "作者", value: "info_author" },
        { label: "关键词", value: "keywords" },
      ],
    };
  },
  computed: {
    // ...mapState(["searchType", "searchInput"]),
    // ...mapMutations(["setSearchType", "setSearchInput"]),
    ...mapState("RouteModule", ["path"]),
    searchType: {
      get() {
        return this.$store.state.searchType;
      },
      set(value) {
        this.$store.commit("setSearchType", value);
      },
    },
    searchInput: {
      get() {
        return this.$store.state.searchInput;
      },
      set(value) {
        this.$store.commit("setSearchInput", value);
      },
    },
  },
  methods: {
    ...mapActions("search", ["search"]),
    handleSearch() {
      if (this.path != "/search") this.$router.push({ name: "Search" });
      else this.search();
    },
  },
};
</script>

<style scoped>
.group {
  display: flex;
  justify-content: start;
}
</style>
