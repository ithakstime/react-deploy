require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = (name, emailid, country, mobileno, company, inquiry, cb) => {
  const mailOptions = {
    from: emailid,
    to: "haksinterlance@gmail.com",
    subject: name,
    text: [
      "Name =" +
        name +
        "Email =" +
        emailid +
        "Country =" +
        country +
        "Mobile No =" +
        mobileno +
        "Company =" +
        company +
        "Inquiry =" +
        inquiry,
    ],
  };
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
module.exports = sendMail;
