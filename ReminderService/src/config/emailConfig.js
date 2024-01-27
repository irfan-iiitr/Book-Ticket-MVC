const nodemailer= require('nodemailer');

const {EMAIL_ID,EMAIL_PASS} = require('./index');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
});

module.exports =    transporter;