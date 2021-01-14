/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-13 16:44:19
 * @LastEditTime: 2021-01-13 16:52:12
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
