var express = require('express');
var app = express();
var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;
const publicPath = express.static(path.join(__dirname, '/src/client/public'));
const indexPath = path.join(__dirname, '/src/client/index.html');

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
