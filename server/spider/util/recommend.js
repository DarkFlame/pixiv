import pixiv from '../api/index'
import moment from 'moment'
import fs from 'fs'
import path from 'path'
import config from '../../config'
import axios from 'axios'
import {IllustsRecommendedNologin} from '../../models'

export default class DownloadRecommend {
  constructor() {
    this.init().then(err=>{console.log(err)})
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

  }

  downloadImg(imgUrl,output) {
    output = output || path.basename(imgUrl)
    return new Promise((resolve,reject) => {
      if (typeof imgUrl !== 'string') {
        reject(new TypeError('Expected a string'))
      }
      let currentDate = moment().format('YYYY-MM-DD')
      let outputResolveDir = path.join(config.fileDir,currentDate)
      if(!fs.existsSync(outputResolveDir)) fs.mkdirSync(outputResolveDir)
      let outputResolvePath = path.join(outputResolveDir,output)
      let outRelativePath = path.join(currentDate,output)
      console.log(outRelativePath)
      if (fs.existsSync(outputResolvePath)) {
        console.log(` img ${imgUrl} exists ************* ${outRelativePath}`)
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
          console.log(`download img from ${imgUrl} ==========> ${outRelativePath}`)
          response.data.pipe(fs.createWriteStream(outputResolvePath))
          resolve(outRelativePath)
        })
    })
  }
}

if (require.main === module) {
  new DownloadRecommend()
}
