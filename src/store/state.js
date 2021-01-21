/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2021-01-20 10:16:29
 * @LastEditTime: 2021-01-21 16:12:45
 */
const state = () => ({
  activeIndex: "",

  infoTypeMap: new Map([
    ["industryTrend", "行业动态"],
    ["briefReportExterior", "外部简报"],
    ["briefReportInterior", "情报内部简报"],
    ["paperExterior", "外部论文著作"],
    ["patentExterior", "外部专利"],
    ["reportExterior", "外部行业报告"],
    ["reportInterior", "情报内部报告"],
    ["standardExterior", "外部标准"],
  ]),
});

export default state;
