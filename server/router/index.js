import RecommendRouter from '../modules/recommend/router'
import ProxyRouter from '../modules/proxyRouter/index'
import SearchRouter from '../modules/search/router'
import FetchRouter from '../modules/fetch/router'

export default function createRouter(app) {
  app.use(RecommendRouter.routes())
  app.use(ProxyRouter.routes())
  app.use(SearchRouter.routes())
  app.use(FetchRouter.routes())
}
