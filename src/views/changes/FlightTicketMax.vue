<template>
  <!-- 最外层卡片 -->
  <el-card class="box-card">
    <!-- 卡片布局 -->
    <el-row :gutter="0">
      <!-- 航空公司 -->
      <el-col :span="3">
        <div>
          <el-dropdown :hide-on-click="false" trigger="click" split-button>
            <span class="el-dropdown-link"> 航空公司 </span>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 多选框  -->
                <div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked1" label="Option 1" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked2" label="Option 2" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked3" label="Option 3" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
      <!-- 机场 -->
      <el-col :span="3">
        <div>
          <el-dropdown trigger="click" split-button>
            <span class="el-dropdown-link"> 起飞机场 </span>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 多选框  -->
                <div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked4" label="Option 4" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked5" label="Option 5" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked6" label="Option 6" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
      <!-- 更多 -->
      <el-col :span="3">
        <div>
          <el-dropdown trigger="click" split-button>
            <span class="el-dropdown-link"> 更多 </span>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 多选框  -->
                <div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked7" label="Option 7" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked8" label="Option 8" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                  <div>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-checkbox v-model="checked9" label="Option 9" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>

      <el-col :span="3"> </el-col>
      <el-col :span="3"> </el-col>
      <!-- 低价优先 -->

      <el-col :span="2">
        <el-button :type="type1" link @click="button1"> 低价优先 </el-button>
      </el-col>
      <!-- 耗时短-长 -->
      <el-col :span="2">
        <el-button :type="type2" link @click="button2"> 耗时短-长 </el-button>
      </el-col>
      <!-- 到达早-晚 -->
      <el-col :span="2">
        <el-button :type="type3" link @click="button3"> 到达早-晚 </el-button>
      </el-col>
      <!-- 起飞早-晚 -->
      <el-col :span="2">
        <el-button :type="type4" link @click="button4"> 起飞早-晚 </el-button>
      </el-col>
    </el-row>
    <!-- 下拉菜单 -->
  </el-card>
  <br />
<!-- airfarelist -->
  <div v-for="(b, index) in airfarelist" :key="index">
    <el-card class="box-card2" shadow="hover">
      <el-row>
        <!-- logo -->
        <el-col :span="6">
          <div>（航空logo）{{}}</div>
        </el-col>
        <!-- 航空公司 -->
        <el-col :span="6">
          <div>
            <span>{{ b.airline }}</span>
            <h2>{{}}</h2>
            <div>
              <!-- 飞机类型 -->
              <span>{{ b.flightInfoId }}</span>
            </div>
          </div>
        </el-col>
        <!-- 时间机场 -->
        <el-col :span="6">
          <div>
            <!-- 飞行时间 -->
            <span>{{ b.depTime }}------{{ b.arrivalTime }}</span>
            <h2>{{}}</h2>
            <div>
              <span>{{ b.route.slice(0, 3) }}机场---{{
                  b.route.substring(b.route.length - 3)
              }}机场</span>
            </div>
          </div>
        </el-col>
        <!-- 预约按钮 -->
        <el-col :span="6">
          <div>
            <!-- <el-button @click="xiala(b.id)">订票</el-button> -->
            <el-popover placement="bottom" :width="600" trigger="hover">
              <template #reference>
                <el-button style="margin-right: 16px">订票</el-button>
              </template>
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane name="first" disabled>User</el-tab-pane>
                <el-tab-pane name="second" disabled>Config</el-tab-pane>
                <el-tab-pane name="second" disabled>Config</el-tab-pane>
                <el-tab-pane label="经济舱" name="third">
                  <div class="hhhh">
                    <div class="hhhhh">
                      <el-row>
                        <el-col :span="20">
                          <span>改退{{}}68元起</span>
                          <el-divider direction="vertical" />
                          <span>托运行李额30KG</span>
                          <el-divider direction="vertical" />
                          <span>行程单</span>
                          <el-divider direction="vertical" />
                          <span> </span>
                          <el-divider direction="vertical" />
                          <span>经济舱五折{{ b.econmecyPrice }}元</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="hhh">
                            <!-- 订票按钮 -->
                            <el-button @click="gogo1(index)">改签</el-button>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-tab-pane>

                <el-tab-pane label="公务舱" name="fourth">
                  <div class="hhhh">
                    <div class="hhhhh">
                      <el-row>
                        <el-col :span="20">
                          <span>提前改期免费</span>
                          <el-divider direction="vertical" />
                          <span>托运行李额30KG</span>
                          <el-divider direction="vertical" />
                          <span>行程单</span>
                          <el-divider direction="vertical" />
                          <span> </span>
                          <el-divider direction="vertical" />
                          <span>公务舱{{ b.classPrice }}元</span>
                        </el-col>
                        <el-col :span="4">
                          <div class="hhh">
                            <!-- 订票按钮 -->
                            <el-button @click="gogo2(index)">改签 </el-button>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-popover>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
    
<script setup>
import { useStore } from "vuex";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import request from "@/axios/request.js";

//vuex
const store = useStore();
//vue-router
const $router = useRouter();
const $route = useRoute();

let a = store.state.num - 1;

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const checked8 = ref(false);
const checked9 = ref(false);

const type1 = ref("");
const type2 = ref("");
const type3 = ref("");
const type4 = ref("");
//低价优先
function button1() {
  type1.value = "primary";
  type2.value = "";
  type3.value = "";
  type4.value = "";
  // store.dispatch("getcondition", 0)
  console.log(1);
}
//耗时短-长
function button2() {
  type2.value = "primary";
  type1.value = "";
  type3.value = "";
  type4.value = "";
  // store.dispatch("getcondition", 2)
  console.log(2);
}
//到达早-晚
function button3() {
  type3.value = "primary";
  type2.value = "";
  type1.value = "";
  type4.value = "";
  // store.dispatch("getcondition", 4)
  console.log(3);
}
//起飞早-晚
function button4() {
  type4.value = "primary";
  type2.value = "";
  type3.value = "";
  // type1.value = ""
  // store.dispatch("getcondition", 6)
  console.log(4);
}
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

},]);
//订票弹出页
const oid = $route.query.oid
const activeName = ref("third");

console.log("1243321243546", $route.query.airfarelist);

onBeforeMount(() => {
  request({
    url: "/flights",
    method: "post",
    data: {
      source: $route.query.source,
      destination: $route.query.destination,
      dateOfJourney: $route.query.dateOfJourney,
    },
  }).then(
    (res) => {
      airfarelist.value = res.data.data;

      console.log("改签请求机票成功", res.data);
    },
    (error) => {
      console.log("错误", error);
    }
  );
});
//订票按钮事件gogo()经济舱
function gogo1(index) {
  store.commit("changes", airfarelist.value[index])
  $router.push({
    path: "/changesorder",
    query: {
      seatType: "Y",
      oid: oid
    }
  });
  //公务舱
}

function gogo2(index) {
  store.commit("changes", airfarelist.value[index])
  $router.push({
    path: "/changesorder",
    query: {
      seatType: "Y",
      oid: oid
    }
  });

}
</script>
    
    
<style scoped>
.box-card {
  width: 100%;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

/* 卡片布局 */
.box-card2 {
  width: 100%;
  min-height: 70px;
}

.el-row {
  margin-bottom: 0px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}

/* 下拉面板的实现 */
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.hhh {
  position: relative;
  top: -5px;
  left: 10px;
}

.hhhh {
  height: 50px;
}

.hhhhh {
  position: relative;
  top: 10px;
}
</style>