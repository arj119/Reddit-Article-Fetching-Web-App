export class SubredditTopResponse {
  posts: SubredditPost[];
}
export class SubredditPost {
  authorFullName: string;
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

export class MediaEmbed {
  content: string;
  width: number;
  scrolling: boolean;
  height: number;
}

export class Oembed {
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

export class SecureMedia {
  oembed: Oembed;
}
