<template>
  <div id="div1">
    <el-tabs type="border-card">

      <el-tab-pane label="机票查询">
        <div id="div2">
          <el-radio-group v-model="radio" @change="cc(radio)">
            <el-radio :label="1">单程</el-radio>
            <el-radio :label="2">往返 </el-radio>
            <el-radio :label="3">多程</el-radio>
          </el-radio-group>
          <!-- 初始地---目的地 -->
          <keep-alive>
            <Travel :radio=radio :a="{ b: 'b' }"></Travel>

          </keep-alive>
          <div v-for="(a, index) in test.add" :key="index">
            <div v-if="radio == 3">
              <keep-alive>
                <Travel></Travel>
              </keep-alive>
            </div>

          </div>

          <br />

          <el-button type="primary" round @click="add" v-if="radio == 3">再加一程</el-button>
          <el-button type="primary" round @click="jianshao" v-if="radio == 3">减少一程</el-button>
          <!-- 搜索按钮 -->
          <div class="h1">

            <button class="button" @click="go">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="b2">
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="特价机票" class="tabs_li">
        <div>
          <h1>这里什么也没有
          </h1>
        </div>
      </el-tab-pane>
      <el-tab-pane label="航班动态" class="tabs_li">Role</el-tab-pane>
      <el-tab-pane label="更多服务" class="tabs_li">Task</el-tab-pane>
    </el-tabs>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
  

<script  setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
import Travel from "@/views/Travel/Travel.vue";
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
//路由
const $router = useRouter()

//挂载之后
onMounted(() => {
  store.state.uid.slice(0)
})

const store = useStore()
const radio = ref(1);
const aa = ref(1);

//组件实例对象
const taht = getCurrentInstance()
// console.log(taht);



//数组
const test = reactive({ add: [] });
function cc() {
  // console.log(radio);
}
//再加一程
function add() {
  test.add.push({});
  console.log(test);
}

//减少一程
function jianshao() {
  test.add = test.add.slice(0, -1)
  store.commit("incrementmax")
  console.log(test);
}
//搜索按钮
function go() {
  // console.log(1);

  // console.log(TravelTime);

  if (store.state.dateOfJourneylist[0] == null) {
    ElMessage('请选择出发时间')
  }
  else {  
    store.dispatch('getflight')
    $router.push('/home/FlightTicket')
  }

}
</script>

<style scoped>
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

.h2 {
  position: relative;
  top: 200px;
  float: left;
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
  margin-left: -60px;
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

#div1 {
  background-color: #eef1f6;

  margin: auto;
  padding: 12px;
  top: -10px;
}

::v-deep(.el-tabs__header) {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
  height: 48px;

}

::v-deep(.el-tabs__nav-scroll) {
  border-radius: 8px 8px 0 0;
  background-color: rgba(0, 0, 0, .75);
  height: 48px;
  line-height: 48px;
  font-weight: 600;
  width: 1220.39px;
}

::v-deep(.el-tabs__nav) {
  width: 100%;
  background-color: rgba(0, 0, 0, .75);

  /* background-color: #eef1f6; */
}

::v-deep(#tab-0) {
  width: 25%;
  text-align: center;
  font-size: 18px;
  top: -1px;
  height: 49px;
  color: #000;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
}

::v-deep(#tab-1) {
  width: 25%;
  text-align: center;
  font-size: 18px;
  height: 48px;
  color: #fff;
  background-color: rgba(0, 0, 0, .75);
}

::v-deep(#tab-2) {
  width: 25%;
  text-align: center;
  font-size: 18px;
  height: 48px;
  color: #fff;
  background-color: rgba(0, 0, 0, .75);
}

::v-deep(#tab-3) {
  width: 25%;
  text-align: center;
  font-size: 18px;
  height: 48px;
  color: #fff;
  background-color: rgba(0, 0, 0, .75);
}

#div2 {
  background: #fff;
  padding: 12px;
  /* border-radius: 0 0 8px 8px;
  -webkit-box-shadow: 0 4px 16px 1px rgb(0 0 0 / 6%);
  box-shadow: 0 4px 16px 1px rgb(0 0 0 / 6%); */
  position: relative;
  z-index: 2;
}
</style>
