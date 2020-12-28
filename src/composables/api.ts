import { Ref, ref } from "vue";

export type ApiRequest = () => Promise<void>

export default function useApi<T>(url: RequestInfo, options?: RequestInit) {
  const response: Ref<T> = ref(null);

  const request: ApiRequest = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    response.value = data;
  };

  return { response, request };
}
