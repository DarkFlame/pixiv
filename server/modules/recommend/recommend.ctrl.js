import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import moment from 'moment'
export async function test(ctx) {
  let data = null;
  let error = null;
  try {

  } catch (ex) {

  }
  ctx.body = {
    status: 'E0',
    data: [
      {
        a: 1
      }
    ]
  };
}

/**
 * 获取推荐页面的分页信息
 * @param ctx
 * @return {Promise.<void>}
 */
export async function pages(ctx) {
  let data = null;
  try {
    let {date} = ctx.request.query
    let today = moment(date)
    let tomorrow = moment(today).add(1,'days')
    data = await IllustsRecommendedNologin.find({
      updateDate: {
        $gte: today.toDate(),
        $lte: tomorrow.toDate(),
      }
    })
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
