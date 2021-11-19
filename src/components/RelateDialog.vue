<template>
  <el-dialog
    title="关联"
    @open="open()"
    @close="close()"
    :visible.sync="dialogVisible"
  >
    <el-row>
      <el-col :span="24">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0"></div>
        <el-checkbox-group
          v-model="checkedProductName"
          @change="handleCheckedRelateChange"
        >
          <el-checkbox
            v-for="item in importantProduct"
            :label="item.productName"
            :key="item.id"
            >{{ item.productName }}</el-checkbox
          >
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="24" align="right">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitRelate()">确定</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import {
  getAllRelate,
  addRelate,
  deleteInfoProductRel
} from "@/api/manageInfoProductRel";
import { getAllByImportantProduct } from "@/api/manageImportantProduct";
export default {
  props: {
    infoType: String,
    originId: String
  },
  data() {
    return {
      dialogVisible: false,
      checkAll: false,
      checkedRel: [],
      checkedProductName: [],
      importantProduct: [],
      isIndeterminate: false
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    handleCheckAllChange(val) {
      let allProductName = this.importantProduct.map(item => {
        return item.productName;
      });
      this.checkedProductName = val ? allProductName : [];
      this.isIndeterminate = false;
    },
    handleCheckedRelateChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.importantProduct.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.importantProduct.length;
    },
    submitRelate() {
      this.checkedRel.forEach(item => {
        deleteInfoProductRel(item.id);
      });
      this.checkedProductName.forEach(name => {
        // console.log(this.importantProduct.find(p => p.productName == name).id);
        addRelate({
          importantProductId: this.importantProduct.find(
            p => p.productName == name
          ).id,
          productName: name,
          infoType: this.infoType,
          originId: this.originId
        });
      });
      this.dialogVisible = false;
      this.$message({
        message: "关联成功",
        type: "success"
      });
    },
    open() {
      // let _this = this;
      getAllByImportantProduct({ productName: "" })
        .then(res => {
          this.importantProduct = res._embedded.importantProducts;
        })
        .then(() => {
          return getAllRelate({
            infoType: this.infoType,
            originId: this.originId
          });
        })
        //转换对象
        .then(res => {
          this.checkedRel = res._embedded.infoProductRels;
          this.checkedProductName = this.checkedRel.map(
            item => item.productName
          );
        })
        //处理多选组
        .then(() => {
          // console.log(this.checkedProductName);
          // console.log(this.importantProduct);
          if (this.checkedProductName.length == 0) {
            this.checkAll = false;
            this.isIndeterminate = false;
          } else if (
            this.importantProduct.length == this.checkedProductName.length
          ) {
            this.isIndeterminate = false;
            this.checkAll = true;
          } else if (
            this.importantProduct.length >
            this.checkedProductName.length >
            0
          ) {
            this.isIndeterminate = true;
          }
        });
    },
    close() {
      this.checkedProductName = [];
      this.importantProduct = [];
      this.checkedRel = [];
      this.isIndeterminate = false;
      this.checkAll = false;
    }
  }
};
</script>

<style></style>
