const express = require('express');
// adds colors to the server listener and console.logs
const colors = require('colors');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3001;

// middleware set up
app.use((req, res, next) => {
  // console.log('We hit middleware')
  // console.log(req.url);
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});
app.use(express.json());

// CONTROLLERS
// Friends
// mounting the friends router
app.use('/friends', friendsRouter);

// Messages
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`🚀 🌎 Server listening on http://localhost:${PORT}`.magenta);
});
