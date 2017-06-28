import Router from 'koa-router'
import {
  fetchByUrl,
  fetchById,
  illustBookmarkDetail,
  userDetail,
  illustRelated,
  downloadImgById,
  userIllusts
} from './fetch.ctrl'
let router = Router({
  prefix: '/api'
})


router.post('/fetch',fetchByUrl)
router.get('/fetchById/:id',fetchById)
router.get('/illustBookmarkDetail/:id',illustBookmarkDetail)
router.get('/userDetail/:id',userDetail)
router.get('/userIllusts/:id',userIllusts)
router.get('/illustRelated/:id',illustRelated)
router.get('/download/:id',downloadImgById)


export default router
