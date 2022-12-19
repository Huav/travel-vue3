<template>
    <div>
        <el-tabs type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部订单" style="height:800px">
                <div v-for="(item, index) in orders" :key="index"
                    style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0">
                    <div>
                        <div class="clearfix">
                            <span style="font-size:8px">订单号：</span>
                            <span style="color:blue;margin-right: 20px;font-size:8px">{{ item.oid }}</span>
                            <span style="font-size:8px">预订日期:{{ item.createTime.slice(0, 10) }}</span>
                            <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:8px;cursor: pointer;"
                                @click="deleteorder(index)">删除订单</span>
                            <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:8px;cursor: pointer;"
                                @click="seat(index)">值机选座</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="rebook(index)">
                                改签</el-button>
                            <h1 class="price" style="font-size:25px;font-weight:normal ;">{{ '¥' + item.price }}
                            </h1>
                        </div>
                        <div class="text item">
                            <span style="font-weight:bold">{{ '目的地 —— ' + item.flight.destination }}</span>
                            <h1 style="font-size:10px;font-weight:normal ;">出发日期:<span style="margin-left:5px">{{
                                    item.flight.depTime + '-' +
                                    item.flight.arrivalTime
                            }}</span>
                            </h1>
                            <h1 style="font-size:10px;font-weight:normal ;">出行人：<span style="margin-left:5px">{{
                                    item.passagerName
                            }}</span></h1>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待支付" style="height:800px">待支付
                <el-empty description="钱包空空如也"></el-empty>
            </el-tab-pane>
            <el-tab-pane label="未出行" style="height:800px">未出行
                <el-empty description="钱包空空如也"></el-empty>
            </el-tab-pane>
            <el-tab-pane label="待点评" style="height:800px">待点评
                <el-empty description="钱包空空如也"></el-empty>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import request from '@/axios/request';
import store from '@/Store'
import router from '@/router';
export default {
    name: 'AllOrders',
    data() {
        return {
            activeName: 'first',
            orders: [
                {
                    "oid": 5,
                    "passagerName": "String",
                    "seatNumber": "2-C",
                    "seatType": "Y",
                    "information": "补差额：-10",
                    "price": 510,
                    "createTime": "2022-11-11T16:33:52.000+00:00",
                    "confirmingTime": null,
                    "flight": {
                        "id": 5,
                        "aid": null,
                        "destination": "New Delhi",
                        "airline": "IndiGo",
                        "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
                        "flightInfoId": "空客A320",
                        "source": "Banglore",
                        "route": "BLR → NAG → DEL",
                        "depTime": "16:50",
                        "arrivalTime": "21:35",
                        "duration": "4h 45m",
                        "totalStops": null,
                        "additionalInfo": "No info",
                        "econmecyPrice": null,
                        "classPrice": null,
                        "totalSeat": null,
                        "seatFVacant": null,
                        "seatYVacant": null
                    }
                },
                {
                    "oid": 4,
                    "passagerName": "String",
                    "seatNumber": "3-B",
                    "seatType": "F",
                    "information": "补差额：-10",
                    "price": 511,
                    "createTime": "2022-11-11T16:29:05.000+00:00",
                    "confirmingTime": null,
                    "flight": {
                        "id": 4,
                        "aid": null,
                        "destination": "New Delhi",
                        "airline": "IndiGo",
                        "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
                        "flightInfoId": "空客A320",
                        "source": "Banglore",
                        "route": "BLR → NAG → DEL",
                        "depTime": "16:50",
                        "arrivalTime": "21:35",
                        "duration": "4h 45m",
                        "totalStops": null,
                        "additionalInfo": "No info",
                        "econmecyPrice": null,
                        "classPrice": null,
                        "totalSeat": null,
                        "seatFVacant": null,
                        "seatYVacant": null
                    },
                },
                {
                    "oid": 3,
                    "passagerName": "String",
                    "seatNumber": "3-B",
                    "seatType": "Y",
                    "information": "补差额：-10",
                    "price": 512,
                    "createTime": "2022-11-11T16:29:05.000+00:00",
                    "confirmingTime": null,
                    "flight": {
                        "id": 3,
                        "aid": null,
                        "destination": "New Delhi",
                        "airline": "IndiGo",
                        "dateOfJourney": "2019-02-28T16:00:00.000+00:00",
                        "flightInfoId": "空客A320",
                        "source": "Banglore",
                        "route": "BLR → NAG → DEL",
                        "depTime": "16:50",
                        "arrivalTime": "21:35",
                        "duration": "4h 45m",
                        "totalStops": null,
                        "additionalInfo": "No info",
                        "econmecyPrice": null,
                        "classPrice": null,
                        "totalSeat": null,
                        "seatFVacant": null,
                        "seatYVacant": null
                    }
                }
            ]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            // if (tab.uid == 20) {
            //     alert("全部订单")
            // }
        },
        goBack() {
            this.$router.push('/')
        },
        allorders() {
            console.log("allorders")
        },
        deleteorder(index) {
            // alert("删除订单将自动退票！")
            const thay = this
            console.log(index)
            request({
                url: "/orders/refund",
                method: "get",
                params: {
                    oid: thay.orders[index].oid
                },

                headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            }).then(function (response) {
                console.log(response);
                router.go(0)
                // thay.orders = response.data.data//数组替换
            }), error => {
                console.log("aaaaaa");
                console.log('错误', error)
            };
            // this.$message.success("退票成功！")
        },
        rebook(index) {
            this.$router.push({
                path: "/changes",
                query: {
                    fromCity1: this.orders[index].flight.source,
                    TravelTime: this.orders[index].flight.dateOfJourney,
                    fromCity2: this.orders[index].flight.destination,
                }
            })
        },
        seat(index) {
            this.$router.push({
                path: "/seat",

                query: {

                    fid: this.orders[index].flight.id,
                    oid: this.orders[index].oid,
                    seatType: this.orders[index].seatType,
                }
            })
        },
    },

    beforeMount: function () {
        console.log("the component is now mounted");
        let thay = this

        request({
            url: "/orders/order",
            params: {
                id: store.state.userInfo.userId
            },
            method: "get",
            headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        }).then(function (response) {

            // console.log(typeof(store.state.userInfo.userId));

            console.log(response);
            thay.orders = response.data.data//数组替换
        }).catch(function (error) {
            console.log("请求失败");
            console.log(error);
        });
    }
};
</script>
<style scoped>
/* .Myorder {
    height: 100vh;
    background: #e0e0e0;
}

.goback {
    position: fixed;
    right: 5vw;
    top: -10px;
} */
::deep(el-tabs__item) {
    /* 修改为您想要的文字大小 */
    font-size: 10px !important;
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
}
</style>