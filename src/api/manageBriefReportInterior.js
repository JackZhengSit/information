/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-03 13:37:44
 * @LastEditTime: 2020-12-25 10:36:14
 */
import axios from "@/utils/axio";

export function getBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve(
      {
        page: {
          total: res.page.totalElements,
        },
        result: res._embedded.briefReportInteriors,
      }
      // res.page.totalElements,
      // res._embedded.briefReportInteriors
    );
  });
}

export function getBriefReportInterior1(params) {
  return axios({
    url: "/BriefReportInterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve(res._embedded.briefReportInteriors);
  });
}

export function searchBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior/search/manageSearch",
    method: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.briefReportInteriors,
    };
  });
}

export function confirmSaveBriefReportInterior(data) {
  return axios({
    url: "/manual/brief-report-interior/save",
    method: "post",
    data: data,
  }).then((res) => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/brief-report-interior/remove",
    method: "get",
    params: param,
  });
}

export function postBriefReportInterior(data) {
  return axios({
    url: "/BriefReportInterior",
    method: "post",
    data: data,
  });
}

export function putBriefReportInterior(params, data) {
  return axios({
    url: "/BriefReportInterior",
    method: "put",
    params: params,
    data: data,
  });
}

export function patchBriefReportInterior(params, data) {
  return axios({
    url: "/BriefReportInterior",
    method: "patch",
    params: params,
    data: data,
  });
}

export function deleteBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior",
    method: "delete",
    params,
  });
}
