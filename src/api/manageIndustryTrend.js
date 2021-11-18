/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 16:09:14
 * @LastEditTime: 2021-01-13 14:13:00
 */
import axios from "@/utils/axio";

export function getIndustryTrend(params) {
  return axios({
    url: "/IndustryTrend",
    method: "get",
    params: params
  }).then(res => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.industryTrends
    });
  });
}

export function searchIndustryTrend(params) {
  return axios({
    url: "/IndustryTrend/search/manageSearch",
    method: "get",
    params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.industryTrends
    };
  });
}

export function confirmSaveIndustryTrend(data) {
  return axios({
    url: "/manual/industry-trend/save",
    method: "post",
    data: data
  }).then(res => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/industry-trend/remove",
    method: "get",
    params: param
  }).then(res => {
    return res;
  });
}
