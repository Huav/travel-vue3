<template>
    <div class="common-layout">
        <el-container>
            <!-- 导航条 -->
            <el-header height="30px">
                <el-row :gutter="20">
                    <el-col :span="4">
                    </el-col>
                    <el-col :span="16">
                        <el-steps :space="200" :active="1" simple>
                            <el-step title="乘机信息" :icon="Edit" />
                            <el-step title="增值服务" :icon="UploadFilled" />
                            <el-step title="支付" :icon="Picture" status='success' />
                        </el-steps>
                    </el-col>
                    <el-col :span="4">
                    </el-col>
                </el-row>
            </el-header>

            <el-divider />
            <el-container>
                <el-aside width="425px" style=" margin-top: 23px;margin-left: 20px;">
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
                            <!-- 乘机人信息 -->
                            <div class="aa">
                                <el-card class="box-card">
                                    <template #header>
                                        <div class="card-header">
                                            <span style="margin-left:30px; ">乘机人信息</span>
                                            <el-switch v-model="value1" class="mb-2" active-text="王小明" @change="user" />
                                        </div>
                                    </template>
                                    <div>
                                        <div class="aaaaa">
                                            <!-- <span>姓名</span> -->
                                        </div>
                                        <div class="group">
                                            <input required="" type="text" class="input" v-model="xingming">
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>你的姓名</label>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="group">
                                        <input required="" type="text" class="input" v-model="shengfengzheng">
                                        <span class="highlight"></span>
                                        <span class="bar"></span>
                                        <label>你的身份证</label>
                                    </div>
                                    <br>
                                    <div class="group">
                                        <input required="" type="text" class="input" v-model="shoujihaoma">
                                        <span class="highlight"></span>
                                        <span class="bar"></span>
                                        <label>你的手机号码</label>
                                    </div>
                                    <br>

                                    <el-button type="primary" @click="gogo"
                                        style="width:415px;height:45px;margin-left: 50px;">
                                        下一步
                                    </el-button>
                                    <el-divider />
                                    <div class="a6">
                                        <el-button type="primary" link @click="add" :icon="Edit">
                                            新增乘机人
                                        </el-button>
                                    </div>
                                </el-card>
                            </div>
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
import { ref } from "@vue/reactivity";
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import { useStore } from "vuex"
import { onActivated, onBeforeMount } from '@vue/runtime-core'

//vuex
const store = useStore()
//路由
const $router = useRouter()

//用户基本信息
const xingming = ref('')
const shengfengzheng = ref('')
const shoujihaoma = ref('')

const value1 = ref(false)
const value2 = ref(false)
//收集乘机人信息数组
let aa = []

//新增乘机人shoujihaoma
function add() {
    console.log("新增乘机人");

}
const Price = ref(0)

let orderlist = []

onBeforeMount(() => {
    // request({
    //         url: "/user",
    //         method: "get",
    //         data: {
    //         }
    //       }
    //       ).then((respones) => {
    //         console.log(respones);
    //         // context.commit("OID", respones.data.data)

    //       }, error => {
    //         console.log('错误', error)
    //       });
})

//缓存组件的生命周期，类似挂载完成时
onActivated(() => {
    Price.value = 0
    orderlist = store.state.ordersmax
    console.log(orderlist);
    for (let a = 0; a < store.state.ordersmax.length; a++) {
        if (store.state.seatType[a] == 'Y') {
            Price.value = Price.value + store.state.ordersmax[a].econmecyPrice
        } else {
            Price.value = Price.value + store.state.ordersmax[a].classPrice
        }
    }
}
)

//用户信息快捷键
function user() {
    if (value1.value) {
        xingming.value = '王小明'
        shengfengzheng.value = '44022214113563432323'
        shoujihaoma.value = "13415619882"
    } else {
        xingming.value = ''
        shengfengzheng.value = ''
        shoujihaoma.value = ""
    }

}

//下一步
function gogo() {
    aa.push(xingming.value, shengfengzheng.value, shoujihaoma.value)

    if (aa[0] != "" && aa[1] != "" && aa[2] != "") {
        console.log(aa);
        store.commit("useradd", aa)
        store.dispatch("orders",)
        // store.dispatch("orders")
        $router.push({
            path: '/addedServices',
            query: {
                Price: Price.value
            }
        })
        aa = []
    }
    else {
        ElMessage({
            showClose: true,
            message: '请完善个人信息',
            type: 'warning',
        })

        aa = []
    }

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
    font-size: 22px;
    width: 100%;
}

.box-card2 {

    width: 90%;
    background: #f0f0f0;
}


/* 输入框 */
.group {
    position: relative;
    left: 60px;
}

.input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 400px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
}

.input:focus {
    outline: none;
}

label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.input:focus~label,
.input:valid~label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
}

.bar {
    position: relative;
    display: block;
    width: 200px;
}

.bar:before,
.bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.bar:before {
    left: 50%;
}

.bar:after {
    right: 50%;
}

.input:focus~.bar:before,
.input:focus~.bar:after {
    width: 50%;
}

.highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

.input:focus~.highlight {
    animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
    from {
        background: #5264AE;
    }

    to {
        width: 0;
        background: transparent;
    }
}

.aaaaa {
    position: relative;
    top: 35px;
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

.a6 {
    position: relative;
    left: 45%;

}

.a7 {
    position: relative;
    top: 10px;

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
    