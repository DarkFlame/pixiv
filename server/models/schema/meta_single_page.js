import mongoose from 'mongoose'
let Schema = mongoose.Schema

export default new Schema({
  originalImageUrl: String
}, {
  "_id": false
})
