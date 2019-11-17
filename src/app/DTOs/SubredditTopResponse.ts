export interface SubredditTopResponse {
  posts: SubredditPost[];
}
export interface SubredditPost {
  authorFullName: string;
  author: string;
  subreddit: string;
  title: string;
  hidden: boolean;
  downs: number;
  name: string;
  ups: number;
  totalAwardsReceived: number;
  mediaEmbed: MediaEmbed;
  thumbnailWidth: number;
  secureMedia: SecureMedia;
  thumbnail: string;
  url: string;
  isVideo: boolean;
}

export interface MediaEmbed {
  content: string;
  width: number;
  scrolling: boolean;
  height: number;
}

export interface SecureMedia {
  oembed?: Oembed;
  reddit_video?: RedditVideo;
}

export interface Oembed {
  providerURL: string;
  description: string;
  title: string;
  url: string;
  thumbnailWidth: number;
  height: number;
  width: number;
  html: string;
  version: string;
  providerName: string;
  thumbnailUrl: string;
  type: string;
  thumbnailHeight: number;
}

export interface RedditVideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}
