<template>
    <div class="container">
        <div class="checkin">值机服务</div><!-- 值机服务订单页面 -->
        <div class="chinorders">
            <div v-for="(item, index) in orders" :key="index"
                style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0">
                <div>
                    <div class="clearfix">
                        <span style="font-size:8px">订单号：</span>
                        <span style="color:blue;margin-right: 20px;font-size:8px">{{ item.oid }}</span>
                        <span style="font-size:8px">预订日期:{{ item.createTime.slice(0, 10) }}</span>
                        <el-button style="float: right;font-size: 18px;" type="text" @click="checkin(index)">
                            值机选座</el-button>
                        <h1 class="price" style="font-size:25px;font-weight:normal ;">{{ '¥' + item.price }}
                        </h1>
                    </div>
                    <div class="text item">
                        <span style="font-weight:bold">{{ item.flight.source + ' —— ' +
                                item.flight.destination
                        }}</span>
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
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'CheckIn',
    setup() {
        const orders = reactive(
            [
                {
                    "oid": 5,
                    "passagerName": "String",
                    "seatNumber": "2-C",
                    "seatType": "String",
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
                    "seatType": "String",
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
                    "seatType": "String",
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
        )
        const router = useRouter()
        const deleteorder = (index) => {
            alert("删除订单将自动退票！")
            router.push('/checkin')//跳转至详细值机服务
        };
        const checkin = (index) => {
            console.log(orders[index].oid)
            router.push('/ChinService')
        };
        return {
            orders,
            deleteorder,
            checkin
        }
    },
    beforeMount() {
    }
}
</script>
<style scoped>
.checkin {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: large;
}

.price {
    position: absolute;
    right: 5px;
}
</style>