let cron = require('cron')
let CronJob = cron.CronJob
var parser = require('cron-parser');

try {
  // var interval = parser.parseExpression('0 0 */1 * * *');
  var interval = parser.parseExpression('0 */5 * * * *');

  console.log('Date: ', interval.next().toString()); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)
  console.log('Date: ', interval.next().toString()); // Sat Dec 29 2012 00:44:00 GMT+0200 (EET)

  console.log('Date: ', interval.next().toString()); // Sat Dec 29 2012 00:42:00 GMT+0200 (EET)
  console.log('Date: ', interval.next().toString()); // Sat Dec 29 2012 00:40:00 GMT+0200 (EET)
} catch (err) {
  console.log('Error: ' + err.message);
}
/*

new CronJob({
  cronTime: '*!/10 * * * * *',
  onTick: function () {
    console.log(10)
    throw new Error(0)
  },
  start:true
})

new CronJob({
  cronTime: '*!/5 * * * * *',
  onTick: function () {
    console.log(5)

  },
  start:true
})
*/


