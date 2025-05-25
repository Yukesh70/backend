const transporter = require('../config/mailer');

const sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'yukesh785.in@gmail.com', // receiving email
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};

module.exports = { sendEmail };
