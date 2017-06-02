import PixivAppApi from 'pixiv-app-api'
class PixivApi {
  constructor() {
    this.BOOKMARK_SUFFIX = 'users入り'
    this.pixiv = new PixivAppApi()
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
}

export default (function () {
  return new PixivApi();
})()
