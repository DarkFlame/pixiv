import RecommendRouter from '../modules/recommend/router'
import ProxyRouter from '../modules/proxyRouter/index'

export default function createRouter(app){
    app.use(RecommendRouter.routes())
  app.use(ProxyRouter.routes())

}
