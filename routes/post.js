const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const validator = require("../validator/");
router.get("/", postController.getPosts);
router.post(
  "/post/new/:userId",
  requireSignin,
  postController.createPost,
  validator.createPostValidator
);
router.get("/posts/by/:userId", requireSignin, postController.postsByUser);
router.delete(
  "/post/:postId",
  requireSignin,
  postController.isPoster,
  postController.deletePost
);
router.put("/post/:postId", requireSignin, postController.isPoster, postController.updatePost);

router.param("userId", userById);
router.param("postId", postController.postById);
module.exports = router;
