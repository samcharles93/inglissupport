<template>
  <div class="subscribe">
    <form @submit.prevent="handleSubscription">
      <input
        type="text"
        placeholder="enter your email..."
        v-model="emailForSubscription"
      />
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
import useSubscription from "@/composables/useSubscription";
import { ref } from "vue";

export default {
  components: { Modal },
  setup() {
    const emailForSubscription = ref("");
    const showModal = ref(false);
    const isPending = ref(false);

    const handleSubscription = async () => {
      if (emailForSubscription.value) {
        isPending.value = false;
        await useSubscription(emailForSubscription.value);
        emailForSubscription.value = "";
        isPending.value = false;
        showModal.value = true;
      }
    };

    return {
      handleSubscription,
      emailForSubscription,
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
