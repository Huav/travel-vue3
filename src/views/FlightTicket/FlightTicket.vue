<template>
  <div class="id111">
    <div class="span1">
      <div class="lead">
        第{{ store.state.num }}程：
      </div>

      <div class="address">
        <span class="address1">{{ store.state.sourcelist[(a = store.state.num - 1)] }}</span>
        <span> > </span>
        <span class="address1">{{ store.state.destinationlist[(a = store.state.num - 1)] }}</span>

        <span class="time">{{ store.state.dateOfJourneylist[(a = store.state.num - 1)] }}</span>
        <span class="time">
          {{}}周二
        </span>

      </div>
    </div>
    <br />

    <!-- 最外层卡片 -->
    <!-- 框筛选-->

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

    <!-- <br /> -->
    <!-- 下面是表格 -->

    <div v-for="b in store.state.airfarelist" :key="b.id">
      <el-card class="box-card2" shadow="hover">
        <el-row class="el-row1">

          <!-- logo -->
          <el-col :span="6" class="box-span1">
            <div class="box-span1-div"> 航空logo</div>
          </el-col>
          <!-- 航空公司 -->
          <el-col :span="6" style="margin-top: 10px;margin-left: -100px;">
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
              <span style="font-size: 26px;">{{ b.depTime }}------{{ b.arrivalTime }}</span>
              <h2>{{}}</h2>
              <div>
                <span>{{ b.route.slice(0, 3) }}机场---{{
                    b.route.substring(b.route.length - 3)
                }}机场</span>
              </div>
            </div>
          </el-col>

          <div style="margin-top: 20px;margin-left: 40px;">
            <span>
              <svg t="1670688705298" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="9803" width="16" height="16">
                <path
                  d="M419.314675 761.0202 227.008621 761.0202c-17.935721-1.325779-31.718956-8.798793-41.349706-22.41661S170.212983 709.873109 168.221882 693.268033c1.991101-16.609942 7.806283-30.227759 17.437033-40.855884s23.413985-16.605077 41.349706-17.930856l192.306054 0 0-62.777455-192.306054-0.99251c-17.935721-1.330644-31.718956-7.639649-41.349706-18.933096S170.212983 526.201646 168.221882 508.930031c1.991101-16.605077 7.806283-30.222894 17.437033-40.851019 9.63075-10.628125 23.413985-16.605077 41.349706-17.935721l143.482118 0L236.971424 214.991469c-6.642274-7.968053-12.951279-18.09749-18.928231-30.388312-5.981817-12.287173-8.63824-25.742004-7.972918-40.352331 3.321745-18.601043 9.964019-33.714922 19.926822-45.336773 9.962803-11.6255 28.563846-19.09973 55.798263-22.420259 15.94462 1.330644 30.227759 6.807692 42.846985 16.438442 12.624091 9.635615 22.918947 20.097105 30.886999 31.386903l151.455036 277.000216 166.396199-278.991317c7.972918-11.293447 18.26899-21.25625 30.891865-29.89449 12.619226-8.632159 26.901149-13.948654 42.84212-15.939755 9.967668 0.665322 19.09973 1.991101 27.404701 3.985851 8.300106 1.991101 15.607702 5.31163 21.917923 9.964019 6.310221 4.651173 11.626716 11.293447 15.94462 19.925605 4.31912 8.63824 7.474231 19.931687 9.464115 33.881557 0 19.2615-6.642274 37.529273-19.926822 54.800888L651.478022 450.143292l146.470594 0c17.270399 1.330644 30.888216 7.307596 40.851019 17.935721 9.962803 10.628125 15.612567 24.245942 16.938346 40.851019-1.325779 17.271615-7.136096 31.885591-17.437033 43.84436-10.296072 11.953904-24.079307 18.601043-41.349706 19.926822l-190.310088 0.997375 0 60.782706 191.307463 0c17.270399 1.325779 30.888216 7.968053 40.851019 19.926822 9.962803 11.953904 15.612567 26.235827 16.938346 42.846985-1.325779 17.270399-6.974327 31.718956-16.938346 43.340807-9.962803 11.626716-23.58062 18.102355-40.851019 19.433l-191.307463-0.997375 0 105.619575c-2.661288 56.463586-33.548288 84.695378-92.668296 84.695378-29.225519 0-51.979047-6.974327-68.252071-20.929062-16.276673-13.94987-25.076682-35.201254-26.40611-63.766316L419.314675 761.0202 419.314675 761.0202zM419.314675 761.0202"
                  p-id="9804" fill="#fc7a02"></path>
              </svg>
              <span style="color:#fc7a02 ;font-weight:900;font-size: 26px;">
                {{ b.econmecyPrice }}

              </span>
              <span style="color:#fc7a02 ;font-weight:900;font-size: 16px;">
                起
              </span>
              <div>
                <span style="color:#047972 ;font-weight:400;font-size: 8px;margin-left: 40px;">
                  经济舱9.5折
                </span>
              </div>

            </span>
          </div>
          <!-- 预约按钮 -->
          <el-col :span="6" style="margin-top: ;margin-left: -70px;">

            <div>
              <!-- <el-button @click="xiala(b.id)">订票</el-button> -->
              <el-popover placement="bottom" :width="600" trigger="hover">

                <template #reference>
                  <el-button style="margin-top: 28px;margin-left: 100px;">订票</el-button>
                </template>
                <el-tabs v-model="activeName" class="demo-tabs">
                  <el-tab-pane name="first" disabled>User</el-tab-pane>
                  <el-tab-pane name="second" disabled>Config</el-tab-pane>
                  <el-tab-pane name="second" disabled>Config</el-tab-pane>
                  <el-tab-pane name="second" disabled>Config</el-tab-pane>
                  <el-tab-pane name="second" disabled>Config</el-tab-pane>
                  <el-tab-pane label="经济舱预定" name="third">
                    <div class="hhhh">
                      <div class="hhhhh">
                        <el-row>
                          <el-col :span="20">
                            <span>改退{{}}68元起</span>
                            <el-divider direction="vertical" />
                            <span style="color:#409eff">托运行李额30KG</span>
                            <el-divider direction="vertical" />
                            <span>行程单</span>

                            <el-divider direction="vertical" />
                            <span> </span>
                            <el-divider direction="vertical" />

                            <span>经济舱</span>
                            <span style="color:#fc7a02 ;font-weight:900;font-size: 26px;">{{ b.econmecyPrice }}</span>
                            <span>元</span>
                          </el-col>
                          <el-col :span="4">
                            <div class="hhh">
                              <!-- 订票按钮 -->
                              <el-button @click="gogo1(b.id)">预定</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane label="公务舱预定" name="fourth">
                    <div class="hhhh">
                      <div class="hhhhh">
                        <el-row>
                          <el-col :span="20">
                            <span>提前改期免费</span>
                            <el-divider direction="vertical" />
                            <span style="color:#409eff">托运行李额30KG</span>
                            <el-divider direction="vertical" />
                            <span>行程单</span>
                            <el-divider direction="vertical" />
                            <span> </span>
                            <el-divider direction="vertical" />
                            <span>公务舱</span>
                            <span style="color:#fc7a02 ;font-weight:900;font-size: 26px;">{{ b.classPrice }}</span>
                            <span>元</span>
                          </el-col>
                          <el-col :span="4">
                            <div class="hhh">
                              <!-- 订票按钮 -->
                              <el-button @click="gogo2(b.id)">选购 </el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-popover>
            </div>

            <span style="font-size: 8px;color:#047972 ;font-weight: 600; position: relative;top: -30px;left: 200px">{{
                b.additionalInfo.toString().slice(0, 6)
            }}</span>
            <br>
            <span style="font-size: 8px;color:#047972 ;font-weight: 600; position: relative;top: -30px;left: 200px">{{
                b.additionalInfo.toString().slice(6,-1)
            }}</span>

          </el-col>

        </el-row>
      </el-card>
    </div>

  </div>
</template>
  
<script setup>
import { useStore } from "vuex";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

//vuex
const store = useStore();
//vue-router
const $router = useRouter();

// 获取飞机票
// onBeforeMount(()=>{
//   airfarelist = store.state.airfarelist
//   return airfarelist
//   console.log(1);
// })

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
  store.dispatch("getcondition", 0);
  console.log(1);
}
//耗时短-长
function button2() {
  type2.value = "primary";
  type1.value = "";
  type3.value = "";
  type4.value = "";

  store.dispatch("getcondition", 2);
  console.log(2);
}
//到达早-晚
function button3() {
  type3.value = "primary";
  type2.value = "";
  type1.value = "";
  type4.value = "";
  store.dispatch("getcondition", 4);
  console.log(3);
}
//起飞早-晚
function button4() {
  type4.value = "primary";
  type2.value = "";
  type3.value = "";
  type1.value = "";
  store.dispatch("getcondition", 6);
  console.log(4);
}

//订票弹出页

const activeName = ref("third");

//订票按钮事件gogo()经济舱
function gogo1(id) {
  for (let a = 0; a < store.state.airfarelist.length; a++) {
    if (store.state.airfarelist[a].id == id) {
      // console.log( store.state.airfarelist[a])
      store.commit("ORDERS1", store.state.airfarelist[a]);
      if (store.state.uid.length > store.state.num) {
        // console.log("循环即将结束");
        store.commit("numadd");

        // console.log(store.state.num);
        // store.commit("test")
        store.dispatch("getflightmax");
        break;
      } else {
        $router.push("/orders");
      }
      // console.log(store.state.ordersmax[0]);
    }
  }

  //公务舱
}
function gogo2(id) {
  for (let a = 0; a < store.state.airfarelist.length; a++) {
    if (store.state.airfarelist[a].id == id) {
      // console.log( store.state.airfarelist[a])
      store.commit("ORDERS2", store.state.airfarelist[a]);
      if (store.state.uid.length > store.state.num) {
        console.log("循环即将结束");
        store.commit("numadd");
        console.log(store.state.num);
        store.dispatch("getflightmax");
        break;
      } else {
        // store.dispatch("getflightmax");
        $router.push("/orders");
      }
      console.log("循环还没结束");
      // console.log(store.state.ordersmax[0]);
    }
  }
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

.el-row1 {
  height: 80px;
  margin-bottom: 0px;
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

.box-span1 {
  height: 80px;
  font-size: 22px;
}

.box-span1-div {
  height: 80px;
  line-height: 80px;
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


.span1 {
  height: 50px;
  margin-top: 10px;
}

.lead {
  width: 100px;
  float: left;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}

.address {
  float: left;
  text-align: center;
  margin-left: 10px;
}

.address span {
  margin-left: 10px;
  line-height: 50px;
}

.address .time {
  font-size: 18px;
  font-weight: 500;
}

.address1 {
  font-size: 26px;
  font-weight: 900;
}

.box-card {
  border-radius: 8px 8px 0 0;
}

/* .box-card2{
  height: 90px;
} */
</style>