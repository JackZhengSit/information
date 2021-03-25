/*
 * @Description:
 * @Version: 0.0.0
 * @Autor: JackZheng
 * @Date: 2020-11-23 10:23:20
 * @LastEditTime: 2021-03-25 10:00:50
 */
// var infoType = {
//   industryTrend: "行业动态",
//   briefReportExterior: "外部简报",
//   briefReportInterior: "情报内部简报",
//   paperExterior: "外部论文著作",
//   patentExterior: "外部专利",
//   reportExterior: "外部行业报告",
//   reportInterior: "情报内部报告",
//   standardExterior: "外部标准",
// };
var infoType = {
  industryTrend: "行业动态",
  reportInterior: "情报报告",
  briefReportInterior: "情报简报",
  standardExterior: "外部标准",
  reportExterior: "行业报告",
  briefReportExterior: "外部简报",
  paperExterior: "外部论文",
  patentExterior: "外部专利",
  notice: "公告",
  question: "问题",
  classResource: "课程资源",
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
    title: "产业类别",
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
    title: "所属装备/平台具体类型",
  },

  referDevice: {
    field: "referDevice",
    title: "所属装备名称",
  },
  referProduct: {
    field: "referProduct",
    title: "所属具体产品名称",
  },
  referProject: {
    field: "referProject",
    title: "所属项目名称",
  },
  referInstitution: {
    field: "referInstitution",
    title: "所属机构名称",
  },
  referTechnology: {
    field: "referTechnology",
    title: "所属技术名称",
  },
  infoCategory: {
    field: "infoCategory",
    title: "情报类别",
  },
  topicCategory: {
    field: "topicCategory",
    title: "专题分类",
  },
  professionField: {
    field: "professionField",
    title: "专业领域",
  },
  infoNo: {
    field: "infoNo",
    title: "信息编号",
  },
  department: {
    field: "department",
    title: "信息收集部门",
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
  fileUrl: {
    field: "fileUrl",
    title: "附件位置",
  },
  fileName: {
    field: "fileName",
    title: "附件名",
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
  infoCategory: "所属类别",

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

var briefReportExterior1 = {
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
  infoCategory: "所属类别",

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
    field: "trendType",
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

var briefReportExterior = {};

var paperExterior = {
  paperType: {
    field: "paperType",
    title: "论文类型",
  },
  title: {
    field: "title",
    title: "题名",
  },
  author: {
    field: "author",
    title: "作者",
  },
  authorInstitution: {
    field: "authorInstitution",
    title: "作者单位",
  },
  firstAuthorInstitution: {
    field: "firstAuthorInstitution",
    title: "第一作者",
  },
  informationComeFrom: {
    field: "informationComeFrom",
    title: "文献来源",
  },
  publicationTime: {
    field: "publicationTime",
    title: "发表时间",
  },
  publicationTimeStart: {
    field: "publicationTimeStart",
    title: "发表时间开始",
  },
  publicationTimeEnd: {
    field: "publicationTimeEnd",
    title: "发表时间结束",
  },
  documentType: {
    field: "documentType",
    title: "文献类型",
  },
  pageNo: {
    field: "pageNo",
    title: "页码",
  },
  traslatedTitle: {
    field: "traslatedTitle",
    title: "翻译题名",
  },
  authorGroup: {
    field: "authorGroup",
    title: "团体作者",
  },
  publicateCompony: {
    field: "publicateCompony",
    title: "出版单位",
  },
  publicateTime: {
    field: "publicateTime",
    title: "出版时间",
  },
  publicateTimeStart: {
    field: "publicateTimeStart",
    title: "出版时间开始",
  },
  publicateTimeEnd: {
    field: "publicateTimeEnd",
    title: "出版时间结束",
  },
  conferenceSite: {
    field: "conferenceSite",
    title: "会议地址",
  },
  conferenceName: {
    field: "conferenceName",
    title: "会议名称",
  },
  conferenceDate: {
    field: "conferenceDate",
    title: "会议时间",
  },
  conferenceDateStart: {
    field: "conferenceDateStart",
    title: "会议时间开始",
  },
  conferenceDateEnd: {
    field: "conferenceDateEnd",
    title: "会议时间结束",
  },
  chineseClassNum: {
    field: "chineseClassNum",
    title: "中图分类号",
  },
  fundProject: {
    field: "fundProject",
    title: "基金项目",
  },
  reference: {
    field: "reference",
    title: "参考文献",
  },
  quotation: {
    field: "quotation",
    title: "引文",
  },
  allName: {
    field: "allName",
    title: "整本名称",
  },
  pageCount: {
    field: "pageCount",
    title: "总页数",
  },
  collectCompany: {
    field: "collectCompany",
    title: "馆藏单位",
  },
};

var patentExterior = {
  inventionTitile: {
    field: "inventionTitile",
    title: "专利名称",
  },
  applicationNo: {
    field: "applicationNo",
    title: "申请号",
  },
  applicationDay: {
    field: "applicationDay",
    title: "申请日",
  },
  applicationDayStart: {
    field: "applicationDayStart",
    title: "申请日",
  },
  applicationDayEnd: {
    field: "applicationDayEnd",
    title: "申请日",
  },
  publicationNo: {
    field: "publicationNo",
    title: "授权号",
  },
  publicationDay: {
    field: "publicationDay",
    title: "授权日",
  },
  publicationDayStart: {
    field: "publicationDayStart",
    title: "授权日",
  },
  publicationDayEnd: {
    field: "publicationDayEnd",
    title: "授权日",
  },
  applicationType: {
    field: "applicationType",
    title: "申请类型",
  },
  patentType: {
    field: "patentType",
    title: "专利类别",
  },
  assignee: {
    field: "assignee",
    title: "申请公司",
  },
  firstAssignee: {
    field: "firstAssignee",
    title: "第一申请人",
  },
  inventor: {
    field: "inventor",
    title: "发明人",
  },
  claims: {
    field: "claims",
    title: "权力要求书",
  },
  priorityNum: {
    field: "priorityNum",
    title: "优先权号",
  },
  priorityDay: {
    field: "priorityDay",
    title: "优先权日",
  },
  priorityDayStart: {
    field: "priorityDayStart",
    title: "优先权日",
  },
  priorityDayEnd: {
    field: "priorityDayEnd",
    title: "优先权日",
  },
  mainClassNum: {
    field: "mainClassNum",
    title: "主分类号",
  },
  legalStatus: {
    field: "legalStatus",
    title: "法律状态",
  },
};

var reportExterior = {
  title: {
    field: "title",
    title: "题名",
  },
  type: {
    field: "type",
    title: "报告类型",
  },
  completeDepartment: {
    field: "completeDepartment",
    title: "内容完成作者/单位",
  },
};

var reportInterior = {};

var standardExterior = {
  type: {
    field: "type",
    title: "标准类型",
  },
  name: {
    field: "name",
    title: "标准名称",
  },
  num: {
    field: "num",
    title: "标准号",
  },
  publicateDate: {
    field: "publicateDate",
    title: "发布日",
  },
  publicateDateStart: {
    field: "publicateDateStart",
    title: "发布日",
  },
  publicateDateEnd: {
    field: "publicateDateEnd",
    title: "发布日",
  },
  executeDate: {
    field: "executeDate",
    title: "实施日",
  },
  executeDateStart: {
    field: "executeDateStart",
    title: "实施日",
  },
  executeDateEnd: {
    field: "executeDateEnd",
    title: "实施日",
  },
  specifyInstitution: {
    field: "specifyInstitution",
    title: "归口单位",
  },
  applicationScope: {
    field: "applicationScope",
    title: "使用范围",
  },
  author: {
    field: "author",
    title: "起草人",
  },
  status: {
    field: "status",
    title: "标准状态",
  },
  authorInstitution: {
    field: "authorInstitution",
    title: "起草单位",
  },
  chineseStandardClassNumname: {
    field: "chineseStandardClassNum",
    title: "中国分类号",
  },
  substituteStandard: {
    field: "substituteStandard",
    title: "替代标准",
  },
  publicateCompony: {
    field: "publicateCompony",
    title: "发布单位",
  },
};

var information = {
  originId: {
    field: "originId",
    title: "源ID",
  },
  infoTitle: {
    field: "infoTitle",
    title: "标题",
  },
  infoType: {
    field: "infoType",
    title: "类型",
  },
  infoAuthor: {
    field: "infoAuthor",
    title: "作者",
  },
};

var notice = {
  id: {
    field: "id",
    title: "id",
  },
  title: {
    field: "title",
    title: "标题",
  },
  author: {
    field: "author",
    title: "作者",
  },
  mainText: {
    field: "mainText",
    title: "文本",
  },
  publicateDay: {
    field: "publicateDay",
    title: "发布日",
  },
  publicateDayStart: {
    field: "publicateDayStart",
    title: "开始发布日",
  },
  publicateDayEnd: {
    field: "publicateDayEnd",
    title: "终止发布日",
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

let question = {
  id: {},
  title: {
    field: "title",
    title: "标题",
  },
  inquisitor: {
    field: "inquisitor",
    title: "提问者",
  },
  detail: {
    field: "detail",
    title: "详细",
  },
  craeteDay: {
    field: "createDay",
    title: "创建日",
  },
  createDayStart: {
    field: "createDayStart",
    title: "创建日开始",
  },
  createDayEnd: {
    field: "createDayEnd",
    title: "创建日结束",
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

let classResource = {
  id: {},
  orderNum: {
    field: "orderNum",
    title: "序号",
  },
  orderNumStart: {
    field: "orderNumStart",
    title: "序号",
  },
  orderNumEnd: {
    field: "orderNumEnd",
    title: "序号",
  },
  name: {
    field: "name",
    title: "课程名称",
  },
  teacher: {
    field: "teacher",
    title: "主讲人",
  },
  target: {
    field: "target",
    title: "课程目标",
  },
  filePath: {
    field: "filePath",
    title: "文件路径",
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

Object.assign(industryTrend, infoBase);
Object.assign(briefReportInterior, infoBase);
Object.assign(briefReportExterior, briefReportInterior);
Object.assign(paperExterior, infoBase);
Object.assign(patentExterior, infoBase);
Object.assign(reportExterior, infoBase);
Object.assign(reportInterior, reportExterior);
Object.assign(standardExterior, infoBase);
Object.assign(information, infoBase);

export {
  infoType,
  industryTrend,
  briefReportExterior,
  briefReportInterior,
  paperExterior,
  patentExterior,
  reportExterior,
  reportInterior,
  standardExterior,
  information,
  notice,
  question,
  classResource,
};
