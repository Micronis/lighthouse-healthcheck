var express = require ('express')
var lightship = require ('lightship');

const app = express();

app.get('/', (req, res) => {
  res.send('200');
});

const server = app.listen(8080);

lightship.createLightship();

