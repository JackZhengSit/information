/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-12-03 13:37:44
 * @LastEditTime: 2020-12-03 14:30:14
 */
import axios from "@/utils/axio";

export function getBriefReportInterior(params) {
  return axios({
    url: "/BriefReportInterior/",
    methd: "get",
    params: params,
  });
}
