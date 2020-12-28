/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 20:38:17
 * @LastEditTime: 2020-12-28 20:42:40
 */
import axios from "@/utils/axio";

export function getStandardExterior(params) {
  return axios({
    url: "/StandardExterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.standardExteriors,
    });
  });
}

export function searchStandardExterior(params) {
  return axios({
    url: "/StandardExterior/search/manageSearch",
    method: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.standardExteriors,
    };
  });
}

export function confirmSaveStandardExterior(data) {
  return axios({
    url: "/manual/standard-exterior/save",
    method: "post",
    data: data,
  }).then((res) => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/standard-exterior/remove",
    method: "get",
    params: param,
  }).then((res) => {
    return res;
  });
}
