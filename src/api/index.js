const express = require('express');
const app = express();
const port = 3000;
const googleService = require('./google.service');

const runVoice = (res) => {
  googleService.startAPI();
  res.send(googleService.startAPI());
};

app.get('/', (req, res) => {
  res.send(`Go to /startVoice to start recording, and /getVoice when you're done!`);
});

app.get('/startVoice', (req, res) => runVoice(res));

app.get('/getVoice', (req, res) => {
  res.send(googleService.speechContent());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
