var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require("body-parser"),
  winston = require('winston'),
  glob = require('glob'),
  cors = require('cors'),
  morgan = require('morgan');

//Allow Cross Domain Request
app.use(cors())

//Using Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log requests to console
app.use(morgan('dev'));  

//Init Routes
var routes = glob.sync(__dirname + '/app/modules/*/*.route.js')
routes.forEach(function (route) {
  var router = express.Router();
  var moduleRoutes = require(route);
  moduleRoutes(router);
  app.use('/api', router);
})

app.listen(port);
winston.log('info', "Server started on: " + port);
