var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Enter mail',
        pass: 'Enter Key'
    }
});

var mailOptions = {
    from: 'Enter mail',
    to: ["nazim@gmail.com", "nazim11@gmail.com"],
    subject: 'My Nodemail',
    text: `NAZIM sent to both`,
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>' 
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});