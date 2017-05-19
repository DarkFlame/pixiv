
import mongoose from 'mongoose'
import imageUrlsSchema from './image_urls'
let Schema = mongoose.Schema

export default Schema({
  id:Number,
  name:String,
  account:String,
  isFollowed:Boolean,
  profileImageUrls:imageUrlsSchema
}, {
  "_id": false
})
