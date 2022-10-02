const express = require('express');

const messagesController = require('../controllers/messages.controllers');
const messagesRouter = express.Router();

messagesRouter.post('/', messagesController.postMessage);
messagesRouter.get('/', messagesController.getMessages);

module.exports = messagesRouter;
