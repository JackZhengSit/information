/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 20:37:34
 * @LastEditTime: 2020-12-28 20:40:51
 */
import axios from "@/utils/axio";

export function getReportExterior(params) {
  return axios({
    url: "/ReportExterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.reportExteriors,
    });
  });
}

export function searchReportExterior(params) {
  return axios({
    url: "/ReportExterior/search/manageSearch",
    method: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.reportExteriors,
    };
  });
}

export function confirmSaveReportExterior(data) {
  return axios({
    url: "/manual/report-exterior/save",
    method: "post",
    data: data,
  }).then((res) => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/report-exterior/remove",
    method: "get",
    params: param,
  }).then((res) => {
    return res;
  });
}
