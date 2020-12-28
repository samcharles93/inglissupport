<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="Email" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <div class="error" v-if="error">{{ error }}</div>
      <button v-if="!isPending">Login</button>
      <button v-if="isPending"><Spinner /></button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import useLogin from "@/composables/login";

export default {
  components: { Spinner },
  setup() {
    const email = ref("");
    const password = ref("");

    const { user } = useLogin();

    const handleSubmit = async () => {
      await useLogin(email.value, password.value);
    };

    return { email, password, handleSubmit };
  }
};
</script>

<style></style>
