const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  console.log(`Received form data: ${JSON.stringify(req.body)}`);
  res.send('Form data received!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});