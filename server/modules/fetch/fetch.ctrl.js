// import {IllustsRecommendedNologin} from '../../models'
import {wrapBody} from '../../util/index'
import {basename} from 'path'
import pixiv from '../../spider/api/index'
import fetchService from './fetch.service'
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
    console.log(id)
    data = await pixiv.illustDetail(id)
    console.log(data)
  } catch (e) {
    console.log(e)
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
    console.log(id)
    data = await pixiv.illustBookmarkDetail(id)

  } catch (e) {
    console.log(e)
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
/**
 * 根据用户id查询用户详情
 * @param ctx
 * @return {Promise.<void>}
 */
export async function userDetail(ctx) {
  let data = null;
  let {id} = ctx.params
  try {
    console.log(id)
    data = await pixiv.userDetail(id)

  } catch (e) {
    console.log(e)
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
/**
 * 根据用户id查询作品详情
 * @param ctx
 * @return {Promise.<void>}
 */
export async function userIllusts(ctx) {
  let data = null;
  let {id} = ctx.params
  try {
    console.log(id)
    data = await pixiv.userIllusts(id)
    console.log(data)
  } catch (e) {
    console.log(e)
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
/**
 *
 * @param ctx
 * @return {Promise.<void>}
 */
export async function illustRelated(ctx) {
  let data = null;
  let {id} = ctx.params
  try {
    console.log(id)
    data = await pixiv.illustRelated(id)

  } catch (e) {
    console.log(e)
    ctx.body = wrapBody(e)
  }
  ctx.body = wrapBody(null,data)
}
/**
 * 根据图片id 下载图片的流
 * @param ctx
 * @return {Promise.<void>}
 */
export async function downloadImgById(ctx) {
  let stream = null;
  let {id} = ctx.params
  try {
    let imgInfo = await pixiv.illustDetail(id);
    let imgUrl = fetchService.getOriginalUrl(imgInfo)
    stream = await pixiv.getImgStreamByUrl(imgUrl)
    ctx.attachment(basename(imgUrl))
  } catch (e) {
    console.log(e)
    ctx.body = wrapBody(e)
  }
  ctx.body = stream
}



