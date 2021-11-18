<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10" :offset="5"
        ><div class="bkgrd">
          <el-card class="infoBlock">
            <h3>{{ infoTitle }}</h3>
            <div>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-document"
                plain
                @click="openFile"
                >查看文件</el-button
              >
            </div>
            <p>
              {{ info.abs }}
            </p>
            <el-row v-for="item in getDetailShow()" :key="item.id" :gutter="20">
              <el-col :span="6">
                <div class="info-label">{{ item.title }}</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">{{ info[item.field] }}</div>
              </el-col>
            </el-row>
            <!-- <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">
                  这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本这是文本
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="info-label">这是标题名：</div>
              </el-col>
              <el-col :span="18">
                <div class="info-text">这是文本这是文本这是文本</div>
              </el-col>
            </el-row> -->
          </el-card>
        </div></el-col
      >
      <el-col :span="5">
        <el-card>
          <h4>此知识的分类</h4>
          <el-row>
            <el-col :span="12">
              <div class="info-label">情报类型：</div>
            </el-col>
            <el-col :span="12">
              <div class="info-text">{{ info.infoCategory }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="info-label">专题分类：</div>
            </el-col>
            <el-col :span="12">
              <div class="info-text">{{ info.topicCategory }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="info-label">专业领域：</div>
            </el-col>
            <el-col :span="12">
              <div class="info-text">{{ info.professionField }}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDetailInfo } from "@/api/queryInformation";
import baseUrl from "@/config/baseUrl";
// import { briefReportInterior } from '../store/infoType';
// import { detailShow } from "@/store/infoType";
const base = [
  {
    title: "情报类型",
    field: "infoCategory"
  },
  {
    title: "专业领域",
    field: "professionField"
  },
  {
    title: "专题分类",
    field: "topicCategory"
  },
  {
    title: "知识发布部门",
    field: "publishDepartment"
  },
  {
    title: "登记时间",
    field: "checkInTime"
  },
  {
    title: "知识类型",
    field: "knowledgeType"
  },
  {
    title: "密级",
    field: "securityLevel"
  },
  {
    title: "形成时间",
    field: "formatTime"
  },
  {
    title: "语种",
    field: "language"
  },
  {
    title: "知识发布部门",
    field: "publishDepartment"
  },
  {
    title: "信息来源",
    field: "informationOrigin"
  },
  {
    title: "信息编号",
    field: "infoNo"
  }
];
const industryTrend = {
  type: "行业动态",
  url: "IndustryTrend",
  show: [
    {
      title: "题名",
      field: "title"
    },
    {
      title: "动态类型",
      field: "trendType"
    }
  ].concat(base)
};
const reportExterior = {
  type: "行业报告",
  url: "ReportExterior",
  show: [
    {
      field: "title",
      title: "题名"
    },
    {
      field: "type",
      title: "报告类型"
    },
    {
      field: "completeDepartment",
      title: "内容完成单位"
    }
  ].concat(base)
};
const briefReportExterior = {
  type: "外部简报",
  url: "BriefReportExterior",
  show: [
    {
      field: "name",
      title: "简报名称"
    },
    {
      field: "type",
      title: "简报类型"
    },
    {
      field: "completeDepartment",
      title: "完成单位"
    },
    {
      field: "title",
      title: "题名"
    }
  ].concat(base)
};
const patentExterior = {
  type: "外部专利",
  url: "PatentExterior",
  show: [
    {
      field: "inventionTitile",
      title: "专利名称"
    },
    {
      field: "applicationNo",
      title: "申请号"
    },
    {
      field: "applicationDay",
      title: "申请日"
    },

    {
      field: "publicationNo",
      title: "授权号"
    },

    {
      field: "applicationType",
      title: "申请类型"
    },
    {
      field: "patentType",
      title: "专利类别"
    },
    {
      field: "assignee",
      title: "申请公司"
    },

    {
      field: "inventor",
      title: "发明人"
    },
    {
      field: "claims",
      title: "权力要求书"
    }
  ].concat(base)
};
const paperExterior = {
  type: "外部论文",
  url: "PaperExterior",
  show: [
    {
      field: "paperType",
      title: "论文类型"
    },
    {
      field: "title",
      title: "题名"
    },
    {
      field: "author",
      title: "作者"
    },
    {
      field: "authorInstitution",
      title: "作者单位"
    },
    {
      field: "firstAuthorInstitution",
      title: "第一作者"
    },
    {
      field: "informationComeFrom",
      title: "文献来源"
    },
    {
      field: "publicationTime",
      title: "发表时间"
    },

    {
      field: "documentType",
      title: "文献类型"
    },
    {
      field: "pageNo",
      title: "页码"
    }
  ].concat(base)
};
const standardExterior = {
  type: "外部标准",
  url: "StandardExterior",
  show: [
    {
      field: "name",
      title: "标准名称"
    },
    {
      field: "num",
      title: "标准号"
    },
    {
      field: "publicateDate",
      title: "发布日"
    },

    {
      field: "executeDate",
      title: "实施日"
    },

    {
      field: "specifyInstitution",
      title: "归口单位"
    },

    {
      field: "status",
      title: "标准状态"
    },
    {
      field: "authorInstitution",
      title: "起草单位"
    },
    {
      field: "chineseStandardClassNum",
      title: "中国分类号"
    },
    {
      field: "substituteStandard",
      title: "替代标准"
    }
  ].concat(base)
};
const briefReportInterior = {
  type: "情报简报",
  url: "BriefReportInterior",
  show: [
    {
      field: "name",
      title: "简报名称"
    },
    {
      field: "type",
      title: "简报类型"
    },
    {
      field: "completeDepartment",
      title: "完成单位"
    },
    {
      field: "title",
      title: "题名"
    }
  ].concat(base)
};
const reportInterior = {
  type: "情报报告",
  url: "ReportInterior",
  show: [
    {
      field: "title",
      title: "题名"
    },
    {
      field: "type",
      title: "报告类型"
    },
    {
      field: "completeDepartment",
      title: "内容完成单位"
    }
  ].concat(base)
};

const detailShow = [
  industryTrend,
  reportExterior,
  briefReportExterior,
  paperExterior,
  patentExterior,
  standardExterior,
  briefReportInterior,
  reportInterior
];

export default {
  props: {
    originId: String,
    infoType: String,
    infoTitle: String,
    infoFileUrl: String
  },
  data() {
    return {
      detailShow,
      info: []
    };
  },
  methods: {
    // openFile() {
    //   if (!this.infoFileUrl.includes(".")) {
    //     this.$message({
    //       type: "warning",
    //       message: "此情报附件无附件或未上传！",
    //     });
    //   } else window.open(baseUrl + this.infoFileUrl);
    // },
    openFile() {
      if (this.infoFileUrl.includes(".")) {
        window.open(baseUrl + this.infoFileUrl);
      } else {
        if (
          this.infoType == "情报简报" ||
          this.infoType == "外部简报" ||
          this.infoType == "情报报告"
        ) {
          this.$message({
            type: "warning",
            message: "若需全文，请联系标研中心情报研究科 5216"
          });
        } else {
          this.$message({
            type: "warning",
            message: "此情报附件无附件或未上传！"
          });
        }
      }
    },
    getDetailShow() {
      return this.detailShow.find(item => item.type == this.infoType).show;
    },
    getDetail() {
      getDetailInfo({
        infoType: this.detailShow.find(item => item.type == this.infoType).url,
        id: this.originId
      }).then(res => {
        this.info = res;
      });
    }
  },
  created() {
    // console.log(this.infoType);
    // console.log(this.detailShow.find((item) => item.type == this.infoType));
    // console.log(this.detailShow);
    this.getDetail();
  }
};
</script>

<style>
/* .bkgrd {
  background-color: lightblue;
  height: 1000px;
} */
.infoBlock {
  padding: 10px;
}

.info-label {
  padding: 5px;
  font-weight: 600;
  right: 0;
  text-align: right;
}
.info-text {
  padding: 5px;
}
</style>
