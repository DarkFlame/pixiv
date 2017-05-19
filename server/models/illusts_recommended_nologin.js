import mongoose from 'mongoose'
import imageUrlsSchema from './schema/image_urls'
import userSchema from './schema/user'
import originalImageUrlSchema from './schema/meta_single_page'
let Schema = mongoose.Schema

let schema = new Schema({
  id: String,
  title: String,
  type: String,
  imageUrls: imageUrlsSchema,
  user: userSchema,
  metaSinglePage: originalImageUrlSchema,
  caption: String,
  width: Number,
  height: Number,
  restrict: Number,
  localePath: String,
  createDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 1
  }
})

schema.index({
  id: 1
})


// schema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I dont have a name"
//   console.log(greeting)
// }

export default mongoose.model('IllustsRecommendedNologin',schema)
