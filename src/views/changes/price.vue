<template>
  <el-container>
    <el-header height="30px">
      <el-row :gutter="20">
        <el-col :span="4">
        </el-col>
        <el-col :span="16">
          <el-steps :space="200" :active="1" simple>
            <el-step title="确定改签" status='success' />
            <el-step title="订单补差额" />
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
            <el-card class="box-card">Price
              <template #header>
                <div class="card-header">
                  <span>订单改签补差额</span>
                </div>
                <el-result icon="success" title="改签前后订单价格有变动" sub-title="请选择补差额方式 支付宝/微信">
                  <template #extra>
                    <span v-if="Price > 0">您需要再补付费用共：{{ Price }}元</span>
                    <span v-if="Price < 0">多出的金额我们将返回到您的账户上：{{ Price }}元</span>
                    <br>
                    <br>
                    <el-button type="primary" @click="gogo">微信</el-button>
                    <el-button type="primary" @click="gogo">支付宝</el-button>
                  </template>
                </el-result>
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
import { ref } from "@vue/reactivity";
import request from "@/axios/request.js";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { onBeforeMount } from "@vue/runtime-core";
//vuex
const store = useStore();
//路由
const $router = useRouter();
const $route = useRoute();

let Price = 0

onBeforeMount(() => {
  Price = $route.query.Price
  Price = Number(Price)
})

function gogo() {
  request({
      url: "/orders/ticketChange",
      method: "post",
      data: {
      },
    }).then(
      (respones) => {
        ElMessage({
          showClose: true,
          message: '您已选择新的订单',
          type: 'success',
        })
        console.log(respones);

      },
      (error) => {
        console.log("错误", error);
      }
    );
  $router.push({
          path: "/Myorder",
          query: {
            // Price: respones.data.data.a
          }
        });
  ElMessage({
          showClose: true,
          message: '您已成功改签',
          type: 'success',
        })
}

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
</style>