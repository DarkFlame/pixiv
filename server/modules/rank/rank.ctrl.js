import {wrapBody} from '../../util/index'
import pixiv from '../../spider/api/index'

/**
 * 天排行
 * @param ctx
 * @return {Promise.<void>}
 */
export async function rank(ctx) {
  let data = null;
  try {
    let {mode} = ctx.params
    console.log(mode)
    data = await pixiv.illustRanking({mode})
    console.log(require('util').inspect(data,true,null,true))

  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
