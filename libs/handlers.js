const fortune = require("./fortuneCookie");

// Handler to render homepage
exports.home = (req, res) => res.render("home");

// Handler to render about page
exports.about = (req, res) =>
  res.render("about", { fortune: fortune.getFortune() });

// Handler to render 404 error page
exports.notFound = (req, res) => res.render("404");

// Handler to render 500 error page
// Express recognizes its error manipulator by its four default args
// Deactivating the rule for eslint should any errors with it
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render("500");
/* eslint-enable no-unused-vars */
