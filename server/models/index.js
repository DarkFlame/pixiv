import mongoose from 'mongoose'
import config from '../config'
mongoose.Promise = global.Promise
mongoose.set('debug',config.env === 'development')
export default mongoose.connect(config.mongodb.url,{
  useMongoClient: true,
  autoReconnect: true,
  reconnectTries: 1800,
  reconnectInterval: 2000
},function (err) {
  if (err) {
    console.log(err)
  }
})
export {default as IllustsRecommendedNologin} from './illusts_recommended_nologin'


