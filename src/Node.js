var express = require("express"),
  bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var es = require("express-sequelize");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
route.post("/", (req, res) => {
  var q = req.body.q;
  console.log(q);
  var options = {
    method: "POST",
    url: "https://translation.googleapis.com/language/translate/v2",
    form: {
      key: process.env.TRANSLATE,
      q: q,
      target: "en"
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body);
  });
});
