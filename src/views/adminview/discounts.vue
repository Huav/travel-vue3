<template>
  <div>
    <div style="float: left;margin-left:180px ;">
      <el-input v-model="cid" placeholder="请输入所属公司id(cid)" style="width:400px;height: 40px;"></el-input>
      <el-button type="primary" :icon="Search" style="height: 40px;" @click="selectcid(cid)">
        <search style="width: 1em; height: 1em;" />查询
      </el-button>
      <el-button type="primary" @click="add_discount" style="height: 40px;width: 74px; ">添加</el-button>
    </div>
  </div>
  <p style="height: 1px;width: 95%; background-color: black;margin-top: 60px;margin-left: 30px;"></p>
  <el-table :data="discountData" border style="width: 100%;margin-top: 30px;">
    <el-table-column label="公司记录编号" prop="cid"></el-table-column>
    <el-table-column label="公司名字" prop="airlineName"></el-table-column>
    <el-table-column label="多程折扣情况" prop="discount"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template v-slot="scope">
        <el-button @click="delete_data(scope.$index, scope.row)" type="primary" size="small"
          style="width: 40px;float: left;height: 32px;">删除</el-button>
        <el-button @click="update_discount(scope.$index, scope.row)" type="primary" size="small"
          style="width: 40px;float: left;height: 32px;background-color: #409eff; ">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
 
  <div class="discountFrom" v-show="discountFormshow">
    <!-- 这是公司打折添加表单 -->
    <div class="discount1" v-show="show1">
      <el-form :model="discountFrom1" ref="discountFrom1" label-width="130px" class="demo-discountFrom1"
        style="margin-top: 35px;">
        <!-- <el-form-item label="公司记录编号:" prop="cid">
          <el-input v-model="discountFrom1.cid" :disabled="false"></el-input>
        </el-form-item>-->
        <el-form-item label="公司名字:" prop="airlineName">
          <el-input v-model="discountFrom1.airlineName"></el-input>
        </el-form-item>
        <el-form-item label="多程折扣情况:" prop="discount">
          <el-input v-model="discountFrom1.discount"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top:30px">
        <el-button type="primary" @click="submitdiscount1('discountFrom1')">确认</el-button>
        <el-button @click="reset1('discountFrom1')">取消</el-button>
      </div>
    </div>
    <!-- 这是公司打折修改表单 -->
    <div class="discount2" v-show="show2">
      <el-form :model="discountFrom2" ref="discountFrom2" label-width="130px" class="demo-discountFrom2"
        style="margin-top: 35px;">
        <!-- <el-form-item label="公司记录编号:" prop="cid">
          <el-input v-model="discountFrom2.cid" :disabled="false"></el-input>
        </el-form-item>-->
        <el-form-item label="公司名字:" prop="airlineName">
          <el-input v-model="discountFrom2.airlineName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="多程折扣情况:" prop="discount">
          <el-input v-model="discountFrom2.discount"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top:30px">
        <el-button type="primary" @click="submitdiscount2('discountFrom2')">确认</el-button>
        <el-button @click="reset2('discountFrom2')">取消</el-button>
      </div>
    </div>
   
  </div>
</template>
<script>
import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";
import res from "@/axios/request1.js";
export default {
  data() {
    return {
      cid: "",
      airline: "",
      discountFormshow: false,
      Holiday_show: false,
      input2: false,
      input1: true,
    
      airline_show: true,
      show1: false,
      show2: false,
      
      //表格数据
      discountData: [
        {
          cid: "1",
          airlineName: "IndiGo",
          discount: "0.05"
        },
        {
          cid: "2",
          airlineName: "IndiGo",
          discount: "0.05"
        }
      ],
      //添加公司多程表单数据
      discountFrom1: {
        cid: "",
        airlineName: "",
        discount: ""
      },

      //修改公司多程表单数据
      discountFrom2: {
        cid: "",
        airlineName: "",
        discount: ""
      },
     
    };
  },
  mounted() {
    this.getdiscountData();
    //进入页面执行getdiscountDataData方法
  },
  methods: {
    components: {
      Delete,
      Edit,
      Search,
      Share,
      Upload
    },
    //查询列表接口
    //进入页面请求打折的数据
    getdiscountData() {
      let that = this;
      res({
        url: "airline/selectAll",
        method: "post"
      })
        .then(function (response) {
          console.log(response);
          that.discountData = response.data.data;
          // that.discountData = response.data;
          console.log(that.discountData);
        })
        .catch(function (error) {
          console.log("请求失败");
          console.log(error);
        });
    },

    //搜索cid
    selectcid(cid) {
      let that = this;
      res({
        url: "airline/selectAirline",
        method: "post",
        params: {
          id: cid
        }
      })
        .then(function (response) {
          console.log(response);
          that.discountData = response.data.data;
          console.log(that.discountData);
        })
        .catch(function (error) {
          console.log("请求失败");
          console.log(error);
        });
    },

    //添加打开表单
    add_discount() {
      this.discountFormshow = !this.discountFormshow;
      this.show1 = !this.show1;
    },

    //修改公司打折表单打开
    update_discount(index, row) {
      this.discountFormshow = !this.discountFormshow;
      this.show2 = !this.show2;
      //对弹出层中的修改表单赋值
      this.discountFrom2.cid = row.cid;
      this.discountFrom2.airlineName = row.airlineName;
      this.discountFrom2.discount = row.discount;
    },

    //添加公司打折表单提交
    submitdiscount1(formName) {
      res({
        url: "airline/addAirline",
        method: "post",
        data: this.discountFrom1
      });
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("添加成功!");
          //关闭弹窗
          this.show1 = !this.show1;
          this.discountFormshow = !this.discountFormshow;
        } else {
          console.log("添加失败!");
          return false;
        }
      });
    },
    //添加重置表单
    reset1(formName) {
      this.show1 = !this.show1;
      this.discountFormshow = !this.discountFormshow;
      this.$refs[formName].resetFields();
    },

    //修改表单提交
    submitdiscount2(formName) {
      res({
        url: "airline/updateAirline",
        method: "post",
        data: this.discountFrom2
      });
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("修改成功!");
          //关闭弹窗
          this.show2 = !this.show2;
          this.discountFormshow = !this.discountFormshow;
        } else {
          console.log("修改失败!");
          return false;
        }
      });
    },
    //重置修改表单
    reset2(formName) {
      this.show2 = !this.show2;
      this.discountFormshow = !this.discountFormshow;
      this.$refs[formName].resetFields();
    },
    //删除表单的一行数据
    delete_data(index, row) {
      res({
        url: "airline/deleteAirline",
        method: "post",
        params: {
          cid: row.cid
        }
      })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("删除成功！");
            // this.getdiscountData();
          } else {
            try {
              this.$message.error(res.data);
            } catch {
              this.$message.error(res.msg);
            }
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    components: {
      Delete,
      Edit,
      Search,
      Share,
      Upload
    }
  }
};
</script>

<style>
.discountFrom {
  width: 1281.33px;
  height: 100vh;
  top: -1px;
  left: -1px;
  position: absolute;
  z-index: 9;
}

.discount1 {
  width: 300px;
  height: 250px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}

.discount2 {
  width: 300px;
  height: 250px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}


</style>