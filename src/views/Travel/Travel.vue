<template>
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
                  <el-tabs model-value="first">
                    <el-tab-pane></el-tab-pane>
                    <el-tab-pane label="热门" name="first">
                      <table>
                        <tr v-for="i in length / 4" :key="i">
                          <td width="40px"></td>
                          <td v-for="j in 6" :key="j">
                            <el-button text @click="
                              doSomething1(
                                defineCitys.hot[(i - 1) * 6 + (j - 1)]
                              )
                            ">{{ defineCitys.hot[(i - 1) * 6 + (j - 1)] }}
                            </el-button>
                          </td>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="ABCDEF">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.ABCDEF" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <!-- <i style="font-weight:1000">{{key}}</i>    -->
                            <td v-for="city1 in defineCitys.ABCDEF[key]" :key="city1">
                              <el-button text @click="doSomething1(city1)">{{ city1 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="GHIJ">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.GHIJ" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city2 in defineCitys.GHIJ[key]" :key="city2">
                              <el-button text @click="doSomething1(city2)">{{ city2 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="KIMN">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.KIMN" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city3 in defineCitys.KIMN[key]" :key="city3">
                              <el-button text @click="doSomething1(city3)">{{ city3 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="PQRSTUVW">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.PQRSTUVW" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city4 in defineCitys.PQRSTUVW[key]" :key="city4">
                              <el-button text @click="doSomething1(city4)">{{ city4 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="XYZ">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.XYZ" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city5 in defineCitys.XYZ[key]" :key="city5">
                              <el-button text @click="doSomething1(city5)">{{ city5 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                  </el-tabs>
                </el-popover>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <!--交换出发地和目的地按钮  -->
            <div class="h3"  size="large">
              <el-button circle @click="jiaohuan">
                <svg t="1669573925572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4480" width="20" height="20"><path d="M560.697 472.022a23 23 0 0 1 13.27 4.214L820.026 650.05c10.375 7.33 12.844 21.681 5.515 32.056a23 23 0 0 1-5.1 5.215L574.383 869.495c-10.21 7.559-24.613 5.41-32.171-4.799a23 23 0 0 1-4.515-13.686V733.816h-201.16c-143.36 0.815-221.206-70.034-233.537-212.546 12.457 13.043 66.902 90 233.537 90 111.09 0 178.144-1.277 201.16-3.828v-112.42c0-12.703 10.297-23 23-23zM406.788 119.304a23 23 0 0 1 4.515 13.686v117.194h201.16c143.36-0.815 221.206 70.034 233.537 212.546-12.457-13.043-66.902-90-233.537-90-111.09 0-178.144 1.277-201.16 3.828v112.42c0 12.703-10.297 23-23 23a23 23 0 0 1-13.27-4.214L128.974 333.95c-10.375-7.33-12.844-21.681-5.515-32.056a23 23 0 0 1 5.1-5.215l246.058-182.173c10.21-7.559 24.613-5.41 32.171 4.799z" fill="#333333" p-id="4481"></path></svg>
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
                  <el-tabs model-value="first">
                    <el-tab-pane></el-tab-pane>
                    <el-tab-pane label="热门" name="first">
                      <table>
                        <tr v-for="i in length / 4" :key="i">
                          <td width="40px"></td>
                          <td v-for="j in 6" :key="j">
                            <el-button text @click="
                              doSomething2(
                                defineCitys.hot[(i - 1) * 6 + (j - 1)]
                              )
                            ">{{ defineCitys.hot[(i - 1) * 6 + (j - 1)] }}
                            </el-button>
                          </td>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="ABCDEF">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.ABCDEF" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <!-- <i style="font-weight:1000">{{key}}</i>    -->
                            <td v-for="city1 in defineCitys.ABCDEF[key]" :key="city1">
                              <el-button text @click="doSomething2(city1)">{{ city1 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="GHIJ">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.GHIJ" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city2 in defineCitys.GHIJ[key]" :key="city2">
                              <el-button text @click="doSomething2(city2)">{{ city2 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="KIMN">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.KIMN" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city3 in defineCitys.KIMN[key]" :key="city3">
                              <el-button text @click="doSomething2(city3)">{{ city3 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="PQRSTUVW">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.PQRSTUVW" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city4 in defineCitys.PQRSTUVW[key]" :key="city4">
                              <el-button text @click="doSomething2(city4)">{{ city4 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="XYZ">
                      <table>
                        <tr v-for="(value, key, index) in defineCitys.XYZ" :key="index">
                          <el-form-item label-width="50px" :label="key" class="item">
                            <td v-for="city5 in defineCitys.XYZ[key]" :key="city5">
                              <el-button text @click="doSomething2(city5)">{{ city5 }}
                              </el-button>
                            </td>
                          </el-form-item>
                        </tr>
                      </table>
                    </el-tab-pane>
                  </el-tabs>
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
          <span id="bb">出行时间</span>
          <div class="demo-date-picker">
            <div class="">
              <el-date-picker @change="time" v-model="TravelTime" type="date" placeholder="选择出发时间" format="YYYY/MM/DD"
                value-format="YYYY-MM-DD" />
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
</template>
 

<script  setup>
import { ref, reactive, toRefs, getCurrentInstance, onMounted, onBeforeMount } from 'vue'
import request from "@/axios/request.js"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
import { useFileDialog } from '@vueuse/core';

//传递数据radio
const props = defineProps({
  radio: Number,
  a: Object,
})

//路由
const $router = useRouter()

//组件实例对象数组
const defineCitys = reactive({
  hot: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '西安', '重庆'
    , '青岛', '长沙', '南京', '厦门', '昆明', '大连', '天津', '郑州', '三亚', '济南', '福州'],
  ABCDEF: {
    A: ['阿勒泰', '阿克苏', '鞍山', '安庆', '安顺', '阿拉善左', '中国澳门', '阿里', '阿拉善右', '阿尔山'],
    B: ['巴中', '百色', '包头', '毕节', '北海', '北京', '北京(大', '北京(首', '博乐', '保山', '白城', '布尔津', '白山', '巴彦淖尔'],
    C: ['昌都', '承德', '常德', '长春', '朝阳', '赤峰', '长治', '重庆', '长沙', '成都', '沧源', '常州', '池州'],
    D: ['大同', '达州', '稻城', '丹东', '迪庆', '大连', '大理', '敦煌', '东营', '大庆', '德令哈'],
    E: ['鄂尔多斯', '额济纳旗', '恩施', '二连浩特'],
    F: ['福州', '阜阳', '抚远', '富蕴', '佛山']
  },
  GHIJ: {
    G: ['广州', '果洛', '格尔木', '广元', '固原', '中国高雄', '赣州', '贵阳', '桂林'],
    H: ['红原', '海口', '河池', '邯郸', '黑河', '呼和浩特', '合肥', '杭州', '淮安', '怀化', '海拉尔', '哈密', '衡阳', '哈尔滨', '和田', '花土沟', '中国花莲', '霍林郭勒', '惠州', '汉中', '黄山', '呼伦贝尔', '菏泽'],
    J: ['中国嘉义', '景德镇', '加格达奇', '嘉峪关', '井冈山', '金昌', '九江', '荆门', '佳木斯', '济宁', '锦州', '建三江', '鸡西', '九寨沟', '中国金门', '揭阳', '济南', '荆州'],
  },
  KIMN: {
    K: ['库车', '康定', '喀什', '凯里', '昆明', '库尔勒', '克拉玛依'],
    L: ['黎平', '澜沧', '龙岩', '临汾', '兰州', '丽江', '荔波', '吕梁', '临沧', '陇南', '六盘水', '拉萨', '洛阳', '连云港', '临沂', '柳州', '泸州', '林芝'],
    M: ['芒市', '牡丹江', '中国马祖', '绵阳', '梅州', '中国马公', '满洲里', '漠河'],
    N: ['南昌', '中国南竿', '南充', '宁波', '南京', '宁蒗', '南宁', '南阳', '南通'],
  },
  PQRSTUVW: {
    P: ['攀枝花', '普洱'],
    Q: ['琼海', '秦皇岛', '祁连', '且末', '庆阳', '黔江', '泉州', '衢州', '齐齐哈尔', '青岛'],
    R: ['日照', '日喀则', '若羌'],
    S: ['神农架', '莎车', '上海', '沈阳', '石河子', '石家庄', '上饶', '三明', '三亚', '深圳', '十堰', '邵阳', '松原'],
    T: ['台州', '中国台中', '塔城', '腾冲', '铜仁', '通辽', '天水', '吐鲁番', '通化', '中国台南', '中国台北', '天津', '中国台东', '唐山', '太原'],
    W: ['五大连池', '乌兰浩特', '乌兰察布', '乌鲁木齐', '潍坊', '威海', '文山', '温州', '乌海', '武汉', '武夷山', '无锡', '梧州', '万州', '乌拉特中', '巫山', '武隆', '芜湖'],
  },
  XYZ: {
    X: ['兴义', '夏河', '中国香港', '西双版纳', '新源', '西安', '忻州', '信阳', '襄阳', '西昌', '锡林浩特', '厦门', '西宁', '徐州'],
    Y: ['延安', '银川', '伊春', '永州', '榆林', '宜宾', '运城', '宜春', '宜昌', '伊宁', '义乌', '营口', '延吉', '烟台', '盐城', '扬州', '玉树玉', '林岳阳'],
    Z: ['郑州', '张家界', '舟山', '扎兰屯', '张掖', '昭通', '湛江', '中卫', '张家口', '珠海', '遵义']
  }

})


//  出发地 fromCity1
const fromCity1 = ref('')
const length = defineCitys.hot.length


onBeforeMount(
  () => {
    console.log("saf", that.devtoolsRawSetupState.fromCity1.value, that);
  }
)
//组件实例
const that = getCurrentInstance()
//将组件实例的uid存进去uid数组
onMounted(
  () => {
    store.commit("increment", that.uid)
    console.log(store.state.uid);
  }
)

//每个按钮的触发事件  出发地

const doSomething1 = (city) => {
  fromCity1.value = city
  if (that.uid == store.state.uid[0]) {

    store.commit('CITY1', fromCity1.value)
    console.log("第一程", store.state.sourcelist[0]);
  }
  else if (that.uid == store.state.uid[1]) {
    store.commit('CITY1MAX1', fromCity1.value)
    console.log("第二程", store.state.sourcelist[1]);
  }
  else if (that.uid == store.state.uid[2]) {
    store.commit('CITY1MAX2', fromCity1.value)
    console.log("第三程", store.state.sourcelist[2]);
  }
  else if (that.uid == store.state.uid[3]) {
    store.commit('CITY1MAX3 ', fromCity1.value)
    console.log("第四程", store.state.sourcelist[3]);
  }
}
// }else if(){

// }


//每个按钮的触发事件  目的地fromCity2
const fromCity2 = ref('')

const doSomething2 = (city) => {
  fromCity2.value = city

  if (that.uid == store.state.uid[0]) {
    store.commit('CITY2', fromCity2.value)
    console.log("第一程", store.state.destinationlist[0]);
  }
  else if (that.uid == store.state.uid[1]) {
    store.commit('CITY2MAX1', fromCity2.value)
    console.log("第二程", store.state.destinationlist[1]);
  }
  else if (that.uid == store.state.uid[2]) {
    store.commit('CITY2MAX2', fromCity2.value)
    console.log("第三程", store.state.destinationlist[2]);
  }
  else if (that.uid == store.state.uid[3]) {
    store.commit('CITY2MAX3 ', fromCity2.value)
    console.log("第四程", store.state.destinationlist[3]);
  }
}


//  交换出发地和目的地
function jiaohuan() {

  let a = fromCity1.value
  fromCity1.value = fromCity2.value
  fromCity2.value = a
  store.commit('CITY1', fromCity1.value)
  store.commit('CITY2', fromCity2.value)

}

//vuex

const store = useStore()


//时间选择器
const TravelTime = ref('')

function time() {
  if (that.uid == store.state.uid[0]) {
    store.commit('GETDATEOFJOURNEY', TravelTime.value)
    console.log("第一程", store.state.dateOfJourneylist[0]);
  }
  else if (that.uid == store.state.uid[1]) {
    store.commit('GETDATEOFJOURNEYMAX1', TravelTime.value)
    console.log("第二程", store.state.dateOfJourneylist[1]);
  }
  else if (that.uid == store.state.uid[2]) {
    store.commit('GETDATEOFJOURNEYMAX2', TravelTime.value)
    console.log("第三程", store.state.dateOfJourneylist[2]);
  }
  else if (that.uid == store.state.uid[3]) {
    store.commit('GETDATEOFJOURNEYMAX3', TravelTime.value)
    console.log("第四程", store.state.dateOfJourneylist[3]);
  }

  // console.log(TravelTime.value);
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
  box-shadow: 10px 10px 5px #d9d9d9;
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
</style>