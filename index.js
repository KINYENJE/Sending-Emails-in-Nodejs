const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'njengajimmy232@gmail.com',
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'njengajimmy232@gmail.com',
  to: 'njengajames232@gmail.com',
  subject: 'Sending Email using Node.js',
  html: `<h1>Welcome</h1>
        <p>That was easy!</p>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
