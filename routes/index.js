var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/dash", function (req, res, next) {
  res.render("dash.ejs");
});
router.get("/employee", function (req, res, next) {
  res.render("employee.ejs");
});
router.get("/jobs", function (req, res, next) {
  res.render("jobs.ejs");
});

module.exports = router;
