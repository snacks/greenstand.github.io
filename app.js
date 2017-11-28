// Require modules
require('colors');
var express    = require('express'),
    morgan     = require('morgan')('dev'),
    bodyParser = require('body-parser');

// Create express app object
var app = express();

// Mount Middleware
app.use(
//   morgan,
  bodyParser.urlencoded({extended : true}),
  bodyParser.json(),
  express.static('public')
);

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public'});
  });
// Listen for connections
const port = 8080;
app.listen(port, ()=>{
  console.log(`Server running on ${port}`.america);
});