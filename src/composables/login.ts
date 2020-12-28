import useApi from '@/composables/api'
import { ref } from 'vue'

export interface Data {
  jwt:  string;
  user: User;
}

export interface User {
  id:         number;
  username:   string;
  email:      string;
  provider:   string;
  confirmed:  boolean;
  blocked:    boolean;
  role:       Role;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id:          number;
  name:        string;
  description: string;
  type:        string;
}


export default async function useLogin(email: string, password: string) {
  const { response: user, request } = useApi<Data>(
    "https://api.catlow.tech/auth/local", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        identifier: email,
        password: password,
      })
    }
  )

  const loaded = ref(false)

  if (loaded.value === false) {
    await request();
    loaded.value = true
  }

  return { user }
}