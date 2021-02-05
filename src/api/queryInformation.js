/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-14 10:25:17
 * @LastEditTime: 2021-02-03 15:16:44
 */
import axios from "@/utils/axio";

export function getNewestIndustryTrend() {
  return axios({
    url: "/Information/search/getNewestIndustryTrend",
    method: "get",
  }).then((res) => {
    return res._embedded.viewInformations;
  });
}

export function getNewestInfoExterior() {
  return axios({
    url: "/Information/search/getNewestInfoExterior",
    method: "get",
  }).then((res) => {
    return res._embedded.viewInformations;
  });
}

export function getNewestInfoInterior() {
  return axios({
    url: "/Information/search/getNewestInfoInterior",
    method: "get",
  }).then((res) => {
    return res._embedded.viewInformations;
  });
}

export function getTopicInformation(params) {
  return axios({
    url: "/Information/search/getTopicInformation",
    method: "get",
    params: params,
  }).then((res) => {
    return res._embedded.viewInformations;
  });
}

export function countInfoType(params) {
  return axios({
    url: "/Information/search/countInfoType",
    method: "get",
    params: params,
  }).then((res) => {
    return res;
  });
}

export function getNewestInfoByInfoType(params) {
  return axios({
    url: "/Information/search/getNewestInfoByInfoType",
    method: "get",
    params: params,
  }).then((res) => {
    return res._embedded.viewInformations;
  });
}

export function getInfoTypeCount() {
  return axios({
    url: "/manual/information/getInfoTypeCount",
    method: "get",
  });
}

export function getTopicCategoryCount() {
  return axios({
    url: "/manual/information/getTopicCategoryCount",
    method: "get",
  });
}
export function getProfessionFieldCount() {
  return axios({
    url: "/manual/information/getProfessionFieldCount",
    method: "get",
  });
}

export function getYearCount() {
  return axios({
    url: "/manual/information/getYearCount",
    method: "get",
  });
}

export function searchInformation(data) {
  return axios({
    url: "/manual/information/searchInformation",
    method: "post",
    data,
  });
}
