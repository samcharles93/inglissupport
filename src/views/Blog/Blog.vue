<template>
  <div class="blog-page">
    <h1 class="text-center my-4">
      Blog
    </h1>
    <div v-if="postError" class="connectionError">
      <Spinner />
    </div>
    <div v-else>
      <article v-for="post in posts" class="shadow">
        <h5>{{ post.published_at }}</h5>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </article>
    </div>
    <div class="subscribe">
      <form @submit.prevent="handleSubscription">
        <input
          type="text"
          placeholder="enter your email..."
          v-model="emailForSubscription"
        />
        <div v-if="subscribeError">{{ subscribeError }}</div>
        <button class="btn-alt" v-if="isPending"><Spinner /></button>
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
  </div>
</template>

<script>
import { isProxy, ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import getCollection from "@/composables/getCollection";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import Modal from "@/components/Modal.vue";

export default {
  components: { Spinner, Modal },
  setup() {
    const { error: subscribeError, addDoc } = useCollection("subscribedUsers");
    const { documents: posts, error: postError } = getCollection("posts");

    const emailForSubscription = ref("");
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
        console.log("Success");
        if (!subscribeError.value) {
          emailForSubscription.value = "";
          showModal.value = true;
        } else {
          console.log(subscribeError.value);
        }
      }
    };

    return {
      posts,
      emailForSubscription,
      handleSubscription,
      isPending,
      postError,
      subscribeError,
      showModal
    };
  }
};
</script>

<style>
article {
  padding: 1.5em 1em;
  margin: 3em;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: var(--border-radius);
}
article h5 {
  margin-bottom: 3px;
  line-height: 1.5;
  font-style: italic;
}
article h2 {
  margin-bottom: 12px;
  line-height: 2;
  font-weight: bold;
}
article p {
  line-height: 1.75;
  font-weight: 400;
}
.subscribe {
	display: flex;
	width: 100%;
	margin: 2em auto;
	justify-content: center;
}
.subscribe button {
	width: auto;
	margin: 0 1rem;
}
</style>
