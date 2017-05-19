import {Recommend} from '../../models'

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

export async function create(ctx){
  let data = null;
  let error = null;
  try {
    data = await Recommend.create({
      a:1
    })
  } catch (ex) {

  }
  ctx.body = {
    status: 'E0',
    data
  };
}
