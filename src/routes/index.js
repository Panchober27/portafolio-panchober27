const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "FIXING THE PAGE 😐😐😐",
  });
});

router.get("/live-demos", (req, res) => {
  res.render("live-demos", {
    title: "LIVE DEMOS",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "CONTACTO",
  });
});

router.get("/mobile-demos", (req, res) => {
  res.render("mobile-demos", {
    title: "APLICAIONES MOVILES",
  });
});

router.get("/extra-limpio-main", (req, res) => {
  res.render("extra-limpio-main", {
    title: "EXTRA LIMPIO JAVA DESKTOP APP",
  });
});

router.get("/games", (req, res) => {
  res.render("games", {
    title: "DESARROLLO DE VIDEO JUEGOS",
  });
});

module.exports = router;
