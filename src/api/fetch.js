import axios from 'axios'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  console.log('interceptors - request')
  return config;
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  console.log('interceptors - response')
  return response;
}, function (error) {
  // 处理响应失败
  return Promise.reject(error);
});

export default {
  getFetchId(imgId){
    return axios.get(`/api/fetchById/${imgId}`,{
      cancelToken: source.token
    })
  } ,
  downloadImgById(imgId){
    return axios.get(`/api/download/${imgId}`,{
      responseType: "blob",
      cancelToken: source.token
    })
  },
  cancelAxios(){
    return source.cancel('cancel request')
  }
}
