<template>
    <div>
        <el-input v-model="airline" placeholder="请输入公司名字：" style="width:400px;height: 40px;"></el-input>
        <el-button type="primary" :icon="Search" style="height: 40px;" @click="selectairlineName(airline)">
            <search style="width: 1em; height: 1em;" />查询
        </el-button>
        <el-button type="primary" @click="add_Holidaydiscount" style="height: 40px;width: 74px;">添加</el-button>
    </div>
    <el-table :data="Holiday_table" border style="width: 100%;margin-top: 30px;">
      <el-table-column label="公司名字" prop="airline"></el-table-column>
      <el-table-column label="打折时间" prop="dateOfJourney"></el-table-column>
      <el-table-column label="节日折扣情况" prop="holidayDiscounts"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="delete_data1(scope.$index, scope.row)"
          style="width: 40px;float: left;height: 32px;">
            删除
            <!--  @click="deletel_discount(scope.$index,scope.row)" -->
          </el-button>
          <el-button @click="update_Holidaydiscount(scope.$index, scope.row)" type="primary" size="small"
          style="width: 40px;float: left;height: 32px;background-color: #409eff; ">
            修改
            <!--  -->
          </el-button>
          <!-- <el-button @click="add_Holidaydiscount" type="primary" size="small"
            style="width:30px; float:left;background-color: #409eff; ">添加</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <div class="discountFrom" v-show="discountFormshow">
 <!-- 这是节日打折添加表单 -->
 <div class="discount3" v-show="show3">
      <el-form :model="discountFrom3" ref="discountFrom3" label-width="130px" class="demo-discountFrom3"
        style="margin-top: 35px;">
        <el-form-item label="公司名字:" prop="airline">
          <el-input v-model="discountFrom3.airline" :disabled="false"></el-input>
        </el-form-item>
        <!-- <el-form-item label="打折时间:" prop="dateOfJourney">
          <el-input v-model="discountFrom3.dateOfJourney"></el-input>
        </el-form-item> -->
        <el-form-item label="打折时间" required >
          <div class="block">
            <el-date-picker v-model="discountFrom3.dateOfJourney" type="datetime"
              placeholder="选择打折时间" style="width:170px" />
          </div>
        </el-form-item>


        <el-form-item label="节日折扣情况:" prop="holidayDiscounts">
          <el-input v-model="discountFrom3.holidayDiscounts"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top:30px">
        <el-button type="primary" @click="submitdiscount3('discountFrom3')">确认</el-button>
        <el-button @click="reset3('discountFrom3')">取消</el-button>
      </div>
    </div>
    <!-- 这是节日打折更改表单 -->
    <div class="discount4" v-show="show4">
      <el-form :model="discountFrom4" ref="discountFrom4" label-width="130px" class="demo-discountFrom4"
        style="margin-top: 35px;">

        <el-form-item label="公司名字:" prop="airline">
          <el-input v-model="discountFrom4.airline" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="打折时间:" prop="dateOfJourney">
          <el-input v-model="discountFrom4.dateOfJourney" :disabled="true" ></el-input>
        </el-form-item>
        <el-form-item label="节日折扣情况:" prop="holidayDiscounts">
          <el-input v-model="discountFrom4.holidayDiscounts"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top:30px">
        <el-button type="primary" @click="submitdiscount4('discountFrom4')">确认</el-button>
        <el-button @click="reset4('discountFrom4')">取消</el-button>
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
        discountFormshow:false,
        show3:false,
        show4:false,
        airline:'',
        Holiday_table: [
        // {
        //   airline: "",
        //   dateOfJourney: "",
        //   holidayDiscounts: ""
        // }
      ],
      discountFrom3: {
        airline: "",
        dateOfJourney: "",
        holidayDiscounts: ""
      },
      discountFrom4: {
        airline: "",
        dateOfJourney: "",
        holidayDiscounts: ""
      }
    }
},

mounted() {
    this.Holiday_discountData();
    //进入页面执行getdiscountDataData方法
  },
  methods: {
    
    //请求节日打折数据
    Holiday_discountData() {
      let that = this;
      res({
        url: "",
        method: "post"
      })
        .then(function (response) {
          console.log(response);
         
          that.discountData = response.data;
          console.log(that.discountData);
        })
        .catch(function (error) {
          console.log("请求失败");
          console.log(error);
        });
    },
    //搜索airlineName(节假日折扣查询)
    selectairlineName(airline) {
      let that = this;
      
      res({
        url: "flight/selectHolidayDiscounts",
        method: "post",
        params: {
          airline:that.airline
        }

      })
        .then(function (response) {
          console.log(response);
          that.Holiday_table = response.data.data;
          console.log(that.Holiday_table);
        })
        .catch(function (error) {
          console.log("请求失败");
          console.log(error);
        });
    },
    //添加节日打折表单打开
    add_Holidaydiscount() {
      this.discountFormshow = !this.discountFormshow;
      this.show3 = !this.show3;
    },
    //添加节日打折表单提交
    submitdiscount3(formName) {
      res({
        url: "flight/holidayDiscounts",
        method: "post",
        data: this.discountFrom3
      });
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("添加成功!");
          //关闭弹窗
          this.show3 = !this.show3;
          this.discountFormshow = !this.discountFormshow;
        } else {
          console.log("添加失败!");
          return false;
        }
      });
    },
    reset3(formName) {
      this.show3 = !this.show3;
      this.discountFormshow = !this.discountFormshow;
      this.$refs[formName].resetFields();
    },
    update_Holidaydiscount(index, row) {
      this.discountFormshow = !this.discountFormshow;
      this.show4 = !this.show4;
      //对弹出层中的修改表单赋值
      this.discountFrom4.dateOfJourney = row.dateOfJourney;
      this.discountFrom4.airline = row.airline;
      this.discountFrom4.holidayDiscounts = row.holidayDiscounts;
    },
    //修改表单提交
    submitdiscount4(formName) {
      res({
        url: "flight/holidayDiscounts",
        method: "post",
        data: this.discountFrom4
      });
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("修改成功!");
          //关闭弹窗
          this.show4 = !this.show4;
          this.discountFormshow = !this.discountFormshow;
        } else {
          console.log("修改失败!");
          return false;
        }
      });
    },
    reset4(formName) {
      this.show4 = !this.show4;
      this.discountFormshow = !this.discountFormshow;
      this.$refs[formName].resetFields();
    },
    //删除表单的一行数据
    delete_data1(index, row) {
      res({
        url: "flight/holidayDiscounts",
        method: "post",
        params: {
          airline: row.airline,
          holidayDiscounts: row.holidayDiscounts,
          dateOfJourney: row.dateOfJourney
        }
      })
        .then(res => {
          if (res.code === 200) {
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
}
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

.discount3 {
  width: 300px;
  height: 250px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}

.discount4 {
  width: 300px;
  height: 250px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}
</style>