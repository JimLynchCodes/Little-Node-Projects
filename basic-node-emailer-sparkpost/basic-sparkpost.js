var SparkPost = require('sparkpost');
var mailer = new SparkPost('YOUR_SPARKPOST_API_KEY');

var YOUR_EMAIL = 'you@your_domain.com';

mailer.transmissions.send({
  transmissionBody: {
    content: {
      from: 'testing@sparkpostbox.com',
      subject: 'Oh hey!',
      html:'<html><body><p>Testing SparkPost 2- Hello from Jim\'s Node Server!</p></body></html>'
    },
    recipients: [
      {address: YOUR_EMAIL}
    ]
  }
}, function(err, res) {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Woohoo! You just sent your first mailing!');
  }
});