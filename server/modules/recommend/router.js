
import Router from 'koa-router';
import {test,create} from './recommend.ctrl';
let router = Router();


router.get('/test', test);
router.post('/create', create);


export default router;
