/*
 * Email Controller
 */

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.post = function (req, res) {
    var email = req.body;
    
    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'localhost', 
        port: 25,
        secure: false, 
        ignoreTLS: true, 
        logger: true, 
        debug: true
    }));

    var mailOptions = {
        to: "webmaster@ipfs-pin.com", 
        from: email.name + " <" + email.address + ">", 
        subject: "Ipfs-Pin.com Contact: " + email.subject, 
        text: email.message
    };
    
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            res.json({success: false, error: err});
        } else {
            res.json({success: true, info: info});
        }
    });
    
};

/*
 * vim: ts=4 et autoindent
 */