export interface Data {
  id:           number;
  name:         string;
  email:        string;
  published_at: string;
  created_at:   string;
  updated_at:   string;
  picture:      Picture[];
  posts:        Post[];
}

export interface Picture {
  id:                number;
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  created_at:        string;
  updated_at:        string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  name:   string;
  hash:   string;
  ext:    string;
  mime:   string;
  width:  number;
  height: number;
  size:   number;
  path:   null;
  url:    string;
}

export interface Post {
  id:           number;
  title:        string;
  content:      string;
  description:  string;
  category:     number;
  author:       number;
  published_at: string;
  created_at:   string;
  updated_at:   string;
  slug:         null;
  body:         string;
  image:        Picture[];
}
