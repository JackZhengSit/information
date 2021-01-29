/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-13 16:44:19
 * @LastEditTime: 2021-01-29 09:31:36
 */
import axios from "@/utils/axio";

export function getNewestNotice() {
  return axios({
    url: "/Notice/search/getNewestNotice",
    method: "get",
  }).then((res) => {
    return res._embedded.notices;
  });
}

export function searchNotice(params) {
  return axios({
    url: "/Notice/search/manageSearch",
    method: "get",
    params: params,
  }).then((res) => {
    return {
      page: {
        total: res.page.totalElements,
      },
      result: res._embedded.notices,
    };
  });
}

export function insertNotice(data) {
  return axios({
    url: "/Notice",
    method: "post",
    data: data,
  });
}

export function deleteNotice(params, data) {
  return axios({
    url: "/Notice/" + params.id,
    method: "delete",
    data,
  });
}

export function updateNotice(params, data) {
  return axios({
    url: "/Notice/" + params.id,
    method: "patch",
    data,
  });
}
