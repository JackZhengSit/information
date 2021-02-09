/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-02-05 13:34:46
 * @LastEditTime: 2021-02-08 16:18:44
 */
import {
  getInfoTypeCount,
  getTopicCategoryCount,
  getProfessionFieldCount,
  getYearCount,
  searchInformation,
} from "@/api/queryInformation";

const state = () => ({
  infoTypeAndCount: [],
  checkedInfoType: [],
  topicCategoryAndCount: [],
  checkedTopicCategory: [],
  professionFieldAndCount: [],
  checkedProfessionField: [],
  yearAndCount: [],
  checkedYear: [],

  resultList: [],

  total: 0,
  pageSize: 10,
  currentPage: 1,
  pageCount: 0,
});

const mutations = {
  setInfoTypeAndCount(state, infoTypeAndCount) {
    state.infoTypeAndCount = infoTypeAndCount;
  },
  setCheckedInfoType(state, checkedInfoType) {
    state.checkedInfoType = checkedInfoType;
  },
  setTopicCategoryAndCount(state, topicCategoryAndCount) {
    state.topicCategoryAndCount = topicCategoryAndCount;
  },
  setCheckedTopicCategory(state, checkedTopicCategory) {
    state.checkedTopicCategory = checkedTopicCategory;
  },
  setProfessionFieldAndCount(state, professionFieldAndCount) {
    state.professionFieldAndCount = professionFieldAndCount;
  },
  setCheckedProfessionField(state, checkedProfessionField) {
    state.checkedProfessionField = checkedProfessionField;
  },
  setYearAndCount(state, yearAndCount) {
    state.yearAndCount = yearAndCount;
  },
  setCheckedYear(state, checkedYear) {
    state.checkedYear = checkedYear;
  },
  setResultList(state, resultList) {
    state.resultList = resultList;
  },
  setTotal(state, total) {
    state.total = total;
  },
  setPageSize(state, pageSize) {
    state.pageSize = pageSize;
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage;
  },
  setPageCount(state, pageCount) {
    state.pageCount = pageCount;
  },
};

const actions = {
  getCheckbox({ commit }) {
    let p1 = getInfoTypeCount().then((res) => {
      commit("setInfoTypeAndCount", res);
      commit(
        "setCheckedInfoType",
        res.map((item) => item.infoType)
      );
    });
    let p2 = getTopicCategoryCount().then((res) => {
      commit("setTopicCategoryAndCount", res);
      commit(
        "setCheckedTopicCategory",
        res.map((item) => item.topicCategory)
      );
    });
    let p3 = getProfessionFieldCount().then((res) => {
      commit("setProfessionFieldAndCount", res);
      commit(
        "setCheckedProfessionField",
        res.map((item) => item.professionField)
      );
    });
    let p4 = getYearCount().then((res) => {
      commit("setYearAndCount", res);
      commit(
        "setCheckedYear",
        res.map((item) => item.year)
      );
    });
    return Promise.all([p1, p2, p3, p4]);
  },
  search({ commit, state, rootState }) {
    searchInformation({
      searchInput: rootState.searchInput,
      searchType: rootState.searchType,
      current: state.currentPage,
      size: state.pageSize,
      infoType: state.checkedInfoType
        .map((item) => "'" + item + "'")
        .toString(),
      topicCategory: state.checkedTopicCategory
        .map((item) => "'" + item + "'")
        .toString(),
      professionField: state.checkedProfessionField
        .map((item) => "'" + item + "'")
        .toString(),
      year: state.checkedYear.map((item) => "'" + item + "'").toString(),
    }).then((res) => {
      commit("setResultList", res.records);
      commit("setTotal", res.total);
      commit("setCurrentPage", res.current);
      commit("setPageCount", res.pages);
      return Promise.resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
