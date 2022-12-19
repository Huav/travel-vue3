<template>
    <!-- 详细值机服务页面 -->
    <div class="container">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in pictures" :key="item">
                <h3 class="medium"><img src="@/assets/luggage1.jpeg" style="width: 100%;height:auto" /></h3>
            </el-carousel-item>
        </el-carousel>
        <div class="luggage">
            <el-collapse accordion>
                <el-collapse-item title="行李托运(kg)">
                    <div class="block">
                        <el-slider v-model="value" show-input>
                        </el-slider>
                    </div>
                    <div>taps:右侧输入即可(不能超过100kg)</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="food">
            <el-collapse accordion>
                <el-collapse-item title="订餐">
                    <div>
                        <div>
                            <img src="@/assets/foodone.jpeg" style="background-size:cover;width: 430px;height: 300px;">
                            <input type="checkbox" />
                            <label>鸡肉卷</label>
                            <img src="@/assets/foodtwo.jpeg" style="background-size:cover;width: 430px;height: 300px;">
                            <input type="checkbox" />
                            <label>水果</label>
                            <img src="@/assets/foodthree.jpeg" style="background-size:cover;width: 430px;height: 300px;">
                            <input type="checkbox" />
                            <label>披萨</label>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <el-button round class="button" @click="topay">去支付</el-button>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: "ChinService",
    setup() {
        const router=useRouter()
        const baseurl = ref('../assets/')
        const pictures = reactive(
            [
                {
                    "icon": "luggage1.jpeg",
                    "name": "luggage1"
                },
                {
                    "icon": "food1.jpeg",
                    "name": "food1"
                },
                {
                    "icon": "luggage2.jpeg",
                    "name": "luggage2"
                },
                {
                    "icon": "food2.jpeg",
                    "name": "food2"
                },
                {
                    "icon": "luggage3.jpeg",
                    "name": "luggage3"
                },
                {
                    "icon": "food3.jpeg",
                    "name": "food3"
                }
            ]
        )
        const topay=() =>{
            router.push('/pay1')//跳转去支付页面
        }
        return {
            pictures,
            baseurl,
            value: 0,
            topay
        }
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.button{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>