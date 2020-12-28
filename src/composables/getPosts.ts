import useApi from "./api";
import { ref } from "vue";

export interface Data {
  id:           number;
  title:        string;
  content:      string;
  description:  string;
  category:     number | null;
  author:       Author | null;
  published_at: string;
  created_at:   string;
  updated_at:   string;
  slug:         null;
  body:         string;
  image:        Image[];
}

export interface Author {
  id:           number;
  name:         string;
  email:        string;
  published_at: string;
  created_at:   string;
  updated_at:   string;
  picture:      Image[];
}

export interface Image {
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

export default async function getPosts() {
  const { response: posts, request } = useApi<Data[]>(
    "https://api.catlow.tech/posts"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { posts };
}