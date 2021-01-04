<template>
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    hidden
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="bot-field" />
    <label for="name">Name:</label>
    <input name="name" v-model="form.name" type="text" required />
    <label for="email">Email:</label>
    <input name="email" v-model="form.email" type="email" required />
    <label for="phone">Phone:</label>
    <input name="phone" v-model="form.phone" type="tel" required />
    <label for="message">Message:</label>
    <textarea name="message" v-model="form.message" maxlength="500" required />
    <button type="submit" class="btn-alt shadow">Submit</button>
  </form>
  <teleport to="#modals" v-if="showModal">
    <Modal @close="showModal = !showModal">
      <h1>Message Sent</h1>
      <p>Thanks for your message, we'll be back to you as soon as possible</p>
      <template v-slot:links> </template>
    </Modal>
  </teleport>
</template>

<script lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },
  setup() {
    const router = useRouter();

    const showModal = ref(false);

    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    const encode = (data: any) => {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    };

    const handleSubmit = async () => {
      try {
        fetch("/", {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: encode({
            "form-name": "contact",
            ...form.value
          })
        });
        form.value.name = "";
        form.value.email = "";
        form.value.phone = "";
        form.value.message = "";
        showModal.value = !showModal.value;
      } catch (err) {
        console.log(err.message);
      }
    };

    return {
      form,
      handleSubmit,
      showModal
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 3em;
  padding: 1.5em;
  gap: 0.5em;
  width: 100%;
  background-color: var(--bg-header);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
form > label {
  font-size: large;
  font-weight: bold;
}
form input,
form textarea {
  border-radius: var(--border-radius);
  font-size: 0.75em;
  padding: 0.75em;
  border: 1px solid #cecece;
  resize: none;
  font-family: inherit;
  line-height: inherit;
  overflow: visible;
}
form input:focus,
form textarea:focus {
  border: 1px solid var(--primary);
}
</style>
