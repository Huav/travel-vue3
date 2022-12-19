<template>
  <!-- <div class="2222" style="left: -200px;top:-169px; width:1463.33px;height: 750px;opacity: 0.5;background-color:bisque;position:absolute;z-index: 35;">
    
  </div>-->
  <div>
    <el-input v-model="input" placeholder="请输入飞机的编号id" style="width:400px;height: 40px;"></el-input>
    <el-button type="primary" :icon="Search" style="height: 40px;" @click="getData1(input)">
      <search style="width: 1em; height: 1em;" />查询
    </el-button>

    <el-button type="primary" @click="addflForm" style="height: 40px;width: 74px;">添加</el-button>
  </div>

  <el-table :data="tableData" border style="width: 100%;margin-top: 30px;">
    <el-table-column label=" ID" prop="id"></el-table-column>
    <el-table-column label=" 航空公司" prop="airline"></el-table-column>
    <el-table-column label=" 飞机型号id" prop="aid"></el-table-column>
    <el-table-column label=" 出发机场" prop="source"></el-table-column>
    <el-table-column label=" 到达机场" prop="destination"></el-table-column>
    <el-table-column label=" 路线" prop="route"></el-table-column>
    <el-table-column label=" 行程日期" prop="dateOfJourney"></el-table-column>
    <el-table-column label=" 出发时间" prop="depTime"></el-table-column>
    <el-table-column label=" 到达时间" prop="arrivalTime"></el-table-column>
    <el-table-column label=" 总用时间" prop="duration"></el-table-column>
    <el-table-column label=" 经济舱" prop="econmecyPrice"></el-table-column>
    <el-table-column label=" 节日折扣" prop="holidayDiscounts"></el-table-column>
    <el-table-column label="商务舱 " prop="classPrice"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template v-slot="scope">
        <el-button @click="deleteLine(scope.$index, scope.row)" type="primary" size="small"
        style="width: 40px;float: left;height: 32px;background-color: #409eff; ">删除</el-button>
        <el-button @click="updateflForm(scope.$index, scope.row)" type="primary" size="small"
        style="width: 40px;float: left;height: 32px;background-color: #409eff; ">修改</el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="add" v-show="Form">
    <div class="addFrom" v-show="addForm">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="航空公司" prop="airline" style="width: 30%; float: left; ">
          <el-input v-model="ruleForm.airline"></el-input>
        </el-form-item>
        <el-form-item label="飞机型号id" prop="aid" style="width: 30%;margin-left: 170px; float: left; ">
          <el-input v-model="ruleForm.aid"></el-input>
        </el-form-item>
        <el-form-item label="起飞时间" style="width: 50%; float: left; " required>
          <div class="block">
            <el-date-picker v-model="ruleForm.depTime" type="datetime" placeholder="Select date and time" />
          </div>
        </el-form-item>
        <el-form-item label="到达时间" style="width: 50%; float: left; " required>
          <div class="block">
            <el-date-picker v-model="ruleForm.arrivalTime" type="datetime" placeholder="Select date and time" />
          </div>
        </el-form-item>
        <!-- <el-form-item label="行程总时间" prop="Duration" style="width:50%">
          <el-input v-model="ruleForm.duration"></el-input>
        </el-form-item> -->
        <el-form-item label="出发地" prop="Source" style="width: 50%;float: left; ">
          <el-input v-model="ruleForm.source"></el-input>
        </el-form-item>
        <el-form-item label="目的地" prop="Destination" style="width: 50%; ">
          <el-input v-model="ruleForm.destination"></el-input>
        </el-form-item>
        <el-form-item label="飞机路线" prop="Route" style="width: 70%; ">
          <el-input v-model="ruleForm.route"></el-input>
        </el-form-item>
        <el-form-item label="附加信息" prop="Additional_Info" style="width: 70%; ">
          <el-input v-model="ruleForm.additionalInfo"></el-input>
        </el-form-item>
        <el-form-item label="节日折扣" prop="holidayDiscounts" style="width: 70%; ">
          <el-input v-model="ruleForm.holidayDiscounts"></el-input>
        </el-form-item>
        <el-form-item label="经济舱价格" prop="econmecy_price" style="width: 50%; ">
          <el-input v-model="ruleForm.econmecyPrice"></el-input>
        </el-form-item>
        <el-form-item label="商务舱价格" prop="class_price" style="width: 50%; ">
          <el-input v-model="ruleForm.classPrice"></el-input>
        </el-form-item>
        <el-form-item style="width:40%;margin: auto;">
          <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="updateFrom" v-show="updateForm">
      <el-form :model="ruleForm1" ref="ruleForm1" label-width="100px" class="demo-ruleForm1" style="margin-top: 20px;">
        <el-form-item label="id" prop="id">
          <el-input v-model="ruleForm1.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="起点" prop="source">
          <el-input v-model="ruleForm1.source" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="终点" prop="destination">
          <el-input v-model="ruleForm1.destination" :disabled="true"></el-input>
        </el-form-item>

        <el-form-item label="航空公司" prop="airline">
          <el-input v-model="ruleForm1.airline"></el-input>
        </el-form-item>
        <el-form-item label="飞机型号id" prop="aid">
          <el-input v-model="ruleForm1.aid"></el-input>
        </el-form-item>
        <el-form-item label="行程时间" required>
          <div class="block">
            <!-- <span class="demonstration">默认</span> -->
            <el-date-picker v-model="ruleForm1.dateOfJourney" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="节日折扣" prop="holidayDiscounts" style="width: 70%; ">
          <el-input v-model="ruleForm1.holidayDiscounts"></el-input>
        </el-form-item>
        <el-form-item label="经济舱价格" prop="econmecy_price">
          <el-input v-model="ruleForm1.econmecyPrice"></el-input>
        </el-form-item>
        <el-form-item label="商务舱价格" prop="class_price">
          <el-input v-model="ruleForm1.classPrice"></el-input>
        </el-form-item>

        <!-- <el-form-item style="width:100%;margin: auto;">
            <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>-->
      </el-form>
      <div style="margin-top:10px">
        <el-button type="primary" @click="updateForm1('ruleForm1')">确认</el-button>
        <el-button @click="resetForm1('ruleForm1')">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import res from '@/axios/request1.js'

import { watch } from 'vue';

export default {

  data() {
    return {
      input: '',
      Form: false,
      addForm: false,
      updateForm: false,
      ruleForm: {
        airline: "",
        depTime: "",
        arrivalTime: "",
        duration: "",
        flightInfoId: "",
        source: "",
        destination: "",
        route: "",
        additionalInfo: "",
        econmecyPrice: "",
        classPrice: "",
        aid: "",
        holidayDiscounts: ''
      },
      ruleForm1: {
        // id:'',
        airline: "",
        aid: "",
        // source: "",
        // destination: "",
        holidayDiscounts: "",
        dateOfJourney: "",
        econmecyPrice: "",
        classPrice: ""
      },
      tableData: [
        { "id": 997, holidayDiscounts: '0', "aid": 5, "airline": "Jet Airways", "dateOfJourney": "2022-11-20T16:00:00.000+00:00", "flightInfoId": "空客A310", "source": "Kolkata", "destination": "Banglore", "route": "CCU → BOM → BLR", "depTime": "20:00", "arrivalTime": "04:40 22 May", "duration": "8h 40m", "totalStops": "1 stop", "additionalInfo": "In-flight meal not included", "econmecyPrice": 10844.0, "classPrice": 11344, "totalSeat": 178, "seatFVacant": 16, "seatYVacant": 162 }
      ]
    }
  },
  mounted() {
    this.getData();
    //进入页面执行getData方法
  },
  methods: {
    //查询列表接口
    getData() {
      let that = this
      res({
        url: 'flight/selectToday',
        method: 'post',
        // data: this.input
      }).then(function (response) {
        console.log(response);
        that.tableData = response.data.data;
        // that.tableData = response.data;
        console.log(that.tableData);
      }).catch(function (error) {
        console.log("请求失败");
        console.log(error);
      });

    },


    //搜索
    getData1(input) {
      let that = this;
      res({
        url: 'flight/selectFlight',
        method: 'post',
        params: {
          id: input,
        }
      }).then(function (response) {
        console.log(response);
        that.tableData = response.data.data;

      }), error => {
        console.log('错误', error)
      };


    },

    //删除,带上当前行的id即可row.id
    deleteLine(index, row) {

      res({
        url: "flight/deleteFlight",
        method: "post",
        params: {
          id: row.id
        }
      }).then(res => {
        if (res.code === 200) {
          this.$message.success("删除成功！");
          this.getData();
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
            message: "已取消删除",
          });
        });
    },

    //打开添加表单
    addflForm() {
      this.Form = !this.Form;
      this.addForm = !this.addForm;

      // this.updateForm = !this.updateForm;
    },
    components: {
      Delete, Edit, Search, Share, Upload,
    },
    //添加请求
    submitForm(formName) {
      res({
        url: "flight/addFlight",
        method: 'post',
        data: this.ruleForm,
      })
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('添加成功!');
          //关闭弹窗
          this.Form = !this.Form;
          this.addForm = !this.addForm;
          // this.updateForm = !this.updateForm;
        } else {
          console.log('添加失败!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      //关闭弹窗
      this.Form = !this.Form;
      this.addForm = !this.addForm;
    },

    //打开修改表单
    updateflForm(index, row) {
      this.Form = !this.Form;
      this.updateForm = !this.updateForm;
      //对弹出层中的修改表单赋值
      this.ruleForm1.airline = row.airline;
      this.ruleForm1.dateOfJourney = row.dateOfJourney;
      this.ruleForm1.aid = row.aid;
      this.ruleForm1.econmecyPrice = row.econmecyPrice;
      this.ruleForm1.classPrice = row.classPrice;
      this.ruleForm1.id = row.id;
      this.ruleForm1.holidayDiscounts = row.holidayDiscounts;
      this.ruleForm1.source = row.source;
      this.ruleForm1.destination = row.destination;

    },
    //修改表单后提交请求
    updateForm1(formName) {
      res({
        url: "flight/updateFlight",
        method: "post",
        data: this.ruleForm1
      });
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('修改成功!');
          //关闭弹窗
          this.Form = !this.Form;
          console.log("hhhh");
          // this.addForm = !this.addForm;        
          this.updateForm = !this.updateForm;
        } else {
          console.log('修改失败!');
          return false;
        }
      });
    },
    resetForm1(formName) {
      this.$refs[formName].resetFields();
      //关闭弹窗
      this.Form = !this.Form;
      this.updateForm = !this.updateForm;
    },
  },

  watch: {
    "ruleForm.depTime"(newV, oldV) {
      let staytimeGap = new Date(this.ruleForm.depTime).getTime() - new Date(this.ruleForm.arrivalTime).getTime();
      let stayDay = Math.floor(staytimeGap / (3600 * 1000 * 24));//计算出相差天数
      let leave = staytimeGap % (3600 * 1000 * 24);
      let stayHour = Math.floor(leave / (3600 * 1000));//计算出小时数
      let leave1 = leave % (3600 * 1000);
      let stayMin = Math.floor(leave1 / (60 * 1000));//计算相差分钟数
      let leave2 = leave1 % (60 * 1000);
      let staySec = Math.floor(leave2 / 1000);//计算相差秒数
      this.ruleForm.duration = stayDay + "天" + stayHour + "时" + stayMin + "分" + staySec + "秒";
    },
    "ruleForm.arrivalTime"(newV, oldV) {
      let staytimeGap = new Date(this.ruleForm.depTime).getTime() - new Date(this.ruleForm.arrivalTime).getTime();
      let stayDay = Math.floor(staytimeGap / (3600 * 1000 * 24));
      let leave = staytimeGap % (3600 * 1000 * 24);
      let stayHour = Math.floor(leave / (3600 * 1000));
      let leave1 = leave % (3600 * 1000);
      let stayMin = Math.floor(leave1 / (60 * 1000));
      let leave2 = leave1 % (60 * 1000);
      let staySec = Math.floor(leave2 / 1000);
      this.ruleForm.duration = stayDay + "天" + stayHour + "时" + stayMin + "分" + staySec + "秒";
    },
  }
}
</script>

<style scoped>
.table {
  width: 90%;
  margin: auto;
  width: 500px;
  background-color: antiquewhite;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.add {
  width: 1281.33px;
  height: 100vh;
  /* background-color: rgba(227, 218, 218, 0.726); */
  top: -1px;
  left: -1px;
  position: absolute;
  z-index: 9;
}

.addFrom {
  width: 780px;
  background-color: aliceblue;
  z-index: 9;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 100px;

}

.updateFrom {
  width: 350px;
  height: 500px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;

  background-color: aliceblue;
}
</style>