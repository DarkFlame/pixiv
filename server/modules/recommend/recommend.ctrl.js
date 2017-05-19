import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
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

export async function pages(ctx) {
  let data = null;
  try {
    data = await IllustsRecommendedNologin.find({})
  } catch (e) {
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
