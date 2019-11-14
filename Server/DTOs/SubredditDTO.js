
module.exports =
{
    subredditDTO: function(body) {
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
        author_fullname: child.data.author_fullname,
        subreddit: child.data.subreddit,
        title: child.data.title,
        hidden: child.data.hidden,
        downs: child.data.downs,
        name: child.data.name,
        ups: child.data.ups,
        total_awards_received: child.data.total_awards_received,
        media_embed: child.data.media_embed,
        thumbnail_width: child.data.thumbnail_width ,
        secure_media : child.data.secure_media,
        thumbnail : child.data.thumbnail,
        url: child.data.url,
        is_video: child.data.is_video
    }
}
