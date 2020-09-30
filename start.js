const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const sendMail = require("./src/components/mail");
require("dotenv").config();
const form = require("./src/components/form");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;
connect.once("open", () =>
  console.log("MongoDB connection established successfully!")
);
app.get("/", (req, res) => {
  form
    .find()
    .then((name) => console.log(name))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});
app.post("/hakstime", function(req, res) {
  var { name, emailid, country, mobileno, company, inquiry } = req.body;
  sendMail(name, emailid, country, mobileno, company, inquiry, function(
    err,
    data
  ) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });

  var responses = new form({
    name: req.body.name,
    emailid: req.body.emailid,
    country: req.body.country,
    mobileno: req.body.mobileno,
    company: req.body.company,
    inquiry: req.body.inquiry,
  });
  responses
    .save()
    .then(() => console.log("the new responses is added successfully!!"))
    .catch((err) => console.log(`Error: ${err}`));
});
app.listen(port, () => console.log(`The app is running on : ${port}`));
