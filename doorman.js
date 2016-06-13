const http = require('http');
const st = require('st');
const auth = require('http-auth');

const stMount = st({
  path: process.env.DIRECTORY,
  index: process.env.INDEX === 'true' ? true : process.env.INDEX,
  cache: process.env.CACHE === 'true'
});

const basic = auth.basic({ realm: process.env.REALM },
  (user, pw, callback) => {
    callback(user === process.env.USERNAME && pw === process.env.PASSWORD)
  }
);

http.createServer(basic, function(req, res) {
  stMount(req, res);
}).listen(process.env.PORT);
