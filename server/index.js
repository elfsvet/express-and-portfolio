const http = require('http');
const PORT = 3001;
// event emitter
const server = http.createServer();

const friends = [
  {
    id: '0',
    name: 'Nik Tesla',
  },
  {
    id: '1',
    name: 'Sir Isaac Newton',
  },
  {
    id: '2',
    name: 'Slava',
  },
  {
    id: '3',
    name: 'Misha',
  },
  {
    id: '4',
    name: 'Sasha',
  },
  {
    id: '5',
    name: 'Kolya',
  },
];

server.on('request', (req, res) => {
  const items = req.url.split('/');
  // /friends/2

  const id = parseInt(items[items.length - 1]);
  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      if (data) {
        const friend = data.toString();
        console.log(`Request: ${friend}`);
        friends.push(JSON.parse(friend));
      }
    });
    req.pipe(res);
  } else if (req.method === 'GET' && items[1] === 'friends') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      res.end(JSON.stringify(friends[id]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac.</li>');
    res.write('<li>What is your thoughts on astronomy?</li>');
    res.write('<ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
