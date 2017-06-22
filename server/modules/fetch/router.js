
import Router from 'koa-router'
import {fetchByUrl,fetchById,illustBookmarkDetail} from './fetch.ctrl'
let router = Router({
  prefix:'/api'
})


router.post('/fetch', fetchByUrl)
router.get('/fetchById/:id', fetchById)
router.get('/illustBookmarkDetail/:id', illustBookmarkDetail)


export default router
