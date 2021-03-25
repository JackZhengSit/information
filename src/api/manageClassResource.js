/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-03-25 09:37:24
 * @LastEditTime: 2021-03-25 14:00:15
 */
import axios from "@/utils/axio";

export function insertClassResource(data) {
  return axios({
    url: "/InfoClassResource",
    method: "post",
    data,
  });
}

export function updateClassResource(params, data) {
  return axios({
    url: "/InfoClassResource/" + params.id,
    method: "patch",
    data,
  });
}

export function deleteClassResource(params) {
  return axios({
    url: "/InfoClassResource/" + params.id,
    method: "delete",
  });
}

export function getClassResource(params) {
  return axios({
    url: "/InfoClassResource",
    method: "get",
    params: params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.infoClassResources,
    };
  });
}

export function manageSearch(params) {
  return axios({
    url: "/InfoClassResource/search/manageSearch",
    method: "get",
    params: params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.infoClassResources,
    };
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/info-class-resource/remove",
    method: "get",
    params: param,
  }).then((res) => {
    return res;
  });
}
