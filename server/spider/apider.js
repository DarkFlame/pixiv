import {CronJob} from 'cron'
import DownloadRecommend from './util/recommend'

class IllustRankingCron {
  constructor() {
    this.fire().then((res) => {

    })
  }

  async fire() {
    new CronJob({
      cronTime: "0 0 */24 * * *",
      onTick: () => {
        try {
          new DownloadRecommend();
        } catch (err) {
        }
      },
      start: true,
      timeZone: 'Asia/Shanghai'
    })
  }
}

if (require.main === module) {
  new IllustRankingCron()
}
