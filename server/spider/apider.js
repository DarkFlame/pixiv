import {CronJob} from 'cron'

class IllustRankingCron {
  constructor() {
    this.fire.then((res) => {
      console.log(res)
    })
  }
  async fire() {
    new CronJob({
      cronTime: "0 0 */24 * * *",
      onTick: () => {
        try {
          console.log('执行tagValueSync时间',new Date())
        } catch (err) {
        }
      },
      start: true,
      timeZone: 'Asia/Shanghai'
    })
  }
}

if(require.main === module){
    new IllustRankingCron()
}
