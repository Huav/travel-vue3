<template>
    <div>
    <el-input v-model="aid" placeholder="请输入飞机id(aid)" style="width:400px;height: 40px;"></el-input>
    <el-button  type="primary" :icon="Search" style="height: 40px;" @click="selectaid(aid)">
      <search style="width: 1em; height: 1em;"/>
      查询
    </el-button>
    <el-button  type="primary" @click="addairplane" style="height: 40px;width: 74px;" >
     添加
    </el-button>    
  </div>

  <el-table :data="airplaneData" border style="width: 100%;margin-top: 30px;">
    <el-table-column label=" 记录编号" prop="aid"></el-table-column>
    <el-table-column label=" 飞机类型" prop="flightType"></el-table-column>
    <el-table-column label=" 头等舱座位数量" prop="seatF"></el-table-column>    
    <el-table-column label="  头等舱座位编号规则" prop="rulesF"></el-table-column>
    <el-table-column label=" 经济舱座位数量" prop="seatY"></el-table-column>
    <el-table-column label=" 经济舱座位编号规则" prop="rulesY"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template v-slot="scope">
        <el-button @click="deleteairplane(scope.$index,scope.row)" type="primary" size="small"
        style="width: 40px;float: left;height: 32px;background-color: #409eff; ">
          删除
        </el-button>
        <el-button @click="updateairplane(scope.$index,scope.row) " type="primary" size="small"
        style="width: 40px;float: left;height: 32px;background-color: #409eff; ">
          修改
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <div class="airplaneFrom" v-show="airplaneForm">
  <div class="airFrom1" v-show="Form1">
    <el-form :model="airFrom1" ref="airFrom1" label-width="130px" class="demo-airFrom1" style="margin-top: 35px;">        
        <!-- <el-form-item label="记录编号:" prop="aid" >
            <el-input v-model="airFrom1.aid"></el-input>
        </el-form-item> -->
        <el-form-item label="飞机类型:" prop="flightType" >
            <el-input v-model="airFrom1.flightType"></el-input>
        </el-form-item>
        <el-form-item label="头等舱座位数量:" prop="seatF" >
            <el-input v-model="airFrom1.seatF"></el-input>
        </el-form-item>
        <el-form-item label="头等舱座位:" prop="rulesF" >
            <el-input v-model="airFrom1.rulesF"></el-input>
        </el-form-item>   
        <el-form-item label="经济舱座位数量:" prop="seatY" >
            <el-input v-model="airFrom1.seatY"></el-input>
        </el-form-item>
        <el-form-item label="经济舱座位:" prop="rulesY" >
            <el-input v-model="airFrom1.rulesY"></el-input>
        </el-form-item>
        
    </el-form>
    <div style="margin-top:60px">
    <el-button type="primary" @click="submit1('airFrom1')">确认</el-button>
    <el-button @click="reset1('airFrom1')">取消</el-button>
  </div>
  </div>

  <div class="airFrom2" v-show="Form2">
    <el-form :model="airFrom2" ref="airFrom2" label-width="130px" class="demo-airFrom2" style="margin-top: 35px;">        
        <!-- <el-form-item label="记录编号:" prop="aid" >
            <el-input v-model="airFrom2.aid"></el-input>
        </el-form-item> -->
        <el-form-item label="飞机类型:" prop="flightType" >
            <el-input v-model="airFrom2.flightType"></el-input>
        </el-form-item>
        <el-form-item label="头等舱座位数量:" prop="seatF" >
            <el-input v-model="airFrom2.seatF"></el-input>
        </el-form-item>
        <el-form-item label="头等舱座位:" prop="rulesF" >
            <el-input v-model="airFrom2.rulesF"></el-input>
        </el-form-item>   
        <el-form-item label="经济舱座位数量:" prop="seatY" >
            <el-input v-model="airFrom2.seatY"></el-input>
        </el-form-item>
        <el-form-item label="经济舱座位:" prop="rulesY" >
            <el-input v-model="airFrom2.rulesY"></el-input>
        </el-form-item>
        
    </el-form>
    <div style="margin-top:60px">
    <el-button type="primary" @click="submit2('airFrom2')">确认</el-button>
    <el-button @click="reset2('airFrom2')">取消</el-button>
  </div>
  </div>

</div>
</template>
<script>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import res from '@/axios/request1.js'
export default{
    data() {
        return {
            aid:'',
            airplaneForm:false,
            Form1:false,
            Form2:false,
            //表格数据
            airplaneData: [
                // {
                //     "aid": 1,
                //     "flightType": "空客A350",
                //     "seatF": "32",
                //     "rulesF": "8-D",
                //     "seatY": "256",
                //     "rulesY": "32-H",
                // },
                // {
                //     "aid": 2,
                //     "flightType": "空客A340",
                //     "seatF": "32",
                //     "rulesF": "8-D",
                //     "seatY": "256",
                //     "rulesY": "32-H",
                // },
                // {
                //     "aid": 3,
                //     "flightType": "空客A330",
                //     "seatF": "32",
                //     "rulesF": "8-D",
                //     "seatY": "180",
                //     "rulesY": "30-F",
                // },
                // {
                //     "aid": 4,
                //     "flightType": "空客A320",
                //     "seatF": "36",
                //     "rulesF": "9-D",
                //     "seatY": "256",
                //     "rulesY": "32-H",
                // },
                // {
                //     "aid": 5,
                //     "flightType": "空客A310",
                //     "seatF": "16",
                //     "rulesF": "4-D",
                //     "seatY": "162",
                //     "rulesY": "27-F",
                // },
            ],
            //表单数据
            airFrom1:{
              aid:'',flightType:'',seatF:'',seatY:'',rulesF:'',rulesY:''
            },
            airFrom2:{
              aid:'',flightType:'',seatF:'',seatY:'',rulesF:'',rulesY:''
            },
        }
    },

    mounted() {
        this.getairplaneData()
        //进入页面执行getairplaneData方法
    },
    methods: {
//查询列表接口
    //进入页面请求打折的数据
    getairplaneData() {
      let that = this
      res({
        url: '',
        method: 'post',
      }).then(function (response) {
        console.log(response);
        // that.discountData = response.data.data;
        that.airplaneData = response.data;
        console.log(that.airplaneData);
      }).catch(function (error) {
        console.log("请求失败");
        console.log(error);
      });

    },

      //添加打开表单
      addairplane() {
        this.airplaneForm = !this.airplaneForm;
        this.Form1 = !this.Form1;
        
      },

      //修改表单
      updateairplane(index, row) {
        this.airplaneForm = !this.airplaneForm;
        this.Form2 = !this.Form2;
        //对弹出层中的修改表单赋值
        this.airFrom2.aid = row.aid
        this.airFrom2.flightType = row.flightType
        this.airFrom2.seatF = row.seatF
        this.airFrom2.seatY = row.seatY
        this.airFrom2.rulesF = row.rulesF
        this.airFrom2.rulesY = row.rulesY
      },

      //添加表单提交
      submit1(formName) {
        res({
          url: 'airplane/addAirplane',
          method: 'post',
          data: this.airFrom1,
        });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('添加成功!');
            //关闭弹窗
            this.Form1 = !this.Form1;
            this.airplaneForm = !this.airplaneForm;
          
          } else {
            console.log('添加失败!');
            return false;       
          }
        });
      },

      //修改表单提交
      submit2(formName) {
        res({
          url: 'airplane/updateAirplane',
          method: 'post',
          data: this.airFrom2,
        })
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('添加成功!');
            //关闭弹窗
            this.Form2 = !this.Form2;
            this.airplaneForm = !this.airplaneForm;
          
          } else {
            console.log('添加失败!');
            return false;       
          }
        });
        
      },
      //搜索
      selectaid(aid) {
      let that = this 
      res({
        url: 'airplane/selectAirplane',
        method: 'post',
        params: {
          id: aid,
        }
        
      }).then(function (response){
        console.log(response);
        that.airplaneData = response.data.data;
        console.log(that.airplaneData);
      }).catch(function (error) {
        console.log("请求失败");
        console.log(error);
      });
      
    },
      //重置表单
     reset1(formName){ 
      this.$refs[formName].resetFields();
      this.Form1 = !this.Form1;
      this.airplaneForm = !this.airplaneForm;
     
     },
     reset2(formName){ 
      this.$refs[formName].resetFields();
      this.Form2 = !this.Form2;
      this.airplaneForm = !this.airplaneForm;
     
     },
     //删除表单的一行数据
     deleteairplane(index,row){
      res({
            url: "airplane/deleteAirplane",
            method: "post",
            params: {
              id:row.aid
            }
          }).then(res => {
            if (res.data.code === 200) {
              this.$message.success("删除成功！");
              this.getairplaneData();
              
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
      Delete, Edit, Search, Share, Upload, 
    },
    }

}

</script>

<style>
.airplaneFrom{
  width:1281.33px;
  height: 100vh;
 
  top:-1px;
  left: -1px;
  position: absolute;
  z-index: 9;
}
.airFrom1 {
  width: 450px;
  height: 400px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}
.airFrom2 {
  width: 450px;
  height: 400px;
  margin: auto;
  border: 3px solid rgb(53, 140, 202);
  padding: 10px;
  margin-top: 80px;
  background-color: aliceblue;
}
</style>