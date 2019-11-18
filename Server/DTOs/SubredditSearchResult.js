module.exports =
    {
        subredditSearchResultDTO: function(body) {
            if(body === undefined) {
                return [];
            }
            var data = body.subreddits;
            var clean = [];
            for(var i = 0; i < data.length; ++i) {
                var child = data[i];
                clean.push(sanitizeData(child));
            }
            return clean;
        }
    };

function sanitizeData(subreddit) {
    return {
        numSubscribers: subreddit.numSubscribers,
        name: subreddit.name,
        communityIcon: subreddit.communityIcon,
        icon: subreddit.icon
    }
}
