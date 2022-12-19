<template>
    <div @click="tocheckin">值机服务</div> <!-- 首页点击按钮进入 -->
</template>
<script>
import { useRouter } from 'vue-router'
export default{
    name:"Homeview",
    setup(){
        const router=useRouter()
        const tocheckin = () => {
            router.push('/checkin')//进入查看可值机服务的订单
        }
        return{
            tocheckin
        }
    }
}
</script>
<style scoped>
div{
    cursor: pointer;
}
</style>