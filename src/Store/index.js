import { createStore } from 'vuex'
import request from '@/axios/request.js'
import { sortOrders } from 'element-plus/es/components/table-v2/src/constants'
// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      //用户数据
      userInfo: {
        userId: 1,
        username: "",
        usersfz: "",
        usersjh: "",
      },
      //home

      //航运公司
      airline: "",
      //发源地  
      sourcelist: [],
      //目的地
      destinationlist: [],
      //出发时间”2019-06-03“
      dateOfJourneylist: [],
      //所选择舱位
      space: "",
      //排列条件

      // case "is_lowPriority":
      //   case "is_noLowPriority":
      //    //起飞早晚
      //   case "is_low_departureTime":
      //   case "is_noLow_departureTime":
      //   //耗时短长
      //   case "is_lowDuration":
      //   case "is_noLowDuration":
      //   //到达早晚
      //   case "is_lowArrivalTime":
      //   case "is_noLowArrivalTime":
      condition: ["is_lowPriority",//0//低价优先
        "is_noLowPriority",//1

        "is_noLowDuration",//3
        "is_lowDuration",//4//耗时短长

        "is_lowArrivalTime",//6//到达早晚
        "is_noLowArrivalTime",//7

        "is_low_departureTime",//2//起飞早晚
        "is_noLow_departureTime"//5
      ],

      //token
      token: "",
      //获取要展示的飞机票信息

      //改签假订单
      airfare: {},

      airfarelist: [{
        "id": 40,
        "airline": "Jet Airways",
        "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
        "flightInfoId": "空客A310",
        "source": "Delhi",
        "destination": "Cochin",
        "route": "DEL → BOM → COK",
        "depTime": "07:05",
        "arrivalTime": "19:00",
        "duration": "11h 55m",
        "additionalInfo": "No info",
        "econmecyPrice": 14924.0,
        "classPrice": 15424,
        "totalSeat": 178,
        "seatFVacant": 16,
        "seatYVacant": 162,
        "totalPage": null
      },
      {
        "id": 63,
        "airline": "Multiple carriers",
        "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
        "flightInfoId": "空客A350",
        "source": "Delhi",
        "destination": "Cochin",
        "route": "DEL → BOM → COK",
        "depTime": "08:45",
        "arrivalTime": "19:00",
        "duration": "10h 15m",
        "additionalInfo": "No info",
        "econmecyPrice": 12524.0,
        "classPrice": 13024,
        "totalSeat": 288,
        "seatFVacant": 32,
        "seatYVacant": 256,
        "totalPage": null
      },
      {
        "id": 147,
        "airline": "Jet Airways",
        "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
        "flightInfoId": "空客A340",
        "source": "Delhi",
        "destination": "Cochin",
        "route": "DEL → ATQ → BOM → COK",
        "depTime": "20:00",
        "arrivalTime": "04:25 04 Jun",
        "duration": "8h 25m",
        "additionalInfo": "双12打折啦，全国有1111",
        "econmecyPrice": 15318.0,
        "classPrice": 15818,
        "totalSeat": 288,
        "seatFVacant": 32,
        "seatYVacant": 256,
        "totalPage": null
      },
      {
        "id": 205,
        "airline": "Multiple carriers",
        "dateOfJourney": "2019-06-02T16:00:00.000+00:00",
        "flightInfoId": "空客A350",
        "source": "Delhi",
        "destination": "Cochin",
        "route": "DEL → BOM → COK",
        "depTime": "06:40",
        "arrivalTime": "19:00",
        "duration": "12h 20m",
        "additionalInfo": "No info",
        "econmecyPrice": 10877.0,

      },],

      // 订单页面 
      //订单信息
      orders: [],
      //订单信息
      ordersmax: [],

      //实例对象数组
      uid: [],
      //飞机票组件实例num
      num: 1,
      //经济舱，商务舱
      seatType: [],
      //home页面数组
      test: [],

      //后端拿到的订单数组
      oids: [],

      //选择公司名字
      airlineName: []

    }
  },
  //改变状态（类似于计算属性）
  mutations: {
    //清空订单数组
    EmptyOrdersmax(state) {
      state.ordersmax = []
    }
    ,
    OID(state, oids) {
      state.oids.push(oids)

    },
    test(state, a) {
      state.test.push({})
    },
    //实例对象数组
    increment(state, uid) {
      state.uid.push(uid)
    },
    incrementmax(state) {
      state.uid = state.uid.slice(0, -1)
    },
    num(state) {
      state.num = 1
    },

    numadd(state) {
      let a = state.num - 1
      state.airlineName[a] = state.ordersmax[a].airline
      console.log("hua", state.airlineName[a]);
      state.num = state.num + 1
    },
    //出发地
    CITY1(state, fromCity1) {
      state.sourcelist[0] = fromCity1
    },
    CITY1MAX1(state, fromCity1) {
      state.sourcelist[1] = fromCity1
    },
    CITY1MAX2(state, fromCity1) {
      state.sourcelist[2] = fromCity1
    },
    CITY1MAX3(state, fromCity1) {
      state.sourcelist[3] = fromCity1
    },
    //目的地
    CITY2(state, fromCity2) {
      state.destinationlist[0] = fromCity2
    },
    CITY2MAX1(state, fromCity2) {
      state.destinationlist[1] = fromCity2
    },
    CITY2MAX2(state, fromCity2) {
      state.destinationlist[2] = fromCity2
    },
    CITY2MXA3(state, fromCity2) {
      state.destinationlist[3] = fromCity2
    },
    //出发时间
    GETDATEOFJOURNEY(state, TravelTime) {
      state.dateOfJourneylist[0] = TravelTime
    },
    GETDATEOFJOURNEYMAX1(state, TravelTime) {
      state.dateOfJourneylist[1] = TravelTime
    },
    GETDATEOFJOURNEYMAX2(state, TravelTime) {
      state.dateOfJourneylist[2] = TravelTime
    },
    GETDATEOFJOURNEYMAX3(state, TravelTime) {
      state.dateOfJourneylist[3] = TravelTime
    },

    //订单存进userinfo
    useradd(state, user) {
      state.userInfo.username = user[0]
      state.userInfo.usersfz = user[1]
      state.userInfo.usersjh = user[2]
    },
    //后端传回的飞机票信息
    GETFIGHT(state, airfarelist) {
      state.airfarelist = airfarelist.data
      console.log("回传飞机票", state.airfarelist);
    },
    //选购飞机票之后订单的（经济舱）
    ORDERS1(state, ordersmax) {
      let a = state.num - 1
      state.ordersmax[a] = ordersmax
      state.seatType[a] = "Y"
      console.log("第", a, "程", state.seatType[a]);
    },
    //选购飞机票之后订单的（商务舱）
    ORDERS2(state, ordersmax) {
      let a = state.num - 1
      state.ordersmax[a] = ordersmax
      state.seatType[a] = "F"
    },
    //改签订单页
    changes(state, airfare) {
      state.airfare = airfare
    },
    //token
    TOKEN(state, token) {
      state.token = token
    },
    TOKENMAX(state) {
      state.token = ''
    },
    test(state,) {
      state.airfarelist = [{
        "id": 10686,
        "aid": 4,
        "destination": "广州",
        "airline": "Air India",
        "dateOfJourney": 1669046400000,
        "flightInfoId": "空客A320",
        "source": "北京",
        "route": "DEL → GOI → BOM → COK",
        "depTime": "10:55",
        "arrivalTime": "20:15",
        "duration": "8h 20m",
        "totalStops": "2 stops",
        "additionalInfo": "No info",
        "holidayDiscounts": 0.0,
        "econmecyPrice": 11754.0,
        "classPrice": 12253,
        "totalSeat": 292,
        "seatFVacant": 36,
        "seatYVacant": 256,
        "discount": 0.05
      },
      {
        "id": 10684,
        "aid": 4,
        "destination": "广州",
        "airline": "Air India",
        "dateOfJourney": 1669046400000,
        "flightInfoId": "空客A320",
        "source": "北京",
        "route": "DEL → GOI → BOM → COK",
        "depTime": "10:55",
        "arrivalTime": "19:15",
        "duration": "8h 20m",
        "totalStops": "2 stops",
        "additionalInfo": "No info",
        "holidayDiscounts": 0.0,
        "econmecyPrice": 11754.0,
        "classPrice": 12253,
        "totalSeat": 292,
        "seatFVacant": 28,
        "seatYVacant": 256,
        "discount": 0.05
      },
      {
        "id": 10685,
        "aid": 4,
        "destination": "广州",
        "airline": "Air India",
        "dateOfJourney": 1669046400000,
        "flightInfoId": "空客A320",
        "source": "北京",
        "route": "DEL → GOI → BOM → COK",
        "depTime": "8:55",
        "arrivalTime": "19:15",
        "duration": "8h 20m",
        "totalStops": "2 stops",
        "additionalInfo": "No info",
        "holidayDiscounts": 0.0,
        "econmecyPrice": 11753.0,
        "classPrice": 12253,
        "totalSeat": 292,
        "seatFVacant": 36,
        "seatYVacant": 256,
        "discount": 0.05
      },]
    }
  },
  //异步操作和业务逻辑
  actions:
  {
    // 搜索机票axios请求
    getflight(context) {
      request({
        url: "/flights",
        method: "post",
        data: {
          source: context.state.sourcelist[0],
          destination: context.state.destinationlist[0],
          dateOfJourney: context.state.dateOfJourneylist[0],
        }
      }).then((res) => {
        // alert("请求成功!");
        context.commit('GETFIGHT', res.data)
        // console.log(res.data);

      }, error => {
        console.log('错误', error)

      });
    },
    //搜索机票axios请求{多程}
    getflightmax(context) {
      let a = context.state.num - 1
      let b = context.state.num - 2
      request({
        url: "/flights/multiPass",
        method: "post",
        data: {
          source: context.state.sourcelist[a],
          destination: context.state.destinationlist[a],
          dateOfJourney: context.state.dateOfJourneylist[a],
          airlineName: context.state.airlineName
        }
      }).then((res) => {
        // alert("请求成功!");
        context.commit('GETFIGHT', res.data)
        // console.log(res.data);

      }, error => {
        console.log('错误', error)
      });


    },
    //选购机票请求
    orders(context) {
      for (let a = 0; a < context.state.ordersmax.length; a++) {
        if (context.state.seatType[a] == "Y") {
          request({
            url: "/orders/reserve",
            method: "post",
            data: {
              fid: context.state.ordersmax[a].id,
              uid: context.state.userInfo.userId,
              seatType: context.state.seatType[a],
              price: context.state.ordersmax[a].econmecyPrice,
              passagerName: context.state.userInfo.username,
              passagerCardId: context.state.userInfo.usersfz,
              passagerPhone: context.state.userInfo.usersjh,
            }
          }
          ).then((respones) => {
            // alert("请求成功!");

            console.log(respones);
            context.commit("OID", respones.data.data)
          }, error => {
            console.log('错误', error)
          });
        }
        else if (context.state.seatType[a] == "F") {
          request({
            url: "/orders/reserve",
            method: "post",
            data: {
              fid: context.state.ordersmax[a].id,
              uid: context.state.userInfo.userId,
              seatType: context.state.seatType[a],
              price: context.state.ordersmax[a].classPrice,
              passagerName: context.state.userInfo.username,
              passagerCardId: context.state.userInfo.usersfz,
              passagerPhone: context.state.userInfo.usersjh,
            }
          }
          ).then((respones) => {
            // alert("请求成功!");
            console.log(respones);
            context.commit("OID", respones.data.data)
          }, error => {
            console.log('错误', error)
          });
        }

      }
    },
    ordersmax(context, p) {
      let oids = []
      let prices = []
      //订单总
      let pricemax = 0

      //差价
      let b = 0

      for (let a = 0; a < context.state.oids.length; a++) {
        oids.push(context.state.oids[a].oid)
        pricemax = pricemax + context.state.oids[a].price

      }
      b = p - pricemax
      for (let a = 0; a < context.state.oids.length; a++) {


        prices.push(context.state.oids[a].price + b)
      }
      request({
        url: "/orders/confirming",
        method: "post",
        data: {
          oids: oids,
          prices: prices
        }
      }
      ).then((respones) => {
        // alert("oid请求成功!");
        console.log(respones);
        // context.commit("ORDERS", respones.data)
      }, error => {
        console.log('错误', error)
      });

    },
    //机票排序条件请求
    getcondition(context, a) {
      request({
        url: '/flights',
        method: 'post',
        data: {
          source: context.state.sourcelist[0],
          destination: context.state.destinationlist[0],
          dateOfJourney: context.state.dateOfJourneylist[0],
          condition: context.state.condition[a]
        }
      }).then((respones) => {
        // alert("请求成功!");
        console.log(respones);
        context.commit("GETFIGHT", respones.data)
      }, error => {
        console.log('错误', error)
      });
    },
  },


},

)
export default store