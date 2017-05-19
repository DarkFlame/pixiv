import mongoose from 'mongoose'
let Schema = mongoose.Schema

export default new Schema({
  squareMedium: String,
  medium: String,
  large: String,
}, {
  "_id": false
})
