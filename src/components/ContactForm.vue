<template>
  <form @submit.prevent="handleSubmit">
    <input type="hidden" name="form-name" value="ContactUs" />
    <label>Name:</label>
    <input v-model="name" type="text" required />
    <label>Email:</label>
    <input v-model="email_address" type="email" required />
    <label>Phone:</label>
    <input v-model="phone_number" type="tel" required />
    <label>Message:</label>
    <textarea v-model="message" maxlength="500" required />
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from '@/components/Modal.vue'

export default {
  setup() {
    const router = useRouter();

    const showModal = ref(false);

    const name = ref("");
    const email_address = ref("");
    const phone_number = ref("");
    const message = ref("");

    const handleSubmit = async () => {
      // TODO - update handleSubmit
      try {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
          
        })
        name.value = "";
        email_address.value = "";
        phone_number.value = "";
        message.value = "";
        showModal.value = !showModal.value;
      } catch (err) {}
    };

    return {
      name,
      email_address,
      phone_number,
      message,
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
