import useApi from '@/composables/api'
import { ref } from 'vue'

export interface Data {
  id:         number;
  email:      string;
  created_at: string;
  updated_at: string;
}

export default async function useSubscription(email: string) {
  const { response: subscribed, request } = useApi<Data[]>(
    "https://api.catlow.tech/subscribed-users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email
      })
    }
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { subscribed };
}