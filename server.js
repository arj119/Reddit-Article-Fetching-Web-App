// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const subredditTopPostsResult = require('./DTOs/SubredditTopPostsResult');
const subredditSearchResult = require('./DTOs/SubredditSearchResult');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
// more routes for our API will happen here

// get searched subreddit top stories
router.route('/posts/search/:subreddit')
    .get(function(req, res) {
      let query = req.params.subreddit;
      let url = `https://www.reddit.com/r/${query}/top.json`;
      request(url, function (err, response, body) {
          res.setHeader('Content-Type', 'application/json');
          if(err) {
              res.send("Not available");
          } else {
              res.json(subredditTopPostsResult.subredditTopPostDTO(JSON.parse(body)));
          }
      });
    });

// get searched subreddits
router.route('/subreddit/search/:query')
    .get(function(req, res) {
        let query = req.params.query;
        let url = `https://www.reddit.com/api/subreddit_autocomplete.json?query=${query}`;
        request(url, function (err, response, body) {
            if(err) {
                res.status(err.httpRequestStatusCode).send("Error");
            } else {
                res.json(subredditSearchResult.subredditSearchResultDTO(JSON.parse(body)));
            }
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
