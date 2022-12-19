<template>
    <div class="Myorder">

        <!-- <el-page-header @back="goBack" content="返回首页" class="goback"></el-page-header> -->
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item @click="allorders">所有订单</el-menu-item>
            <el-menu-item @click="mynews">我的信息</el-menu-item>
            <el-menu-item>钱包</el-menu-item>
            <el-menu-item>个人中心</el-menu-item>
        </el-menu>
        <div @click="goBack" class="goback">返回首页</div>
        <router-view></router-view>
    </div>
</template>
<script>
import request from '@/axios/request';
import store from '@/Store'
import router from '@/router';
export default {
    name: 'Myorder',
    // data() {
    //     return {
    //         activeName: 'first',
    //         orders: [
    //             {
    //                 "oid": 5,
    //                 "passagerName": "String",
    //                 "seatNumber": "2-C",
    //                 "seatType": "Y",
    //                 "information": "补差额：-10",
    //                 "price": 510,
    //                 "createTime": "2022-11-11T16:33:52.000+00:00",
    //                 "confirmingTime": null,
    //                 "flight": {
    //                     "id": 5,
    //                     "aid": null,
    //                     "destination": "New Delhi",
    //                     "airline": "IndiGo",
    //                     "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
    //                     "flightInfoId": "空客A320",
    //                     "source": "Banglore",
    //                     "route": "BLR → NAG → DEL",
    //                     "depTime": "16:50",
    //                     "arrivalTime": "21:35",
    //                     "duration": "4h 45m",
    //                     "totalStops": null,
    //                     "additionalInfo": "No info",
    //                     "econmecyPrice": null,
    //                     "classPrice": null,
    //                     "totalSeat": null,
    //                     "seatFVacant": null,
    //                     "seatYVacant": null
    //                 }
    //             },
    //             {
    //                 "oid": 4,
    //                 "passagerName": "String",
    //                 "seatNumber": "3-B",
    //                 "seatType": "Y",
    //                 "information": "补差额：-10",
    //                 "price": 511,
    //                 "createTime": "2022-11-11T16:29:05.000+00:00",
    //                 "confirmingTime": null,
    //                 "flight": {
    //                     "id": 4,
    //                     "aid": null,
    //                     "destination": "New Delhi",
    //                     "airline": "IndiGo",
    //                     "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
    //                     "flightInfoId": "空客A320",
    //                     "source": "Banglore",
    //                     "route": "BLR → NAG → DEL",
    //                     "depTime": "16:50",
    //                     "arrivalTime": "21:35",
    //                     "duration": "4h 45m",
    //                     "totalStops": null,
    //                     "additionalInfo": "No info",
    //                     "econmecyPrice": null,
    //                     "classPrice": null,
    //                     "totalSeat": null,
    //                     "seatFVacant": null,
    //                     "seatYVacant": null
    //                 },
    //             },
    //             {
    //                 "oid": 3,
    //                 "passagerName": "String",
    //                 "seatNumber": "3-B",
    //                 "seatType": "Y",
    //                 "information": "补差额：-10",
    //                 "price": 512,
    //                 "createTime": "2022-11-11T16:29:05.000+00:00",
    //                 "confirmingTime": null,
    //                 "flight": {
    //                     "id": 3,
    //                     "aid": null,
    //                     "destination": "New Delhi",
    //                     "airline": "IndiGo",
    //                     "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
    //                     "flightInfoId": "空客A320",
    //                     "source": "Banglore",
    //                     "route": "BLR → NAG → DEL",
    //                     "depTime": "16:50",
    //                     "arrivalTime": "21:35",
    //                     "duration": "4h 45m",
    //                     "totalStops": null,
    //                     "additionalInfo": "No info",
    //                     "econmecyPrice": null,
    //                     "classPrice": null,
    //                     "totalSeat": null,
    //                     "seatFVacant": null,
    //                     "seatYVacant": null
    //                 }
    //             }
    //         ]
    //     };
    // },
    methods: {
        // handleClick(tab, event) {
        //     console.log(tab, event);
        //     // if (tab.uid == 20) {
        //     //     alert("全部订单")
        //     // }
        // },
        // goBack() {
        //     this.$router.push('/')
        // },
        // allorders() {
        //     console.log("allorders")
        // },
        // deleteorder(index) {
        //     // alert("删除订单将自动退票！")
        //     const thay = this
        //     console.log(index)
        //     request({
        //         url: "/orders/refund",
        //         method: "get",
        //         params: {
        //             oid: thay.orders[index].oid
        //         },

        //         headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        //     }).then(function (response) {
        //         console.log(response);
        //         router.go(0)
        //         // thay.orders = response.data.data//数组替换
        //     }), error => {
        //         console.log("aaaaaa");
        //         console.log('错误', error)
        //     };
        //     // this.$message.success("退票成功！")
        // },
        // rebook(index) {
        //     this.$router.push({
        //         path: "/changes",
        //         query: {
        //             fromCity1: this.orders[index].flight.source,
        //             TravelTime: this.orders[index].flight.dateOfJourney,
        //             fromCity2: this.orders[index].flight.destination,
        //         }
        //     })
        // },
        // seat(index) {
        //     this.$router.push({
        //         path: "/seat",

        //         query: {

        //             fid: this.orders[index].flight.id,
        //             oid: this.orders[index].oid,
        //             seatType: this.orders[index].seatType,
        //         }
        //     })
        // },
        allorders() {
            console.log('allorders')
            this.$router.push({
                path: '/Myorder/allorders'
            })
        },
        goBack() {
            console.log('goback')
        }

    },
    beforeMount:function() {
        this.$router.push('/Myorder/allorders')
    }

    // beforeMount: function () {
    //     console.log("the component is now mounted");
    //     let thay = this

    //     request({
    //         url: "/orders/order",
    //         params: {
    //             id: store.state.userInfo.userId
    //         },
    //         method: "get",
    //         headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    //     }).then(function (response) {

    //         // console.log(typeof(store.state.userInfo.userId));

    //         console.log(response);
    //         thay.orders = response.data.data//数组替换
    //     }).catch(function (error) {
    //         console.log("请求失败");
    //         console.log(error);
    //     });
    // }
};
</script>
<style scoped>
.Myorder {
    height: 100vh;
    background: #e0e0e0;
}

.goback {
    position: fixed;
    right: 5vw;
    top: 65px;
    color: white;
    cursor: pointer;
}

/* 卡片布局
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

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 100vw;
}

.price {
    position: absolute;
    right: 15px;
} */
</style>
