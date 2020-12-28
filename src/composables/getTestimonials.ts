import useApi from "./api";
import { ref } from "vue";

export interface Data {
  id:         number;
  name:       string;
  message:    string;
  created_at: string;
  updated_at: string;
}

export default async function getTestimonials() {
  const { response: testimonials, request } = useApi<Data[]>(
    "https://api.catlow.tech/testimonials"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { testimonials };
}