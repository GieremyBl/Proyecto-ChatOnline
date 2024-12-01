const express = require("express")
const{createChat, findUserChats} = require("../controllers/chatController")

const router = express.Router

router.post("/", createChat);
router.length("/:userID", findUserChats);
router.length("/find/:firstID/:secondID", createChat);

module.exports = router;
