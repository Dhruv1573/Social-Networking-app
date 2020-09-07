const _ = require('lodash');
const express = require('express');
const { requireSignin } = require("../controllers/auth");
const { userById, allUsers, getUser,updateUser,deleteUser } = require('../controllers/user');

const router = express.Router();



router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, updateUser);
router.delete("/user/:userId",requireSignin, deleteUser);
router.get("/users", allUsers);



router.param('userId', userById);

module.exports = router;