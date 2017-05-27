
import Router from 'koa-router'
import {searchKeywords} from './search.ctrl'
let router = Router({
  prefix:'/api/searchKeywords'
})


router.get('/:keywords', searchKeywords)


export default router
