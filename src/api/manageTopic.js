/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-14 09:20:28
 * @LastEditTime: 2021-01-14 09:23:02
 */
import axios from "@/utils/axio";

export function getAllTopic() {
  return axios({
    url: "/",
    method: "get"
  }).then(res => {
    return res._embeded.topics;
  });
}
