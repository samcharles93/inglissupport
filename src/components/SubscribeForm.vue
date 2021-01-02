<template>
  <div class="subscribe">
    <form @submit.prevent="handleSubscription">
      <input
        type="text"
        placeholder="enter your email..."
        v-model="emailForSubscription"
      />
      <div v-if="subscribeError">{{ subscribeError }}</div>
      <button class="btn-alt" v-if="isPending">Saving...</button>
      <button class="btn-alt" v-else>Subscribe</button>
    </form>
  </div>

  <teleport to="#modals" v-if="showModal">
    <Modal @close="showModal = !showModal">
      <h1 class="my-1">Successfully Subscribed</h1>
      <p class="my-1">Thanks for subscribing 🙂</p>
      <p>
        We'll keep you up to date on all the latest events and news from
        <em>Inglis Support Service</em>.
      </p>
      <template v-slot:links></template>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

export default {
  components: { Modal },
  setup() {
    const emailForSubscription = ref("");
    const subscribeError = ref(false);
    const showModal = ref(false);
    const isPending = ref(false);

    const handleSubscription = async () => {
      if (emailForSubscription.value) {
        isPending.value = true;
        const res = await addDoc({
          email: emailForSubscription.value,
          subscribedAt: timestamp()
        });
        isPending.value = false;
        if (!subscribeError.value) {
          emailForSubscription.value = "";
          showModal.value = true;
        } else {
        }
      }
    };

    return {
      handleSubscription,
      emailForSubscription,
      subscribeError,
      showModal,
      isPending
    };
  }
};
</script>

<style>
.subscribe {
  display: flex;
  margin-top: 3em;
}
.subscribe form {
  margin: auto;
}
.subscribe input {
  width: 100%;
  margin-bottom: 6px;
}
.subscribe button {
  width: 100%;
}
</style>
