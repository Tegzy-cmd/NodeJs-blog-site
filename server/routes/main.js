const { errorMonitor } = require("connect-mongo");
const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
/**
 * GET /
 * HOME
 */

router.get("", async (req, res) => {
  try {
    const locals = {
      title: "Node Js Blog",
      description: "Simple Blog created with NodeJs, Express & MongoDb",
    };
    let perPage = 5;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get("", async (req, res) => {
//     const locals = {
//       title: "Node Js Blog",
//       description: "Simple Blog created with NodeJs, Express & MongoDb",
//     };

//     try {
//       const data = await Post.find();
//       res.render("index", { locals, data });
//     } catch (error) {
//       console.log(error);
//     }
//   });

// insertPostData()

module.exports = router;
