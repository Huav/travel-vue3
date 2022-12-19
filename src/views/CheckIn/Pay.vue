<template>
    <!-- 支付值机页面 -->
    <div class="container">
        <div class="zhifu">微信支付:<span @click="tohome">HOME</span></div>
        <div class="ewma"><img src="@/assets/pay.jpeg" style="background-size: cover;width: 400px;height: 400px;"></div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
    name: "Pay",
    setup(){
        const router=useRouter()
        const tohome=() => {
            router.push('/')//返回首页
        }
        return{
            tohome
        }
    }
}
</script>
<style scoped>
.container{
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-left: 40%;
}
span{
    margin-left: 200PX;
    cursor: pointer;
    color: rgb(75, 89, 170);
}
</style>