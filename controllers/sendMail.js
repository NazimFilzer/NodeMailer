var nodemailer = require('nodemailer');

const sendMail = (req, res) => {

    try {
        const { email, content, subject } = req.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nazimfilzer@gmail.com',
                pass: 'fuawqjhnpwhlktmk'
            }
        });

        var mailOptions = {
            from: 'nazimfilzer@gmail.com',
            to: email,
            subject: subject,
            text: content,
            // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>' 
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status().json({ error: error.message })
            } else {
                res.status(200).json({ message: 'Email sent:' + info.response })
                console.log('Email sent: ' + info.response);
            }
        });

    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendMail }