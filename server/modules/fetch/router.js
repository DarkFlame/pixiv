
import Router from 'koa-router'
import {fetchByUrl} from './fetch.ctrl'
let router = Router({
  prefix:'/api'
})


router.post('/fetch', fetchByUrl)


export default router
