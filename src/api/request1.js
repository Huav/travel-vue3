//二次封装axios

import axios from "axios";
const request1=axios.create({
  baseURL:'http://localhost:8002', 
  timeout:50000,

});
// 请求拦截器
// request.interceptors.request.use((config)=>{
//     if(store.state.detail.uuid_token){
//         //请求头添加一个字段(userTempId):和后台老师商量好了
//         config.headers.userTempId = store.state.detail.uuid_token;
//       }
//       //需要携带token带给服务器
//       if(store.state.user.token){
//         config.headers.token = store.state.user.token;
//       }
//     return config
// }
// )

// request.interceptors.request.use((config)=>{
//   if(store.state.token){
//       //请求头添加一个字段(userTempId):和后台老师商量好了
//       config.headers.Authorization = store.state.token;
//     }
//   return config
// }
// )

// request.interceptors.response.use((res)=>{
//     return res.data
// },
// (error)=>{
//     return Promise.reject(new Error('faile'))
// }
// )

export default request1