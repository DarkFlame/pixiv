// import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import pixiv from '../../spider/api/index'
export async function fetchByUrl(ctx) {
  let data = null;
  console.log(ctx.request)
  let {url} = ctx.request.body
  try {
    data = await pixiv.fetch(url)
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
