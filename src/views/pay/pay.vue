<template>
  <el-container>
    <el-header height="30px">
      <el-row :gutter="20">
        <el-col :span="4">
        </el-col>
        <el-col :span="16">
          <el-steps :space="200" :active="1" simple>
            <el-step title="乘机信息" status='success' />
            <el-step title="增值服务" status='success' />
            <el-step title="支付" />
          </el-steps>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
    </el-header>
    <el-divider />
    <el-container>
      <el-container>
        <el-main>
          <div>
            <el-card class="box-card1">
              <template #header>
                <div class="card-header">
                  <span>订单支付</span>
                </div>
                <el-result icon="success" title="预定机票成功" sub-title="请选择支付方式 支付宝/微信">
                  <template #extra>
                    <el-button type="primary" @click="gogo">微信</el-button>
                    <el-button type="primary" @click="gogo">支付宝</el-button>
                  </template>
                </el-result>
                <el-card class="box-card">
                  <div>
                    <span>订单金额：</span>
                    <span class="hua">
                      {{ $route.query.Price }}
                    </span>
                  </div>
                  <div style="margin-top: 10px; ">
                    <span>
                      <TimeRecorderer></TimeRecorderer>
                    </span>
                  </div>
                  <div class="card">
                    <div v-if="store.state.ordersmax[0] != ''">
                      <div v-if="($route.query.num == 1)">
                        <span>单程机票 :{{ store.state.ordersmax[0].source }}===>{{ store.state.ordersmax[0].destination
                        }}</span>
                      </div>
                      <div v-if="($route.query.num == 2)">
                        <span>第一程机票 :{{ store.state.ordersmax[0].source }}===>{{
                            store.state.ordersmax[0].destination
                        }}</span>
                        <br>
                        <span> 第二程机票 :{{ store.state.ordersmax[1].source }}===>{{
                            store.state.ordersmax[1].destination
                        }}</span>
                      </div>
                      <div v-if="($route.query.num == 3)">
                        <span>第一程机票 :
                          {{ store.state.ordersmax[0].source }}===>{{ store.state.ordersmax[0].destination }}</span>
                        <br>
                        <span> 第二程机票 :
                          {{ store.state.ordersmax[1].source }}===>{{ store.state.ordersmax[1].destination }}
                        </span>
                        <br>
                        <span>
                          第三程机票 :
                          {{ store.state.ordersmax[2].source }}===>{{ store.state.ordersmax[2].destination }}</span>
                      </div>


                    </div>

                    <div>
                      <span>
                        乘机人：{{ store.state.userInfo.username }}
                        <br>
                        乘机证件：(身份证){{ store.state.userInfo.usersfz }}
                      </span>
                    </div>
                  </div>
                </el-card>
              </template>
              <div>
              </div>
            </el-card>
          </div>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onBeforeMount, ref } from '@vue/runtime-core';
import { ElMessage } from 'element-plus'
import { useStore } from "vuex"
import TimeRecorderer from "@/components/Time Recorder/TimeRecorder.vue";
//vuex
const store = useStore()

const $router = useRouter()

const $route = useRoute()

//价格
const Price = ref(0)

onBeforeMount(() => {
  Price.value = $route.query.Price
  Price.value = Number(Price.value)
})

function gogo() {

  ElMessage({

    message: '您已成功支付订单',
    type: 'success',
  })
  store.dispatch("ordersmax", Price.value)
  store.commit("num")

  $router.push('/home')

  setTimeout(function () {
    store.commit("EmptyOrdersmax", Price.value)
    console.log('ddddddddddd', store.state.ordersmax);
  }, 500);


}


</script>

<style scoped>
.box-card1 {
  width: 100%;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px;
}

.box-card {
  position: relative;
  width: 100%;
  height: 140px;
  background-color: rgb(255, 255, 255);
}

.card {
  position: relative;
  top: -88px;
  left: 51.5%;
  width: 50%;
  background-color: rgb(241, 241, 241);
}

.card1 {
  position: relative;
  top: 200px;

  width: 80%;
  height: 80px;
  background-color: rgb(255, 255, 255);
}

.hua {
  left: 70%;
  font-size: 30px;
  color: rgb(255, 145, 0);
}
</style>