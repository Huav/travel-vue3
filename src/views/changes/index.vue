<template>
    <el-tabs type="border-card">
        <el-tab-pane label="机票改签">
            <div>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <!-- 出发城市选择器 -->
                        <div class="radius">
                            <el-row :gutter="20">
                                <el-col :span="10">
                                    <div class="h2">
                                        <span id="bb">出发地</span>
                                        <div>
                                            <el-popover :width="550" trigger="click">
                                                <template #reference>
                                                    <el-button type="" class="btn" shadow="hover" text>
                                                        <slot>{{ fromCity1 }}</slot>
                                                    </el-button>
                                                </template>

                                            </el-popover>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <!--交换出发地和目的地按钮  -->
                                    <div class="h3" size="large">
                                        <el-button circle>
                                            <svg t="1669694974767" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="8914" width="18" height="18">
                                                <path
                                                    d="M511.706311 47.571459c-206.184943 0-380.966665 134.452201-441.454294 320.463686l383.691729 0L453.943746 183.260837l408.739195 328.425008-408.739195 328.425008L453.943746 655.334499 70.25304 655.334499c60.487629 186.011484 235.268328 320.463686 441.454294 320.463686 256.322853 0 464.113363-207.79051 464.113363-464.113363S768.029164 47.571459 511.706311 47.571459z"
                                                    p-id="8915"></path>
                                            </svg>
                                        </el-button>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="h2">
                                        <span id="bb">目的地</span>
                                        <div>
                                            <el-popover :width="550" trigger="click">
                                                <template #reference>
                                                    <el-button type="" class="btn" shadow="hover" text>
                                                        <slot>{{ fromCity2 }}</slot>
                                                    </el-button>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                    <!-- 时间选择器 -->
                    <el-col :span="8">

                        <div class="radius">
                            <div class="h4">
                                <span id="bb">新的出行时间</span>
                                <div class="demo-date-picker">
                                    <div class="">
                                        <el-date-picker @change="time" v-model="TravelTime" type="date"
                                            placeholder="重新选择出发时间" format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <!-- 时间选择器 -->
                    <el-col :span="8">
                        <div class="ccc">
                            <div class="h5">
                                <span id="bb">乘客类型</span>
                                <br>
                                <div>
                                    <el-checkbox>带儿童</el-checkbox>
                                    <el-checkbox>带婴儿</el-checkbox>
                                </div>

                            </div>
                        </div>

                    </el-col>
                </el-row>
                <!-- 初始地---目的地 -->
            </div>
            <br />
            <!-- 搜索按钮 -->
            <div class="h1">
                <div></div>
                <button class="button" @click="go">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                class="b2">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <span class="b1">搜索</span>
                </button>
            </div>
        </el-tab-pane>
    </el-tabs>

    <div>
        <router-view></router-view>
    </div>
</template>
   
  
<script  setup>
import { ref, reactive, toRefs, getCurrentInstance, onMounted, onBeforeMount } from 'vue'
import request from "@/axios/request.js"
import { useStore } from "vuex"
import { useRouter, } from 'vue-router'
import { useRoute } from 'vue-router'

//vuex

const store = useStore()
//飞机票
const airfarelist = ref([{
    "id": 40,
    "airline": "Jet Airways",
    "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
    "flightInfoId": "空客A310",
    "source": "Delhi",
    "destination": "Cochin",
    "route": "DEL → BOM → COK",
    "depTime": "07:05",
    "arrivalTime": "19:00",
    "duration": "11h 55m",
    "additionalInfo": "No info",
    "econmecyPrice": 14924.0,
    "classPrice": 15424,
    "totalSeat": 178,
    "seatFVacant": 16,
    "seatYVacant": 162,
    "totalPage": null
},
{
    "id": 63,
    "airline": "Multiple carriers",
    "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
    "flightInfoId": "空客A350",
    "source": "Delhi",
    "destination": "Cochin",
    "route": "DEL → BOM → COK",
    "depTime": "08:45",
    "arrivalTime": "19:00",
    "duration": "10h 15m",
    "additionalInfo": "No info",
    "econmecyPrice": 12524.0,
    "classPrice": 13024,
    "totalSeat": 288,
    "seatFVacant": 32,
    "seatYVacant": 256,
    "totalPage": null
},
{
    "id": 147,
    "airline": "Jet Airways",
    "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
    "flightInfoId": "空客A340",
    "source": "Delhi",
    "destination": "Cochin",
    "route": "DEL → ATQ → BOM → COK",
    "depTime": "20:00",
    "arrivalTime": "04:25 04 Jun",
    "duration": "8h 25m",
    "additionalInfo": "In-flight meal not included",
    "econmecyPrice": 15318.0,
    "classPrice": 15818,
    "totalSeat": 288,
    "seatFVacant": 32,
    "seatYVacant": 256,
    "totalPage": null
},
{
    "id": 205,
    "airline": "Multiple carriers",
    "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
    "flightInfoId": "空客A350",
    "source": "Delhi",
    "destination": "Cochin",
    "route": "DEL → BOM → COK",
    "depTime": "06:40",
    "arrivalTime": "19:00",
    "duration": "12h 20m",
    "additionalInfo": "No info",
    "econmecyPrice": 10877.0,

},])
//路由
const $router = useRouter()
const $route = useRoute()


//  出发地 fromCity1
const fromCity1 = $route.query.fromCity1


// 目的地fromCity2
const fromCity2 = $route.query.fromCity2
const oid = $route.query.oid

//时间选择器
const TravelTime = ref('')


function time() {

    store.commit('GETDATEOFJOURNEY', TravelTime.value)



}


function go() {
    // console.log(1);
    store.dispatch('getflight')
    // console.log(TravelTime);

    if (TravelTime.value == "") {
        alert('请选择新的出发时间')
    }
    else {
        // request({
        //     url: "/flights",
        //     method: "post",
        //     data: {
        //         source: fromCity1,
        //         destination: fromCity2,
        //         dateOfJourney: TravelTime.value,
        //     }
        // }).then((res) => {
        //     alert("请求成功!");

        //     airfarelist.value= res.data.data
        //  console.log("改签",airfarelist.value);
        // }, error => {
        //     console.log('错误', error)
        // });

        $router.push({
            path: '/changes/FlightTicketMax',
            query: {
                source: fromCity1,
                destination: fromCity2,
                dateOfJourney: TravelTime.value,
                oid: oid
            }
        })
    }

}
</script>
  
  
<style scoped>
.item .el-form-item__label {
    color: #00050a;
    font-weight: 1000;
}

.btn {
    width: 100px;
    height: 30px;
    background: #ffffff;
    background-attachment: fixed;
    /* color: #409EFF; */
    color: #000000;
    font-weight: 500;
    font-size: 20px;
}

.radius {
    height: 60px;
    width: 90%;
    border: 1px solid var(--el-border-color);
    border-radius: 100px;
    margin-top: 20px;

}

.ccc {
    height: 60px;
    width: 70%;
    border: 1px solid var(--el-border-color);
    border-radius: 100px;
    margin-top: 20px;

}


.h2 {
    position: relative;
    top: 0px;
}

.h3 {
    position: relative;
    top: 15px;
}

.h4 {
    position: relative;
    top: 0px;
    left: 30px;
}

.h5 {
    position: relative;
    top: 0px;
    left: 30px;
}

#PointerIcon {
    transform: rotate(90deg);
}

#bb {
    position: relative;
    left: 30px;
    float: left;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

/* 时间选择器 */
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
}




/*  */
.box-card {
    float: right;
}

/* 边框 */
.radius {
    height: 60px;
    width: 90%;
    border: 1px solid var(--el-border-color);
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 10px 10px 5px #d9d9d9;
}



#PointerIcon {
    transform: rotate(90deg);
}

.h1 {
    position: relative;
    left: 50%;
    top: 15px;
}

/* 搜索按钮 */
.button {
    font-family: inherit;
    font-size: 20px;
    background: rgb(255, 166, 0);
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 40px;
    overflow: hidden;
    transition: all 0.2s;
}

.b1 {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

.b2 {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

.button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

.button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

.button:hover span {
    transform: translateX(5em);
}

.button:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}
</style>