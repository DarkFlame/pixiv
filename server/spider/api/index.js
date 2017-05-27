import PixivAppApi from 'pixiv-app-api'
import util from 'util'
export default class PixivApi {
  constructor() {
    this.pixiv = new PixivAppApi()
  }

  illustRanking() {
    return this.pixiv.illustRanking()
  }

  illustRecommendedNologin() {
    return this.pixiv.illustRecommendedNologin()
  }
  searchIllust(keywords) {
    return this.pixiv.searchIllust(keywords)
  }
}
