import PixivApi from '../api/index'
import util from 'util'
import fs from 'fs'
import config from '../../config'
import path from 'path'
import axios from 'axios'
import {IllustsRecommendedNologin} from '../../models'
const pixiv = new PixivApi()

export default class DownloadRecommend {
  constructor() {
    this.init()
  }

  async init() {
    try {

      let recommendData = await pixiv.illustRecommendedNologin()
      // console.log(util.inspect(recommendData,true,null,true))
      await this.writeToDB(recommendData && recommendData.illusts)

    } catch (err) {
      console.log(err)
    }
  }

  async writeToDB(models) {
    for (let item of models) {
      try {
        item.localePath = await this.downloadImg(item.metaSinglePage.originalImageUrl || item.imageUrls.large || item.imageUrls.medium || item.imageUrls.squareMedium)
        await this.create(item)
      } catch (err) {
        console.log(err)
      }
    }
  }

  create(model) {
    return IllustsRecommendedNologin.create(model)
    // return new Promise((resolve) => {
    //   IllustsRecommendedNologin.insertMany(models,((err,res) => {
    //     console.log(err)
    //     if (!err) resolve()
    //   }))
    // })
  }

  downloadImg(imgUrl,output) {
    output = output || path.basename(imgUrl)
    return new Promise((resolve,reject) => {
      if (typeof imgUrl !== 'string') {
        reject(new TypeError('Expected a string'))
      }
      if (!fs.existsSync(output)) {
        console.log(` img ${imgUrl} exists ************* ${output}`)
        return resolve()
      }
      axios({
        encoding: null,
        headers: {
          Referer: 'http://www.pixiv.net/'
        },
        method: 'get',
        url: imgUrl,
        responseType: 'stream'
      })
        .then(function (response) {
          console.log(`download img from ${imgUrl} ==========> ${output}`)
          response.data.pipe(fs.createWriteStream(path.resolve(config.fileDir,output)))
          resolve(output)
        })
    })
  }
}

if (require.main === module) {
  new DownloadRecommend()
}
