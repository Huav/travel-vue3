<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0" @click="gohome">LOGO</el-menu-item>

    <!--搜索框  -->
    <div class="target3">
      <div class="searchbar">
        <div class="searchbar-wrapper">
          <div class="searchbar-left"></div>

          <div class="searchbar-center">
            <div class="searchbar-input-spacer"></div>
            <!-- 输入框 -->
            <input type="text" class="searchbar-input" maxlength="2048" name="q" autocapitalize="off" autocomplete="off"
              title="Search" role="combobox" placeholder="搜索任何出行相关的" />
          </div>

          <div class="searchbar-right">
            <!-- <el-icon color="#409EFC"><Microphone /></el-icon>  -->
            <!-- <svg class="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#409EFC" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                </path>
                <path fill="#409EFC" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#409EFC" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                </path>
                <path fill="#409EFC" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                </path>
            </svg> -->
            <div class="search-icon-wrapper">
              <span class="search-icon searchbar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#409EFC"
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-grow" />

    <!-- 登录注册按钮 -->
    <div class="target">
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button v-if="store.state.token.length == 0" key="primary" type="primary" text
          @click="onlogon">登录</el-button>
        <el-button v-if="store.state.token.length > 0" key="primary" type="primary" text
          @click="xlogon">退出登录</el-button>
        <el-button @click="register" text>注册</el-button>
        <!--客服  -->
        <!-- <el-icon><Service /></el-icon> -->

        <el-button type="primary" :icon="Service" link>客服</el-button>
      </div>
    </div>

    <!-- 订单管理 -->
    <el-sub-menu index="3">
      <template #title>订单管理</template>
      <el-menu-item index="2-1" @click="onorder">机票订单</el-menu-item>
      <el-menu-item index="2-2">酒店订单</el-menu-item>
      <el-menu-item index="2-3">全部订单</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4">
      <template #title>更多服务</template>
      <el-menu-item index="2-1">值机选座</el-menu-item>
      <el-menu-item index="2-2" @click="guanli">管理员登陆</el-menu-item>
      <el-menu-item index="2-3">敬请期待</el-menu-item>
    </el-sub-menu>

    <!-- <el-menu-item index="2" @click="gogo">更多服务
    
    </el-menu-item> -->
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Delete,
  Edit,
  Search,
  Share,
  Upload,
  Service,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import request from "@/axios/request.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import { ElMessage } from 'element-plus'
const store = useStore()
//路由
const $router = useRouter();

//  登录跳转按钮
function onlogon() {
  console.log("1");
  $router.push("/login");
}
//注册跳转
function register() {
  $router.push("/register");
}
function gohome() {
  $router.push("/home");
}
// 订单管理跳转
function onorder() {
  $router.push("/Myorder");
  console.log("2");
}
//管理员跳转
function guanli() {
  request({
    url: "/login",
    method: "get",
    data: {
    },
  }).then((respones) => {
    if (respones.data.code == 200) {
      ElMessage({
        message: '您已经进入管理员界面',
        type: 'success',
      })
      $router.push("/admin_main");
    }
  }, (error) => {
    console.log("错误", error);
  }
  );


}
//下拉选项
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

function gogo() {
  $router.push("/checkin");
}

//退出登录
function xlogon() {
  request({
    url: "/logout",
    method: "get",
    data: {},
  }).then(
    (respones) => {
      alert("您已退出登录!");
      store.commit("TOKENMAX")
      console.log(store.state.token);
    },
    (error) => {
      console.log("错误", error);
    }
  );
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

/* 布局1 */
.target {
  position: relative;
  left: 0px;
  top: 43px;
  transform: translate(-50%, -50%);
}

.target1 {
  position: relative;
  left: 50%;
  top: 35px;
  transform: translate(-50%, -50%);
}

.target3 {
  position: relative;
  left: 25%;
  top: 35px;
  transform: translate(-50%, -50%);
}

/* From uiverse.io by @TimTrayler */
.searchbar {
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  z-index: 3;
  height: 38px;
  background: white;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  margin: 0 auto;
  width: auto;
  max-width: 300px;
}

.searchbar:hover {
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: rgba(223, 225, 229, 0);
}

.searchbar-wrapper {
  flex: 1;
  display: flex;
  padding: 5px 8px 0 14px;
}

.searchbar-left {
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  align-items: center;
  padding-right: 13px;
  margin-top: -5px;
}

.search-icon-wrapper {
  margin: auto;
}

.search-icon {
  margin-top: 3px;
  color: #9aa0a6;
  height: 20px;
  line-height: 20px;
  width: 20px;
}

.searchbar-icon {
  display: inline-block;
  fill: currentColor;
  height: 24px;
  line-height: 24px;
  position: relative;
  width: 24px;
}

.searchbar-center {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.searchbar-input-spacer {
  color: transparent;
  flex: 100%;
  white-space: pre;
  height: 34px;
  font-size: 16px;
}

.searchbar-input {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  display: flex;
  flex: 100%;
  margin-top: -37px;
  height: 34px;
  font-size: 16px;
  max-width: 100%;
  width: 100%;
}

.searchbar-right {
  display: flex;
  flex: 0 0 auto;
  margin-top: -5px;
  align-items: stretch;
  flex-direction: row;
}

.searchbar-clear-icon {
  margin-right: 12px;
}

.voice-search {
  flex: 1 0 auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 2.8em;
}
</style>
