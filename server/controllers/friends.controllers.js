const friends = require('../models/friends.model');
// CONTROLLERS
function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  //   const friendId = +req.params.friendId; // +req.params.friendId converts it to a number because the params is comming as a string
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: 'Friend not found' });
  }
}

function createFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json({ error: 'Missing name' });
  } else {
    const newFriend = {
      id: friends.length,
      name: req.body.name,
    };
    friends.push(newFriend);
    res.send(newFriend);
  }
}

module.exports = {
  getFriendById,
  getFriends,
  createFriend,
};
