/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 20:37:10
 * @LastEditTime: 2020-12-28 20:39:51
 */
import axios from "@/utils/axio";

export function getPatentExterior(params) {
  return axios({
    url: "/PatentExterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.patentExteriors,
    });
  });
}

export function searchPatentExterior(params) {
  return axios({
    url: "/PatentExterior/search/manageSearch",
    method: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.patentExteriors,
    };
  });
}

export function confirmSavePatentExterior(data) {
  return axios({
    url: "/patent-exterior/save",
    method: "post",
    data: data,
  }).then((res) => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/patent-exterior/remove",
    method: "get",
    params: param,
  }).then((res) => {
    return res;
  });
}
