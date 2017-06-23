import PixivAppApi from 'pixiv-app-api'
import config from '../../config'
const {user} = config
class PixivApi {
  constructor() {
    this.BOOKMARK_SUFFIX = 'users入り'
    this.username = user.username
    this.password = user.password
    this.pixiv = new PixivAppApi()
    this.pixiv.login(this.username,this.password)
  }

  illustRanking() {
    return this.pixiv.illustRanking()
  }

  illustRecommendedNologin() {
    return this.pixiv.illustRecommendedNologin()
  }

  searchIllust({keywords,bookmark},params) {
    let key = !Number(bookmark) ? keywords : keywords + ' ' + bookmark + this.BOOKMARK_SUFFIX;
    console.log(key)
    return this.pixiv.searchIllust(key,params)
  }

  fetch(target,params) {
    return this.pixiv.fetch(target,{params})
  }

  illustDetail(id) {
    return this.pixiv.illustDetail(id)
  }

  illustBookmarkDetail(id) {
    return this.pixiv.illustBookmarkDetail(id,{})
  }
}

export default (function () {
  return new PixivApi();
})()
