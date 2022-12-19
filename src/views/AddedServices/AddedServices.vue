<template>
    <div class="common-layout">
        <el-container>
            <el-header height="30px">
                <el-row :gutter="20">
                    <el-col :span="4">
                    </el-col>
                    <el-col :span="16">
                        <el-steps :space="200" :active="1" simple>
                            <el-step title="乘机信息"  status='success'/>
                            <el-step title="增值服务" :icon="UploadFilled" />
                            <el-step title="支付" :icon="Picture" />
                        </el-steps>
                    </el-col>
                    <el-col :span="4">
                    </el-col>
                </el-row>
            </el-header>
            <el-divider />
            <el-container>
                <el-aside width="425px" style=";margin-top: 23px;margin-left: 20px;">
                    <el-card class="box-card2">
                        <!-- 订单飞机票 -->
                        <div v-for="(a, index) in store.state.ordersmax" :key="index">
                            <div class="a1">
                                <el-row>
                                    <el-col :span="1" class="line1">
                                    </el-col>
                                    <el-col :span="7" class="line1">
                                        <span>{{ a.dateOfJourney.toString().slice(0, 10) }}</span>
                                    </el-col>
                                    <el-col :span="3" class="line1">

                                    </el-col>
                                    <el-col :span="4" class="line1">
                                        <span>{{ a.source }}</span>
                                    </el-col>
                                    <el-col :span="3" class="line1">
                                        <span>---</span>
                                    </el-col>
                                    <el-col :span="4" class="line1">
                                        <span>{{ a.destination }}</span>
                                    </el-col>
                                    <el-col :span="1">
                                    </el-col>

                                </el-row>


                            </div>

                            <div class="a2">
                                <el-row class="el-row1" style="margin-top:8px;">
                                    <el-col :span="8" class="line2" style="margin-left: 35px;">
                                        <span>{{ a.airline }}</span>
                                    </el-col>
                                    <el-col :span="6" class="line2">
                                        <span>{{ a.flightInfoId }}</span>
                                    </el-col>
                                    <el-col :span="6" class="line2">

                                        <span v-if="store.state.seatType[0] == 'F'">商务舱</span>

                                        <span v-else-if="store.state.seatType[0] == 'Y'">经济舱</span>
                                    </el-col>
                                    <!-- <el-col :span="2" class="line2">

                                    </el-col> -->

                                </el-row>
                            </div>

                            <div class="a3">
                                <el-row class="row-bg" justify="space-evenly" style="margin-top:5px;">
                                    <el-col :span="6" style="font-size: 26px;">
                                        <span>{{ a.depTime }}</span>
                                    </el-col>
                                    <el-col :span="6" style="font-size: 12px;margin-top: 10px;">
                                        <span style="position: relative;top:3px;">
                                            <svg t="1670645198330" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="31664" width="16" height="16">
                                                <path
                                                    d="M554.666667 537.6l115.2 115.2-29.866667 29.866667-128-128V341.333333h42.666667v196.266667z m-21.333334 358.4C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z"
                                                    fill="#444444" p-id="31665"></path>
                                            </svg>
                                        </span>

                                        <span>{{ a.duration }}</span>
                                    </el-col>
                                    <el-col :span="6" style="font-size: 26px;">
                                        <span>{{ a.arrivalTime }}</span>
                                    </el-col>
                                    <br>
                                </el-row>

                            </div>

                            <div class="a7">
                                <el-row class="row-bg" justify="space-evenly">

                                    <el-col :span="4" style="font-size: 14px;">
                                        <span>{{ a.route.slice(0, 3) }}机场</span>
                                    </el-col>
                                    <el-col :span="8">
                                        <span style="">
                                            ==========
                                        </span>
                                    </el-col>
                                    <el-col :span="6" style="font-size: 14px;">
                                        <span>{{ a.route.substring(a.route.length - 3) }}机场</span>
                                    </el-col>
                                </el-row>
                                <el-divider border-style="dashed" />
                            </div>
                        </div>
                        <el-divider />
                        <!-- 每程订单价格 -->
                        <div class="a4" v-for="(a, index) in store.state.ordersmax" :key="index">
                            <el-row>
                                <el-col :span="8">
                                    <span>第 {{ index = index + 1 }} 程成人</span>
                                </el-col>
                                <el-col :span="4">

                                </el-col>
                                <el-col :span="6">

                                </el-col>
                                <el-col :span="6">
                                    <svg t="1669657670258" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="8477" width="16" height="16">
                                        <path
                                            d="M447.488 764.928l-197.632 0q-27.648-2.048-42.496-23.04t-17.92-46.592q3.072-25.6 17.92-41.984t42.496-18.432l197.632 0 0-64.512-197.632-1.024q-27.648-2.048-42.496-19.456t-17.92-44.032q3.072-25.6 17.92-41.984t42.496-18.432l147.456 0-137.216-241.664q-10.24-12.288-19.456-31.232t-8.192-41.472q5.12-28.672 20.48-46.592t57.344-23.04q24.576 2.048 44.032 16.896t31.744 32.256l155.648 284.672 171.008-286.72q12.288-17.408 31.744-30.72t44.032-16.384q15.36 1.024 28.16 4.096t22.528 10.24 16.384 20.48 9.728 34.816q0 29.696-20.48 56.32l-158.72 258.048 150.528 0q26.624 2.048 41.984 18.432t17.408 41.984q-2.048 26.624-17.92 45.056t-42.496 20.48l-195.584 1.024 0 62.464 196.608 0q26.624 2.048 41.984 20.48t17.408 44.032q-2.048 26.624-17.408 44.544t-41.984 19.968l-196.608-1.024 0 108.544q-4.096 87.04-95.232 87.04-45.056 0-70.144-21.504t-27.136-65.536l0-106.496z"
                                            p-id="8478"></path>
                                    </svg>
                                    <span v-if="store.state.seatType[index - 1] == 'Y'">{{ a.econmecyPrice }}</span>
                                    <span v-else-if="store.state.seatType[index - 1] == 'F'">{{ a.classPrice }}</span>
                                </el-col>
                            </el-row>

                        </div>
                        <el-row>
                            <el-col :span="8">
                                <br>
                                <div v-if="checked1 == true">
                                    <span>行李托运</span>
                                </div>
                                <br>
                                <div v-if="checked2 == true">
                                    <span> 订餐</span>
                                </div>

                            </el-col>
                            <el-col :span="4">

                            </el-col>
                            <el-col :span="6">

                            </el-col>
                            <el-col :span="6">
                                <br>
                                <div v-if="checked1 == true">
                                    <svg t="1669657670258" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="8477" width="16" height="16">
                                        <path
                                            d="M447.488 764.928l-197.632 0q-27.648-2.048-42.496-23.04t-17.92-46.592q3.072-25.6 17.92-41.984t42.496-18.432l197.632 0 0-64.512-197.632-1.024q-27.648-2.048-42.496-19.456t-17.92-44.032q3.072-25.6 17.92-41.984t42.496-18.432l147.456 0-137.216-241.664q-10.24-12.288-19.456-31.232t-8.192-41.472q5.12-28.672 20.48-46.592t57.344-23.04q24.576 2.048 44.032 16.896t31.744 32.256l155.648 284.672 171.008-286.72q12.288-17.408 31.744-30.72t44.032-16.384q15.36 1.024 28.16 4.096t22.528 10.24 16.384 20.48 9.728 34.816q0 29.696-20.48 56.32l-158.72 258.048 150.528 0q26.624 2.048 41.984 18.432t17.408 41.984q-2.048 26.624-17.92 45.056t-42.496 20.48l-195.584 1.024 0 62.464 196.608 0q26.624 2.048 41.984 20.48t17.408 44.032q-2.048 26.624-17.408 44.544t-41.984 19.968l-196.608-1.024 0 108.544q-4.096 87.04-95.232 87.04-45.056 0-70.144-21.504t-27.136-65.536l0-106.496z"
                                            p-id="8478"></path>
                                    </svg>
                                    <span>30</span>
                                </div>
                                <br>
                                <div v-if="checked2 == true">
                                    <svg t="1669657670258" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="8477" width="16" height="16">
                                        <path
                                            d="M447.488 764.928l-197.632 0q-27.648-2.048-42.496-23.04t-17.92-46.592q3.072-25.6 17.92-41.984t42.496-18.432l197.632 0 0-64.512-197.632-1.024q-27.648-2.048-42.496-19.456t-17.92-44.032q3.072-25.6 17.92-41.984t42.496-18.432l147.456 0-137.216-241.664q-10.24-12.288-19.456-31.232t-8.192-41.472q5.12-28.672 20.48-46.592t57.344-23.04q24.576 2.048 44.032 16.896t31.744 32.256l155.648 284.672 171.008-286.72q12.288-17.408 31.744-30.72t44.032-16.384q15.36 1.024 28.16 4.096t22.528 10.24 16.384 20.48 9.728 34.816q0 29.696-20.48 56.32l-158.72 258.048 150.528 0q26.624 2.048 41.984 18.432t17.408 41.984q-2.048 26.624-17.92 45.056t-42.496 20.48l-195.584 1.024 0 62.464 196.608 0q26.624 2.048 41.984 20.48t17.408 44.032q-2.048 26.624-17.408 44.544t-41.984 19.968l-196.608-1.024 0 108.544q-4.096 87.04-95.232 87.04-45.056 0-70.144-21.504t-27.136-65.536l0-106.496z"
                                            p-id="8478"></path>
                                    </svg>
                                    <span>20</span>
                                </div>
                            </el-col>
                        </el-row>




                        <div style="height: 80px;" v-if="store.state.ordersmax.length == 1">

                        </div>

                        <!-- 订单总价格 -->
                        <el-divider />
                        <div class="a5">
                            <span> {{ Price }}</span>
                            <br>
                        </div>
                    </el-card>
                </el-aside>

                <el-container>
                    <el-main>

                        <div>
                            <el-card class="box-card" style="height:427px;">
                                <template #header>
                                    <div class="card-header">
                                        <span>增值服务</span>
                                    </div>
                                </template>
                                <div>
                                    <el-checkbox @change="aa" v-model="checked1" label="行李托运(20kg起)" size="large" />
                                    <br>
                                    <el-checkbox @change="bb" v-model="checked2" label="订餐(20元)" size="large" />
                                </div>

                                <br>
                                <br>
                                <div class="a6" style="margin-top:100px">
                                    <el-button type="primary" @click="gogo" style="width:415px;height:45px;">
                                        去支付
                                    </el-button>
                                </div>

                                <el-divider />


                            </el-card>
                        </div>

                    </el-main>
                    <el-footer></el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>

</template>
   
<script setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus'
import { useStore } from "vuex"
import { onActivated, onBeforeMount } from '@vue/runtime-core';
import { ref } from 'vue'
//增值服务
const checked1 = ref(false)
const checked2 = ref(false)

//vuex
const store = useStore()
//router
const $router = useRouter()
const $route = useRoute()
//总价格
const Price = ref(0)
//生命周期挂载之前
onBeforeMount(() => {
    Price.value = $route.query.Price
    Price.value = Number(Price.value)
})

//多选框点击事件

function aa() {

    if (checked1.value == true) {
        console.log("a");
        Price.value = Price.value + 30

    } else {
        Price.value = Price.value - 30
    }
}

function bb() {

    if (checked2.value == true) {
        console.log("b");
        Price.value = Price.value + 20
    } else {
        Price.value = Price.value - 20
    }
}




function gogo() {
    if (1 == 1) {
        $router.push({
            path: "/pay",
            query: {
                Price: Price.value,
                num: store.state.ordersmax.length
            }
        })
    } else {
        ElMessage('请勾选订票须知')
    }
}


</script>

<style scoped>
.box-card2 {

    width: 90%;
    background: #f0f0f0;
}

.aaaaa {
    position: relative;
    top: 35px;
}

.a5 {
    position: relative;
    left: 70%;
    font-size: 40px;
    color: rgb(255, 145, 0);
}



.box-card {
    font-size: 22px;
    width: 100%;
}

.a4 {
    height: 30px;
}

.a5 {

    position: relative;
    left: 50%;
    font-size: 40px;
    color: rgb(255, 145, 0);
}


.line1 {
    color: #333;
    font-size: 16px;
    font-weight: 600;
}

.line2 {
    font-size: 12px;
    font-weight: 100;
    color: #181717;
}
</style>