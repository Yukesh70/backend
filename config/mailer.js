const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yukesh785.in@gmail.com', // your email
    pass: 'dher usmt xgfw hrkp',    // your Gmail app password
  },
});

module.exports = transporter;
