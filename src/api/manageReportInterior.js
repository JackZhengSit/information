/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 20:37:55
 * @LastEditTime: 2020-12-28 20:41:49
 */
import axios from "@/utils/axio";

export function getReportInterior(params) {
  return axios({
    url: "/ReportInterior",
    method: "get",
    params: params
  }).then(res => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.reportInteriors
    });
  });
}

export function searchReportInterior(params) {
  return axios({
    url: "/ReportInterior/search/manageSearch",
    method: "get",
    params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.reportInteriors
    };
  });
}

export function confirmSaveReportInterior(data) {
  return axios({
    url: "/manual/report-interior/save",
    method: "post",
    data: data
  }).then(res => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/report-interior/remove",
    method: "get",
    params: param
  }).then(res => {
    return res;
  });
}
