import PixivAppApi from 'pixiv-app-api'
import config from '../../config'
import axios from 'axios'
const {user} = config
class PixivApi {
  constructor() {
    this.BOOKMARK_SUFFIX = 'users入り'
    this.username = user.username
    this.password = user.password
    this.pixiv = new PixivAppApi()
  }

  illustRanking() {
    return this.pixiv.illustRanking()
  }

  //作品推荐s
  illustRecommendedNologin() {
    return this.pixiv.illustRecommendedNologin()
  }

  //标签搜索
  searchIllust({keywords,bookmark},params) {
    let key = !Number(bookmark) ? keywords : keywords + ' ' + bookmark + this.BOOKMARK_SUFFIX;
    console.log(key)
    return this.pixiv.searchIllust(key,params)
  }

  //根据url获取作品列表
  fetch(target,params) {
    return this.pixiv.fetch(target,{params})
  }

  //作品详情
  illustDetail(id) {
    return this.pixiv.illustDetail(id)
  }

  //用户详情
  userDetail(id) {
    return this.pixiv.userDetail(id)
  }

  //用户作品详情
  userIllusts(id) {
    return this.pixiv.userIllusts(id)
  }

  //作品相关推荐
  illustRelated(id) {
    return this.pixiv.illustRelated(id)
  }

  //用户收藏列表
  illustBookmarkDetail(id) {
    return this.pixiv.illustBookmarkDetail(id,{})
  }

  getImgStreamByUrl(imgUrl) {
    return new Promise((resolve) => {
      this.downloadSingleImg(imgUrl).then(({data}) => {
        resolve(data)
      })
    })
  }

  //下载图片
  downloadSingleImg(imgUrl) {
    return axios({
      encoding: null,
      headers: {
        Referer: 'http://www.pixiv.net/'
      },
      method: 'get',
      url: imgUrl,
      responseType: 'stream'
    })
  }
}

export default (function () {
  return new PixivApi();
})()
