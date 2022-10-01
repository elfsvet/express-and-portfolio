const express = require('express');
const app = express();
const PORT = 3001;

const colors = require('colors');

app.get('/', (req,res) => {
    res.send({
        id:1,
        name: 'Isac'
    })
})

app.get('/messages',(req,res)=> {
    res.send('<ul><li>Hello Albert</li></ul>');
})
app.post('/messages',(req,res)=> {
    console.log('Updating messages...');
})

app.listen(PORT, () => {
  console.log(`listen on port http://localhost:${PORT}`.magenta);
});
