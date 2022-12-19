<template>
    <div class="body">
        <div class="container">
            <div class="tit">注册</div>
            <input type="text" name="user" placeholder="用户" v-model="phone">
            <button v-on:click="register">注册</button>
            <span>已有账号？<RouterLink to="/login">去登录</RouterLink></span>
       </div>
    <div class="square">
        <ul>
            <li></li> 
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="circle">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </div>
</template>
<script>
import request from '@/axios/request';
import { ref } from 'vue';
import {useRouter } from 'vue-router';
export default{
    name:"Register",
    setup() {
        const phone = ref('123456')
        const router=useRouter()
        const register = () => {
            request({
                url: "/register",
                data: {
                    phone:phone.value
                },
                method: "post",
                headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            }).then(function (response) {
                console.log("请求成功");
                console.log(response);
                const data=response.data
                if(data.success==false){
                    alert("注册失败")
                }else{
                    router.push('/login');
                }
            }).catch(function (error) {
                console.log("请求失败");
                console.log(error);
            });
        }
        return {
            register,
            phone
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
  }
.body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(200deg,#e3c5eb,#a9c1ed);
  }
  .container {
    position: relative;
    z-index: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 500px;
    background: #ffffff;
    box-shadow:0px 20px 20px rgba(0,0,0,0.1);
  }
  .container .tit {
    font-size: 26px;
    margin: 65px auto 70px;
  }
  .container input {
    width: 280px;
    height: 30px;
    text-indent: 16px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    margin: 12px auto;
    border-radius: 15px;
  }
  .container button {
    width: 190px;
    height: 40px;
    margin: 35px auto;
    border-radius: 20px;
    background: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    background-size: 400%;
    font-weight: bold;
    color: #fff;
    letter-spacing: 8px;
    cursor: pointer;
  }
  .container button:hover{
    animation: button 8s linear infinite;
  }
  @keyframes button {
    100%{
        background-position:-400% 0;
    }
}
.container span {
    font-size: 14px;
}
.container a {
    color: plum;
    text-decoration: none;
}
ul li {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    background-color: #fff;
    list-style: none;
    opacity: 0;

}
.square li{
    top:20vh;
    left: 90vw;
    animation: square 10s linear infinite;
}
.square :nth-child(2) {
    top:80vh;
    left:10vw;
    animation-delay: 2s;
}
.square :nth-child(3) {
    top:80vh;
    left:85vw;
    animation-delay: 4s;
}
.square :nth-child(4) {
    top:50vh;
    left:30vw;
    animation-delay: 6s;
}
.square :nth-child(5) {
    top:10vh;
    left:10vw;
    animation-delay: 8s;
}
@keyframes square {
    0% {
        transform: scale(0) rotateY(0deg);
        opacity: 1;
    }
    100% {
        transform: scale(5) rotateY(2000deg);
        opacity: 0;
    }
}
.circle li {
    bottom: 0;
    left: 15vw;
    animation: circle 8s linear infinite;
}
.circle :nth-child(2) {
    left: 35vw;
    animation-delay: 2s;
}
.circle :nth-child(3) {
    left: 55vw;
    animation-delay: 4s;
}
.circle :nth-child(4) {
    left: 75vw;
    animation-delay: 6s;
}
.circle :nth-child(5) {
    left: 95vw;
    animation-delay: 8s;
}
@keyframes circle {
    0%{
        transform: scale(0) rotateY(0deg);
        opacity: 1;
        border-radius: 0;
        bottom: 0;
    }
    100%{
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
        border-radius: 50%;
        bottom: 100vh;
    }
}
</style>