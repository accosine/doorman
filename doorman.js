const http = require('http');
const st = require('st');
const auth = require('http-auth');

var stMount = st({
  path: process.env.DIRECTORY,
  index: process.env.INDEX,
  cache: process.env.CACHE === 'true'
});

const basic = auth.basic({ realm: process.env.REALM },
  (user, pw, callback) => {
    callback(user === process.env.USERNAME && pw === process.env.PASSWORD)
  }
);

// Creating new HTTP server. 
http.createServer(basic, function(req, res) {
  stMount(req, res);
}).listen(process.env.PORT);
