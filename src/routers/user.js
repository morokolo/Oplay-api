/** @format */

const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World! This is Oplay to play");
});

module.exports = router;
