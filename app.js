var aws     = require('aws-sdk');

var email   = "altairtalha@gmail.com";

aws.config.loadFromPath(__dirname + '/config.json');
var ses = new aws.SES();

sender_text = 'talhaaaa'
subject = 'subjekt'
body = 'wassupp'

var ses_mail = "From: " + sender_text + "<" + email + ">\n";
ses_mail += "To: " + email + "\n";
ses_mail += "Subject:"+ subject + "\n";
ses_mail += "MIME-Version: 1.0\n";
ses_mail += "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
ses_mail += "--NextPart\n";
ses_mail += "Content-Type: text/html; charset=us-ascii\n\n";
ses_mail += body + "\n\n";
ses_mail += "--NextPart\n";
ses_mail += "Content-Type: text/plain;\n";
ses_mail += "--NextPart--";

var params = {
    RawMessage: { Data: new Buffer(ses_mail) },
    Destinations: [ email ],
    Source: "<" + email + ">'"
};

ses.sendRawEmail(params, function(err, data) {
    if(err) {
        console.log(err);
    } 
    else {
        console.log(data);
    }           
});