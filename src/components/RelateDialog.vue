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
            v-for="item in relate"
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
  deleteAllRelateByType,
} from "@/api/manageInfoProductRel";
import { getAllByImportantProduct } from "@/api/manageImportantProduct";
export default {
  props: {
    infoType: String,
    originId: String,
  },
  data() {
    return {
      dialogVisible: false,
      checkAll: false,
      checkedProductName: [],
      relate: [],
      isIndeterminate: true,
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    handleCheckAllChange(val) {
      this.checkedProductName = val ? this.relate : [];
      this.isIndeterminate = false;
    },
    handleCheckedRelateChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.relate.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.relate.length;
    },
    submitRelate() {
      deleteAllRelateByType("industryTrend")
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          let infoProductRels = this.checkedProductName.map((item) => {
            let infoProductRel = {
              importantProductId: item.id,
              infoType: this.infoType,
              infoId: this.originId,
            };
          });
          return addRelate(infoProductRels);
        })
        .then();
    },
    open() {
      let _this = this;
      getAllByImportantProduct({ productName: "" })
        .then((res) => {
          this.relate = res._embedded.importantProducts;
        })
        .then(() => {
          return getAllRelate({
            infoType: this.infoType,
            originId: this.originId,
          });
        })
        .then((res) => {
          this.checkedProductName = res._embedded.infoProductRels.map((pr) => {
            return this.relate.filter((r) => r.id == pr.importantProductId)[0]
              .productName;
          });
          console.log(this.checkedProductName);
          c;
        })
        .then();
    },
    close() {
      this.checkedProductName = [];
      this.relate = [];
      this.isIndeterminate = true;
    },
  },
};
</script>

<style>
</style>