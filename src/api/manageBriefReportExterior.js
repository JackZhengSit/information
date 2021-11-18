/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 14:55:55
 * @LastEditTime: 2020-12-28 15:11:51
 */
import axios from "@/utils/axio";

export function getBriefReportExterior(params) {
  return axios({
    url: "/BriefReportExterior",
    method: "get",
    params: params
  }).then(res => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.briefReportExteriors
    });
  });
}

export function searchBriefReportExterior(params) {
  return axios({
    url: "/BriefReportExterior/search/manageSearch",
    method: "get",
    params
  }).then(res => {
    return {
      page: {
        total: res.page.totalElements
      },
      result: res._embedded.briefReportExteriors
    };
  });
}

export function confirmSaveBriefReportExterior(data) {
  return axios({
    url: "/manual/brief-report-exterior/save",
    method: "post",
    data: data
  }).then(res => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/brief-report-exterior/remove",
    method: "get",
    params: param
  }).then(res => {
    return res;
  });
}
