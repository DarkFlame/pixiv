import mongoose from 'mongoose'
import config from '../config'
mongoose.Promise = global.Promise

export default mongoose.connect(config.mongodb.url,{
  server: {
    auto_reconnect: true,
    reconnectTries: 1800,
    reconnectInterval: 2000
  }
},function (err) {
  if (err) {
    console.log(err)
  }
})
export {default as Recommend} from './recommend'


