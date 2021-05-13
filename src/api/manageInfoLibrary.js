/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-05-07 11:01:27
 * @LastEditTime: 2021-05-10 10:56:06
 */
import axios from "@/utils/axio";

export function confirmSaveInfoLibrary(data) {
  return axios({
    url: "/manual/info-library/save",
    data: data,
    method: "post",
  }).then((res) => {
    return res;
  });
}

export function searchInfoLibrary(params) {
  return axios({
    url: "/InfoLibrary/search/manageSearch",
    mehtod: "get",
    params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.infoLibraries,
    };
  });
}

export function removeRemoteFileById(params) {
  return axios({
    url: "/manual/info-library/removeFile",
    method: "get",
    params,
  }).then((res) => {
    return res;
  });
}

export function removeRemoteImgById(params) {
  return axios({
    url: "/manual/info-library/removeImg",
    method: "get",
    params,
  }).then((res) => {
    return res;
  });
}

export function searchBook(params) {
  return axios({
    url: "/manual/info-library/searchBook",
    method: "get",
    params,
  }).then((res) => {
    return res;
  });
}

export function searchJournal(params) {
  return axios({
    url: "/manual/info-library/searchJournal",
    method: "get",
    params,
  }).then((res) => {
    return res;
  });
}
