const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const validator = require("../validator/");
router.get("/", requireSignin, postController.getPosts);
router.post("/post", validator.createPostValidator, postController.createPost);

module.exports = router;
