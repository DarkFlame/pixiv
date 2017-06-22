
import Router from 'koa-router'
import {fetchByUrl,fetchById} from './fetch.ctrl'
let router = Router({
  prefix:'/api'
})


router.post('/fetch', fetchByUrl)
router.get('/fetchById/:id', fetchById)


export default router
