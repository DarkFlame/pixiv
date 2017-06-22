// import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import pixiv from '../../spider/api/index'
/**
 * 根据url查询
 * @param ctx
 * @return {Promise.<void>}
 */
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
/**
 * 根据插图id查询
 * @param ctx
 * @return {Promise.<void>}
 */
export async function fetchById(ctx) {
  let data = null;
  let {id} = ctx.params
  try {
    data = await pixiv.illustDetail(id)
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data && data.illust)
}

/**
 * 根据id 查询 收藏数
 * @param ctx
 * @return {Promise.<void>}
 */
export async function illustBookmarkDetail(ctx) {
  let data = null;
  let {id} = ctx.params
  try {
    data = await pixiv.illustBookmarkDetail(id)
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data && data.illust)
}



