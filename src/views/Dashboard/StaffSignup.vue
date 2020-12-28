<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Full Name" v-model="displayName" required />
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending"><Spinner /></button>
  </form>
</template>

<script>
import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import { useRouter } from "vue-router";

export default {
  components: { Spinner },
  setup() {
    const router = useRouter();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => { // FIXME
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        router.push({ name: "Blog" });
      }
    };

    return { displayName, email, password, error, handleSubmit, isPending };
  }
};
</script>

<style></style>
