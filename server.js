
var express    = require('express');
var app        = express();

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var response = {
        "configurations": [
        {
          "id" : 1,
          "name" : "host1",
          "hostname" : "nessus-ntp.lab.com",
          "port" : 1241,
          "username" : "toto"
        }, {
          "id" : 2,
          "name" : "host2",
          "hostname" : "nessus-xml.lab.com",
          "port" : 3384,
          "username" : "admin"
        }
      ]
    }

    var newResponse = null;

    if (req.query['host']) {
      for (var i=0; i<response.configurations.length; i++) {
        var host = response.configurations[i];

        if (req.query['host'] == host.id) {
          newResponse = host;
        }
      }
    } else {
      newResponse = response;
    }

    res.json(newResponse);
});

app.use('/api', router);

app.listen(port);
console.log('Starting server on port ' + port);