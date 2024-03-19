const express = require("express");
const loggedIn = require("../controllers/loggedIn");
const router = express.Router();
router.get("/", loggedIn, (req, res) => {
  if (req.user) {
    res.render("index", { status: "LoggedIn", user: req.user });
  } else {
    res.render("index", { status: "No", user: "nothing" });
  }
});
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public/" });
});
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});
module.exports = router;
