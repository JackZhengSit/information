/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-28 20:33:50
 * @LastEditTime: 2020-12-28 20:35:39
 */
import axios from "@/utils/axio";

export function getPaperExterior(params) {
  return axios({
    url: "/PaperExterior",
    method: "get",
    params: params,
  }).then((res) => {
    return Promise.resolve({
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.paperExteriors,
    });
  });
}

export function searchPaperExterior(params) {
  return axios({
    url: "/PaperExterior/search/manageSearch",
    method: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.paperExteriors,
    };
  });
}

export function confirmSavePaperExterior(data) {
  return axios({
    url: "/manual/paper-exterior/save",
    method: "post",
    data: data,
  }).then((res) => {
    // console.log(res);
    return res;
  });
}

export function removeRemoteFileById(param) {
  return axios({
    url: "/manual/paper-exterior/remove",
    method: "get",
    params: param,
  }).then((res) => {
    return res;
  });
}
