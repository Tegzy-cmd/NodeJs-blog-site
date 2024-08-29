const { errorMonitor } = require("connect-mongo");
const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
/**
 * GET /
 * HOME
 */

router.get("", async (req, res) => {
  const locals = {
    title: "Node Js Blog",
    description: "Simple Blog created with NodeJs, Express & MongoDb",
  };

  try {
    const data = await Post.find();
    res.render("index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

// insertPostData()

module.exports = router;
