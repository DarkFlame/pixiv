import RecommendRouter from '../modules/recommend/router'
import ProxyRouter from '../modules/proxyRouter/index'
import SearchRouter from '../modules/search/router'

export default function createRouter(app){
    app.use(RecommendRouter.routes())
  app.use(ProxyRouter.routes())
  app.use(SearchRouter.routes())
}
