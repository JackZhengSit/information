/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-03 13:37:44
 * @LastEditTime: 2020-12-28 14:57:16
 */
import axios from "@/utils/axio";

export function getBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior",
    method: "get",
    params: params
  }).then(res => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.briefReportInteriors
    });
  });
}

export function searchBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior/search/manageSearch",
    method: "get",
    params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.briefReportInteriors
    };
  });
}

export function confirmSaveBriefReportInterior(data) {
  return axios({
    url: "/manual/brief-report-interior/save",
    method: "post",
    data: data
  }).then(res => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/brief-report-interior/remove",
    method: "get",
    params: param
  }).then(res => {
    return res;
  });
}
