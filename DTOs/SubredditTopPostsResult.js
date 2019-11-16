
module.exports =
{
    subredditTopPostDTO: function(body) {
        if(body === undefined || body.data === undefined) {
            return [];
        }
        var data = body.data.children;
        var clean = [];
        for(var i = 0; i < data.length; ++i) {
            var child = data[i];
            clean.push(sanitizeData(child));
        }
        return clean;
    }
};

function sanitizeData(child) {
    return {
        authorFullName: child.data.author_fullname,
        author: child.data.author,
        subreddit: child.data.subreddit,
        title: child.data.title,
        hidden: child.data.hidden,
        downs: child.data.downs,
        name: child.data.name,
        ups: child.data.ups,
        totalAwardsReceived: child.data.total_awards_received,
        mediaEmbed: child.data.media_embed,
        thumbnailWidth: child.data.thumbnail_width ,
        secureMedia : child.data.secure_media,
        thumbnail : child.data.thumbnail,
        url: child.data.url,
        isVideo: child.data.is_video
    }
}
