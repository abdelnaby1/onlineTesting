var nodemailer = require('nodemailer');
var SendMail = (To , Subject , Body , res , renderPage)=>{

    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'hhr49@yahoo.com',
            pass: 'zohtozvwxwbmltuz'
        }

    });
    var mailOptions = {
        from: 'hhr49@yahoo.com',
        to: To,
        subject: Subject,
        text: Body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);

        } else {
            console.log('Email sent: ' + info.response);
            res.redirect(renderPage);

        }
    });

};

module.exports = {
    SendMail : SendMail
}