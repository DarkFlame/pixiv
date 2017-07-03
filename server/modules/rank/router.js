
import Router from 'koa-router'
import {rank} from './rank.ctrl'
let router = Router({
  prefix:'/api/rank'
})


router.get('/:mode', rank)


export default router
