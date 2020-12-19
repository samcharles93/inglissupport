<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Login</button>
    <button v-if="isPending"><Spinner /></button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import useLogin from '@/composables/useLogin'
  import Spinner from '@/components/Spinner.vue'

  export default {
    components: { Spinner },
    setup() {
      const { error, login, isPending } = useLogin()

      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        const res = await login(email.value, password.value)
        if (!error.value) {
        }
      }

      return { email, password, handleSubmit, error, isPending }
    },
  }
</script>

<style></style>
