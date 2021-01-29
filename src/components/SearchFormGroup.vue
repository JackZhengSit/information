<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-27 15:55:12
 * @LastEditTime: 2021-01-28 13:27:32
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
    <el-input v-model="searchInput" placeholder="请输入内容"></el-input>
    <el-button type="primary" icon="search">搜索</el-button>
  </div>
</template>



<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      searchTypes: [
        { value: "全部" },
        { value: "标题" },
        { value: "作者" },
        { value: "关键词" },
      ],
    };
  },
  computed: {
    // ...mapState(["searchType", "searchInput"]),
    // ...mapMutations(["setSearchType", "setSearchInput"]),
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
};
</script>

<style scoped>
.group {
  display: flex;
  justify-content: start;
}
</style>
