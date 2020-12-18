/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-23 10:23:20
 * @LastEditTime: 2020-12-18 08:36:15
 */
var infoType = {
  industryTrend: "行业动态",
  briefReportExterior: "外部简报",
  briefReportInterior: "情报内部简报",
  paperExterior: "外部论文著作",
  patentExterior: "外部专利",
  reportExterior: "外部行业报告",
  reportInterior: "情报内部报告",
  standardExterior: "外部标准",
};

let infoBase = {
  id: {
    field: "id",
    title: "id",
  },
  orderNum: {
    field: "orderNum",
    title: "序号",
  },
  orderNumStart: {
    field: "orderNumStart",
    title: "开始序号",
  },
  orderNumEnd: {
    field: "orderNumEnd",
    title: "结束序号",
  },
  industryType: {
    field: "industryType",
    title: "行业类别",
  },
  industryDetailType: {
    field: "industryDetailType",
    title: "行业细分",
  },

  industryChainType: {
    field: "industryChainType",
    title: "产业链类型",
  },
  referDeviceType: {
    field: "referDeviceType",
    title: "涉及装备/平台具体类型",
  },

  referDevice: {
    field: "referDevice",
    title: "涉及装备名称",
  },
  referProduct: {
    field: "referProduct",
    title: "涉及具体产品名称",
  },
  referProject: {
    field: "referProject",
    title: "涉及项目名称",
  },
  referInstitution: {
    field: "referInstitution",
    title: "涉及机构名称",
  },
  referTechnology: {
    field: "referTechnology",
    title: "涉及技术",
  },
  referCategory: {
    field: "referCategory",
    title: "所属类别",
  },
  department: {
    field: "department",
    title: "部门类别",
  },
  researchField: {
    field: "researchField",
    title: "业务板块",
  },
  researchOrientation: {
    field: "researchOrientation",
    title: "业务方向",
  },
  researchSystem: {
    field: "researchSystem",
    title: "系统",
  },
  techFieldType1: {
    field: "techFieldType1",
    title: "技术领域一级分类",
  },
  techFieldType2: {
    field: "techFieldType2",
    title: "技术领域二级分类",
  },
  techFieldType3: {
    field: "techFieldType3",
    title: "技术领域三级分类",
  },
  industryField: {
    field: "industryField",
    title: "产业领域",
  },
  industryOrientation: {
    field: "industryOrientation",
    title: "产业方向",
  },
  publishDepartment: {
    field: "publishDepartment",
    title: "知识发布部门",
  },
  checkInTime: {
    field: "checkInTime",
    title: "登记时间",
  },
  checkInTimeStart: {
    field: "checkInTimeStart",
    title: "开始登记时间",
  },
  checkInTimeEnd: {
    field: "checkInTimeEnd",
    title: "结束登记时间",
  },
  knowledgeType: {
    field: "knowledgeType",
    title: "知识类型",
  },
  securityLevel: {
    field: "securityLevel",
    title: "密级",
  },
  abs: {
    field: "abs",
    title: "摘要",
  },
  formatTime: {
    field: "formatTime",
    title: "形成时间",
  },
  formatTimeStart: {
    field: "formatTimeStart",
    title: "开始形成时间",
  },
  formatTimeEnd: {
    field: "formatTimeEnd",
    title: "结束形成时间",
  },
  informationCollactor: {
    field: "informationCollactor",
    title: "知识收集人",
  },
  informationAuditor: {
    field: "informationAuditor",
    title: "知识审核人",
  },
  language: {
    field: "language",
    title: "语种",
  },
  keywords: {
    field: "keywords",
    title: "关键词",
  },
  informationOrigin: {
    field: "informationOrigin",
    title: "信息来源",
  },
  referWebsite: {
    field: "referWebsite",
    title: "参考网址",
  },
  createTime: {
    field: "createTime",
    title: "创建时间",
  },
  updateTime: {
    field: "updateTime",
    title: "更新时间",
  },
};
var industryTrend1 = {
  orderNum: "序号",
  title: "题名",
  trendType: "动态类型",

  /** 行业类别 */
  industryType: "行业类别",

  /** 行业细分 */
  industryDetailType: "行业细分",

  /** 产业链类型 */
  industryChainType: "产业链类型",

  /** 涉及装备/平台具体类型 */
  referDeviceType: "涉及装备/平台具体类型",

  /** 涉及装备名称 */
  referDevice: "涉及装备名称",

  /** 涉及具体产品名称 */
  referProduct: "涉及具体产品名称",

  /** 涉及项目名称 */
  referProject: "涉及项目名称",

  /** 涉及机构名称 */
  referInstitution: "涉及机构名称",

  /** 涉及技术 */
  referTechnology: "涉及技术",

  /** 所属类别 */
  referCategory: "所属类别",

  /** 部门类别 */
  department: "部门类别",

  /** 业务板块 */
  researchField: "业务板块",

  /** 业务方向 */
  researchOrientation: "业务方向",

  /** 系统 */
  researchSystem: "系统",

  /** 技术领域一级分类 */
  techFieldType1: "技术领域一级分类",

  /** 技术领域二级分类 */
  techFieldType2: "技术领域二级分类",

  /** 技术领域二级分类 */
  techFieldType3: "技术领域三级分类",

  /** 产业领域 */
  industryField: "产业领域",

  /** 产业方向 */
  industryOrientation: "产业方向",

  /** 知识发布部门 */
  publishDepartment: "知识发布部门",

  /** 等级时间 */
  checkInTime: "等级时间",

  /** 知识类型 */
  knowledgeType: "知识类型",

  /** 密级 */
  securityLevel: "密级",

  /** 摘要 */

  abs: "摘要",

  /** 形成时间 */
  formatTime: "形成时间",

  /** 知识收集人 */
  informationCollactor: "知识收集人",

  /** 知识审核人 */
  informationAuditor: "知识审核人",

  /** 语种 */
  language: "语种",

  /** 关键词 */
  keywords: "关键词",

  /** 信息来源 */
  informationOrigin: "信息来源",

  /** 参考网址 */
  referWebsite: "参考网址",

  /** 创建时间 */
  createTime: "创建时间",

  /** 更新时间 */
  updateTime: "更新时间",
};

var briefReportExterior = {
  orderNum: "序号",
  name: "简报名称",
  type: "简报类型",
  completeDepartment: "完成作者单位",
  title: "题名",

  /** 行业类别 */
  industryType: "行业类别",

  /** 行业细分 */
  industryDetailType: "行业细分",

  /** 产业链类型 */
  industryChainType: "产业链类型",

  /** 涉及装备/平台具体类型 */
  referDeviceType: "涉及装备/平台具体类型",

  /** 涉及装备名称 */
  referDevice: "涉及装备名称",

  /** 涉及具体产品名称 */
  referProduct: "涉及具体产品名称",

  /** 涉及项目名称 */
  referProject: "涉及项目名称",

  /** 涉及机构名称 */
  referInstitution: "涉及机构名称",

  /** 涉及技术 */
  referTechnology: "涉及技术",

  /** 所属类别 */
  referCategory: "所属类别",

  /** 部门类别 */
  department: "部门类别",

  /** 业务板块 */
  researchField: "业务板块",

  /** 业务方向 */
  researchOrientation: "业务方向",

  /** 系统 */
  researchSystem: "系统",

  /** 技术领域一级分类 */
  techFieldType1: "技术领域一级分类",

  /** 技术领域二级分类 */
  techFieldType2: "技术领域二级分类",

  /** 技术领域二级分类 */
  techFieldType3: "技术领域三级分类",

  /** 产业领域 */
  industryField: "产业领域",

  /** 产业方向 */
  industryOrientation: "产业方向",

  /** 知识发布部门 */
  publishDepartment: "知识发布部门",

  /** 登记时间 */
  checkInTime: "登记时间",

  /** 知识类型 */
  knowledgeType: "知识类型",

  /** 密级 */
  securityLevel: "密级",

  /** 摘要 */

  abs: "摘要",

  /** 形成时间 */
  formatTime: "形成时间",

  /** 知识收集人 */
  informationCollactor: "知识收集人",

  /** 知识审核人 */
  informationAuditor: "知识审核人",

  /** 语种 */
  language: "语种",

  /** 关键词 */
  keywords: "关键词",

  /** 信息来源 */
  informationOrigin: "信息来源",

  /** 参考网址 */
  referWebsite: "参考网址",

  /** 创建时间 */
  createTime: "创建时间",

  /** 更新时间 */
  updateTime: "更新时间",
};

var industryTrend = {
  title: {
    field: "title",
    title: "题名",
  },
  trendType: {
    fiedld: "trendType",
    title: "动态类型",
  },
};

var briefReportInterior = {
  name: {
    field: "name",
    title: "简报名称",
  },
  type: {
    field: "type",
    title: "简报类型",
  },
  completeDepartment: {
    field: "completeDepartment",
    title: "完成作者单位",
  },
  title: {
    field: "title",
    title: "题名",
  },
};

Object.assign(briefReportInterior, infoBase);
Object.assign(industryTrend, infoBase);

export { infoType, industryTrend, briefReportExterior, briefReportInterior };
