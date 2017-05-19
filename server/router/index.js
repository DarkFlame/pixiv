import RecommendRouter from '../modules/recommend/router'

export default function createRouter(app){
    app.use(RecommendRouter.routes())
}
