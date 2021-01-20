/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-14 10:25:17
 * @LastEditTime: 2021-01-19 14:29:38
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
