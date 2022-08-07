var aws = require('aws-sdk');

var email = "altairtalha@gmail.com";

aws.config.loadFromPath(__dirname + '/config.json');
var ses = new aws.SES();

sender_text = 'talhaaaa'
subject = 'subjekt'
body = 'wassupp'


var params = {
  Destination: {
    BccAddresses: [
    ],
    CcAddresses: [
    ],
    ToAddresses: [
      email,
    ]
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
      },
      Text: {
        Charset: "UTF-8",
        Data: "This is the message body in text format."
      }
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email"
    }
  },
  Source: email,
};
ses.sendEmail(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);           // successful response
});