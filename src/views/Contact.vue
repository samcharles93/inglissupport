<template>
  <h1 class="text-center my-4">Contact Us</h1>
  <div class="contact-page">
    <form @submit.prevent="handleSubmit">
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
    <section class="contact-info">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.620731217613!2d145.7258656932093!3d-40.98978505843468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7bf3d56c102e89%3A0x26e570462b6f6156!2s120%20Goldie%20St%2C%20Wynyard%20TAS%207325!5e0!3m2!1sen!2sau!4v1608209732436!5m2!1sen!2sau"
          width="100%"
          height="250"
          frameborder="0"
          style="border:none;display:flex;border-radius:var(--border-radius)"
          aria-hidden="false"
        ></iframe>
      </div>
      <div>
        <h4>Email:</h4>
        <p>
          <a href="mailto:info@inglissupport.com">info@inglissupport.com</a>
        </p>
      </div>
      <div>
        <h4>Phone:</h4>
        <p><a href="tel:+61364422198">03 6442 2198</a></p>
      </div>
      <div>
        <h4>Address:</h4>
        <p>120 Goldie St, Wynyard TAS 7325</p>
      </div>
    </section>
  </div>
  <teleport to="#modals" v-if="showModal">
    <Modal @close="showModal = !showModal">
      <h1>Message Sent</h1>
      <p>Thanks for your message, we'll be back to you as soon as possible</p>
      <template v-slot:links>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from '../components/Modal.vue'

export default {
	components: { Modal },
  setup(props, context) {
    const router = useRouter();
    const showModal = ref(false)

    const contactInfo = ref({
      email: "",
      phone: "",
      address: ""
    });

    const name = ref("");
    const email_address = ref("");
    const phone_number = ref("");
    const message = ref("");

    const handleSubmit = async () => {
      // TODO - update handleSubmit
      try {
        // Submit to firestore
        // Show messages on staff page
        name.value = ''
        email_address.value = ''
        phone_number.value = ''
        message.value = ''
        showModal.value = !showModal.value
      } catch (err) {
      }
    };

    return {
      contactInfo,
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

<style>
.contact-page {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin: 3em;
}
.contact-page form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 3em;
  padding: 1.5em;
  gap: 0.5em;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.contact-page form > label {
  font-size: large;
  font-weight: bold;
}
.contact-page form input,
.contact-page form textarea {
  border-radius: var(--border-radius);
  font-size: 0.75em;
  padding: 0.75em;
  border: 1px solid #cecece;
  resize: none;
  font-family: inherit;
  line-height: inherit;
  overflow: visible;
}
.contact-page form input:focus,
.contact-page form textarea:focus {
  border: 1px solid var(--primary);
}
.contact-page section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.contact-page section div {
  margin-bottom: 1.5em;
}
.contact-page section .map {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
}

@media (min-width: 740px) {
  .contact-page {
    flex-direction: row;
    gap: 0.8em;
  }
  .contact-page form {
    width: 80%;
    margin-bottom: 0;
  }
  .contact-page section {
    width: 50%;
    margin-bottom: 0;
    justify-content: space-around;
  }
  .contact-page section .map {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
