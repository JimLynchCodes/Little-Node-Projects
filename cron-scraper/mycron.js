/**
 * Created by bobolicious3000 on 2/6/16.
 */
var crontab = require('node-cron');
var jobId = crontab.schedule("*/1 * * * *", function() {
    // This function will be called every minute!
    console.log("yes, it has been called!");
})