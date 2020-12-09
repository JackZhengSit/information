/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-03 13:37:44
 * @LastEditTime: 2020-12-08 16:14:57
 */
import axios from "@/utils/axio";

export function getBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior",
    methd: "get",
    params: params,
  });
}

export function searchBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior/search/",
    methd: "get",
    params,
  });
}

export function postBriefReportInterior(data) {
  return axios({
    url: "/BriefReportInterior",
    methd: "post",
    data: data,
  });
}

export function putBriefReportInterior(params, data) {
  return axios({
    url: "/BriefReportInterior",
    methd: "put",
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
