# TOP SUBREDDIT FETCHING WEB APP 
**By Arjun Banerjee**

This is my submission for the Cisco web apps exercise. 

#Running Locally

To run locally (starting from project directory):

In one terminal shell firstly run 'cd Server' and then 'npm install && npm start'.
In another terminal shell firstly  'cd Frontend' and then 'npm install && npm run dev'.

# Backend
I developed an Node ExpressJs back end server which will firstly let the user search Reddit's Subreddit directory with a given search
query. And also fetches the top posts for a user given subreddit name. The responses are sanitized
and only produce relevant information for the user.

My backend has been deployed to Heroku also and is accessible by url https://subredditbackendserver.herokuapp.com

The end points are:

GET **/api/subreddit/search/{search-term}**

To retrieve subreddit names which include given search term

GET **/api/posts/search/{subreddit-name}** 

To retrieve top posts for the given subreddit name.



# Frontend
To develop my front end I used Angular and implemented a single paged application. I also wrote some protractor e2e tests which
can be run by 'npm run e2e'.

My backend has been deployed to Heroku also and is accessible by url https://subredditfrontend.herokuapp.com

P.S. it takes a few seconds of using the search bar for the backend server to become responsive sometimes due to deployment on Heroku's nature.




