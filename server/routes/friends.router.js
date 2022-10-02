const express = require('express');

const friendsController = require('../controllers/friends.controllers');
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(`ip address: `, req.ip);
  next();
});

friendsRouter.post('/', friendsController.createFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendById);

module.exports = friendsRouter;
