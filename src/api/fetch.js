import axios from 'axios'
import moment from 'moment'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  console.log('interceptors - request')
  return config;
},function (error) {
  // 请求失败的处理
  return Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 处理响应数据
  console.log('interceptors - response')
  return response;
},function (error) {
  // 处理响应失败
  return Promise.reject(error);
});



//所有调用api的接口
export default {
  cancelAxios(){
    return source.cancel('cancel request')
  },
  getDayRank(){
    return axios.get(`/api/rank/day`,{
      cancelToken: source.token
    })
  },
  getWeekRank(){
    return axios.get(`/api/rank/week`,{
      cancelToken: source.token
    })
  },
  getMonthRank(){
    return axios.get(`/api/rank/month`,{
      cancelToken: source.token
    })
  },
  getFetchId(imgId){
    return axios.get(`/api/fetchById/${imgId}`,{
      cancelToken: source.token
    })
  },
  getIllustRelated(imgId){
    return axios.get(`/api/illustRelated/${imgId}`,{
      cancelToken: source.token
    })
  },
  downloadImgById(imgId){
    return axios.get(`/api/download/${imgId}`,{
      responseType: "blob",
      cancelToken: source.token
    })
  },

  fetchByUrl(url){
    return axios.post(`/api/fetch`,{
      url
    },{
      cancelToken: source.token
    })
  },
  getUserIllusts(userid){
    return axios.get(`/api/userIllusts/${userid}`,{
      cancelToken: source.token
    })
  },
  getSearchIllusts({keywords = '',bookmark = ''}){
    return axios.get(`/api/searchKeywords?keywords=${keywords}&bookmark=${bookmark}`,{
      cancelToken: source.token
    })
  },
  getUserDetail(useid){
    return axios.get(`/api/userDetail/${useid}`,{
      cancelToken: source.token
    })
  },
  getIllustBookmarkDetail(useid){
    return axios.get(`/api/illustBookmarkDetail/${useid}`,{
      cancelToken: source.token
    })
  },
  getRecommendPages(date){
    return axios.get(`/api/recommend/pages?date=${moment(date).format('YYYY-MM-DD')}`,{
      cancelToken: source.token
    })
  }
}
