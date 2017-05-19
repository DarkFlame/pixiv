
import Router from 'koa-router';
import {test,pages} from './recommend.ctrl';
let router = Router({
  prefix:'/api/recommend'
});

router.get('/test', test);
router.get('/pages', pages);


export default router;
