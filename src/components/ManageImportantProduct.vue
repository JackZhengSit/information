<template>
  <div>
    <el-row :gutter="10" style="margin: 10px 0">
      <el-col :span="4">
        <el-input
          v-model="keyword"
          placeholder="输入关键字搜索"
          @keyup.enter.native="search()"
        />
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="search()">搜索</el-button>
        <el-button type="primary" @click="handleAdd()">新增</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column
            align="center"
            header-align="center"
            label="ID"
            prop="id"
          >
          </el-table-column>
          <el-table-column
            align="center"
            header-align="center"
            label="产品名称"
            prop="productName"
          >
          </el-table-column>
          <el-table-column
            align="center"
            header-align="center"
            label="创建时间"
            prop="createTime"
          >
          </el-table-column>
          <el-table-column align="center" header-align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog
      :title="!!editRow ? '编辑' : '新增'"
      :visible.sync="dialogVisible"
      width="30%"
      @closed="closed()"
    >
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="productName"
            placeholder="请输入内容"
            @keyup.enter.native="submit()"
          ></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getAllByImportantProduct,
  addImportantProduct,
  patchImportantProduct,
  deleteImportantProduct
} from "@/api/manageImportantProduct";
export default {
  data() {
    return {
      tableData: [],
      keyword: "",
      dialogVisible: false,
      productName: "",
      editRow: ""
    };
  },
  methods: {
    loadData() {
      getAllByImportantProduct({ productName: "" }).then(res => {
        this.tableData = res._embedded.importantProducts;
      });
    },
    search() {
      getAllByImportantProduct({ productName: this.keyword }).then(res => {
        console.log(res);
        this.tableData = res._embedded.importantProducts;
      });
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.editRow = row;
      this.productName = row.productName;
    },
    handleDelete(index, row) {
      deleteImportantProduct(row.id).then(res => {
        this.$message({
          type: "success",
          message: "删除成功"
        });
        this.loadData();
      });
    },
    submit() {
      this.dialogVisible = false;
      if (!this.editRow) {
        addImportantProduct({ productName: this.productName }).then(res => {
          this.$message({
            type: "success",
            message: "新增成功"
          });
          this.loadData();
        });
      } else {
        patchImportantProduct(this.editRow.id, {
          productName: this.productName
        }).then(res => {
          this.$message({
            type: "success",
            message: "修改成功"
          });
          this.loadData();
        });
      }
    },
    closed() {
      this.editRow = null;
      this.productName = null;
    }
  },
  created() {
    this.loadData();
  }
};
</script>
