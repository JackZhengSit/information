<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="10" :offset="7">
          <div class="search-input">
            <el-input
              size="large"
              placeholder="请输入内容"
              v-model="input"
              class="input-with-select"
            >
              <el-select v-model="select" slot="prepend" placeholder="全部">
                <el-option label="标题" value="1"></el-option>
                <el-option label="作者" value="2"></el-option>
                <el-option label="摘要" value="3"></el-option>
                <el-option label="关键词" value="4"></el-option>
              </el-select>
              <el-button
                type="primary"
                slot="append"
                icon="el-icon-search"
                style="co"
              ></el-button>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top:20px">
        <el-col :span="4" :offset="3">
          <div class="left-nav-menu" style="">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="部门" name="1">
                <el-tree
                  :data="departData"
                  show-checkbox
                  node-key="id"
                  :default-checked-keys="[1, 2, 3]"
                  :props="defaultProps"
                >
                </el-tree>
              </el-collapse-item>
              <el-collapse-item title="业务方向" name="2">
                <el-tree
                  :data="researchData"
                  show-checkbox
                  node-key="id"
                  :default-checked-keys="[1, 2, 3]"
                  :props="defaultProps"
                ></el-tree>
              </el-collapse-item>
              <el-collapse-item title="系统" name="3">
                <el-tree
                  :data="systemData"
                  show-checkbox
                  node-key="id"
                  :default-checked-keys="[1, 2, 3]"
                  :props="defaultProps"
                ></el-tree>
              </el-collapse-item>
              <el-collapse-item title="来源" name="4">
                <el-tree
                  :data="referenceData"
                  show-checkbox
                  node-key="id"
                  :default-checked-keys="[1, 2, 3]"
                  :props="defaultProps"
                ></el-tree>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="result-block" style="background-color: #fff;">
            <div class="result-title" style="">
              <a href="#">共18页&nbsp;每页10条</a>
              <a href="#">下一页&nbsp;&nbsp;上一页</a>
            </div>
            <!-- <div class="result-body">
              <div class="result-item">
                <a class="title">这是标题</a>
                <p class="auther">这是作者</p>
                <p class="abstract">
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                </p>
              </div>
              <div class="result-item">
                <a class="title">这是标题</a>
                <p class="auther">这是作者</p>
                <p class="abstract">
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                </p>
              </div>
              <div class="result-item">
                <a class="title">这是标题</a>
                <p class="auther">这是作者</p>
                <p class="abstract">
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                </p>
              </div>
              <div class="result-item">
                <a class="title">这是标题</a>
                <p class="auther">这是作者</p>
                <p class="abstract">
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                </p>
              </div>
              <div class="result-item">
                <a class="title">这是标题</a>
                <p class="auther">这是作者</p>
                <p class="abstract">
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                  这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要这里是摘要摘要
                </p>
              </div>
            </div> -->
            <div class="result-body">
              <ResultItem
                v-for="li in resultList"
                :key="li.id"
                :title="li.title"
                :author="li.author"
                :abstract="li.abstract"
              >
              </ResultItem>
            </div>

            <div class="result-footer">
              <el-pagination
                layout="prev, pager, next"
                :total="1000"
                style="float:right"
              >
              </el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ResultItem from "../components/ResultItem";
export default {
  data() {
    return {
      input: "",
      select: "",
      activeNames: ["1"],
      departData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      researchData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      systemData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      referenceData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      resultList: [
        {
          id: 0,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 1,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 2,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要要这是摘要这是摘要这是摘要摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 3,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这"
        },
        {
          id: 4,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要是摘要这是摘要这是摘要这是摘要这是摘要这是摘要要这是摘要"
        },
        {
          id: 5,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是要这是摘要这是摘要这是摘要"
        },
        {
          id: 6,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 7,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 8,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这要这是摘要这是摘要这是摘要这是摘要这是摘要"
        },
        {
          id: 9,
          title: "这是标题，这是标题",
          author: "这是作者",
          abstract:
            "这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这摘要这是摘要这是摘要这是摘要这是摘要这是摘要"
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: {
    ResultItem
  }
};
</script>

<style>
.el-main {
  background-color: #fff;
}

.el-select .el-input {
  width: 100px;
}

.search-input {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.left-nav-menu {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: rgb(235, 238, 245) solid 1px;
  padding: 15px;
}

.result-block {
  border-radius: 4px;
  border: rgb(235, 238, 245) solid 1px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.result-title {
  background-color: rgba(179, 216, 255, 0.3);
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #409eff solid 1px;
  border-radius: 4px;
}
.result-title a {
  color: #409eff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 20px;
  opacity: 1;
}

/* .result-item .title {
  display: block;
  margin: 16px 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  color: #409eff;
  cursor: pointer;
}

.result-item .auther {
  margin: 10px 0 10px 0;
  font-size: 14px;
  color: #303133;
}

.result-item .abstract {
  margin-top: 10px;
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 4;
  display: -webkit-box;
} */

.result-body {
  padding: 0 15px;
}

.result-item {
  border-bottom: rgb(235, 238, 245) solid 1px;
}
</style>
