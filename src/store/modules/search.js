/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-02-05 13:34:46
 * @LastEditTime: 2021-06-23 13:46:18
 */
import {
  getInfoTypeCount,
  getTopicCategoryCount,
  getProfessionFieldCount,
  getYearCount,
  getProductCount,
  searchInformation
} from "@/api/queryInformation";
import { time } from "_echarts@5.2.2@echarts";

const state = () => ({
  activeNames: ["infoType"],

  infoTypeAndCount: [],
  checkedInfoType: [],
  topicCategoryAndCount: [],
  checkedTopicCategory: [],
  professionFieldAndCount: [],
  checkedProfessionField: [],
  productNameAndCount: [],
  checkedProductName: [],
  yearAndCount: [],
  checkedYear: [],

  resultList: [],

  total: 0,
  pageSize: 10,
  currentPage: 1,
  pageCount: 0
});

const mutations = {
  setActiveNames(state, activeNames) {
    state.activeNames = activeNames;
  },

  setInfoTypeAndCount(state, infoTypeAndCount) {
    state.infoTypeAndCount = infoTypeAndCount;
  },
  setCheckedInfoType(state, checkedInfoType) {
    state.checkedInfoType = checkedInfoType;
  },
  setTopicCategoryAndCount(state, topicCategoryAndCount) {
    //把其他放在最后
    let otherIdx;
    for (let i = 0; i < topicCategoryAndCount.length; i++) {
      if (topicCategoryAndCount[i].topicCategory == "其它") {
        otherIdx = i;
        break;
      }
    }
    if (otherIdx != -1)
      for (let i = otherIdx; i < topicCategoryAndCount.length - 1; i++) {
        let temp = topicCategoryAndCount[i + 1];
        topicCategoryAndCount[i + 1] = topicCategoryAndCount[i];
        topicCategoryAndCount[i] = temp;
      }
    state.topicCategoryAndCount = topicCategoryAndCount;
  },
  setCheckedTopicCategory(state, checkedTopicCategory) {
    state.checkedTopicCategory = checkedTopicCategory;
  },
  setProfessionFieldAndCount(state, professionFieldAndCount) {
    //把其他放在最后
    let otherIdx;
    for (let i = 0; i < professionFieldAndCount.length; i++) {
      if (professionFieldAndCount[i].professionField == "其它") {
        otherIdx = i;
        break;
      }
    }
    if (otherIdx != -1)
      for (let i = otherIdx; i < professionFieldAndCount.length - 1; i++) {
        let temp = professionFieldAndCount[i + 1];
        professionFieldAndCount[i + 1] = professionFieldAndCount[i];
        professionFieldAndCount[i] = temp;
      }
    state.professionFieldAndCount = professionFieldAndCount;
  },
  setCheckedProfessionField(state, checkedProfessionField) {
    state.checkedProfessionField = checkedProfessionField;
  },
  setProductName(state, productCount) {
    state.productNameAndCount = productCount;
  },
  setCheckedProductName(state, checkedProductname) {
    state.checkedProductName = checkedProductname;
  },
  setYearAndCount(state, yearAndCount) {
    //把其他放在最后
    let otherIdx;
    for (let i = 0; i < yearAndCount.length; i++) {
      if (yearAndCount[i].year == "其它") {
        otherIdx = i;
        break;
      }
    }
    if (otherIdx != -1)
      for (let i = otherIdx; i < yearAndCount.length - 1; i++) {
        let temp = yearAndCount[i + 1];
        yearAndCount[i + 1] = yearAndCount[i];
        yearAndCount[i] = temp;
      }

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
  }
};

const actions = {
  getCheckbox({ commit }) {
    let p1 = getInfoTypeCount().then(res => {
      commit("setInfoTypeAndCount", res);
      commit(
        "setCheckedInfoType",
        res.map(item => item.infoType)
      );
    });
    let p2 = getTopicCategoryCount().then(res => {
      commit("setTopicCategoryAndCount", res);
      commit(
        "setCheckedTopicCategory",
        res.map(item => item.topicCategory)
      );
    });
    let p3 = getProfessionFieldCount().then(res => {
      commit("setProfessionFieldAndCount", res);
      commit(
        "setCheckedProfessionField",
        res.map(item => item.professionField)
      );
    });
    let p4 = getYearCount().then(res => {
      commit("setYearAndCount", res);
      commit(
        "setCheckedYear",
        res.map(item => item.year)
      );
    });
    let p5 = getProductCount().then(res => {
      commit("setProductName", res);
      commit(
        "setCheckedProductName",
        res.map(item => item.productName)
      );
    });
    return Promise.all([p1, p2, p3, p4, p5]);
  },
  search({ commit, state, rootState }) {
    searchInformation({
      searchInput: rootState.searchInput,
      searchType: rootState.searchType,
      current: state.currentPage,
      size: state.pageSize,
      infoType: state.checkedInfoType.map(item => "'" + item + "'").toString(),
      topicCategory: state.checkedTopicCategory
        .map(item => "'" + item + "'")
        .toString(),
      professionField: state.checkedProfessionField
        .map(item => "'" + item + "'")
        .toString(),
      productName: state.checkedProductName,
      year: state.checkedYear.map(item => "'" + item + "'").toString()
    }).then(res => {
      commit("setResultList", res.records);
      commit("setTotal", res.total);
      commit("setCurrentPage", res.current);
      commit("setPageCount", res.pages);
      return Promise.resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
