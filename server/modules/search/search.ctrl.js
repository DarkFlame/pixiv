// import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import PixivApi from '../../spider/api/index'
const pixiv = new PixivApi()
export async function searchKeywords(ctx) {
  let data = null;
  let {keywords} = ctx.params
  try {
    data = await pixiv.searchIllust(keywords)
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
