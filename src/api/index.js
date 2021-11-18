/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-18 14:49:24
 * @LastEditTime: 2021-01-18 16:31:59
 */

import manageBriefReportInterior from "./manageBriefReportInterior";
import manageIndustryTrend from "./manageIndustryTrend";
import manageNotice from "./manageNotice";
import managePaperExterior from "./managePaperExterior";
import queryInformation from "./queryInformation";

let api = {
  manageBriefReportExterior: () => import("./manageBriefReportExterior"),
  manageBriefReportInterior,
  manageIndustryTrend,
  manageNotice,
  managePaperExterior,
  queryInformation: queryInformation
};

export default api;
