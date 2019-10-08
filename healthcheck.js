var express = require ('express')
var lightship = require ('lightship');

const app = express();

app.get('/', (req, res) => {
//  console.log("Request handler random was called.");
  res.writeHead(200, {"Content-Type": "application/json"});
  var otherArray = ["Health", "Status"];
  var otherObject = { Health: "Up", Status: "Working" };
  var json = JSON.stringify({
    anObject: otherObject,
    anArray: otherArray,
    another: "item"
  });
  res.end(json);
});

const server = app.listen(8080);

lightship.createLightship();

