<template>
  <div class="create-post">
    <form @submit.prevent="handleSubmit">
      <h4>Create New Post</h4>
      <input type="text" placeholder="Post title" v-model="title" required />
      <input type="text" placeholder="Post description" v-model="description" />
      <textarea
        placeholder="Type some content here..."
        v-model="body"
        rows="15"
        required
      ></textarea>
      <div class="error">{{ error }}</div>

      <div class="buttons">
        <input
          @click="cancelForm"
          type="button"
          name="cancel"
          value="Cancel"
          class="btn-alt warning"
          v-if="!isPending"
        />
        <input
          type="button"
          name="submit"
          value="Submit"
          class="btn-alt"
          v-if="!isPending"
        />
        <input
          type="button"
          name="loading"
          value="Loading..."
          class="btn-alt"
          v-else
          disabled
        />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { useRouter } from "vue-router";
import { timestamp } from "@/firebase/config";

export default {
  components: { Spinner },
  setup() {
    const { error, addDoc } = useCollection("posts");
    const { user } = getUser();
    const router = useRouter();

    const title = ref("");
    const description = ref("");
    const body = ref("");
    const isPending = ref(false);

    const handleSubmit = async () => {
      if (title.value && body.value) {
        isPending.value = true;
        const res = await addDoc({
          title: title.value,
          description: description.value,
          body: body.value,
          userId: user.value.uid,
          author: user.value.displayName,
          createdAt: timestamp()
        });
        isPending.value = false;
        if (!error.value) {
          title.value = "";
          description.value = "";
          body.value = "";
          router.push({ name: "Blog" });
        }
      }
    };

    const cancelForm = () => {
      router.push({ name: 'Blog' })
    }

    return { title, description, body, isPending, error, handleSubmit, cancelForm };
  }
};
</script>

<style>
.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 3em;
  min-height: 40vh;
}
.create-post form {
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
.create-post form h4 {
  font-size: large;
  font-weight: bold;
}
.create-post form input,
.create-post form textarea {
  border-radius: var(--border-radius);
  font-size: 0.75em;
  padding: 0.75em;
  border: 1px solid #cecece;
  resize: none;
  font-family: inherit;
  line-height: inherit;
  overflow: visible;
}
.create-post form input:focus,
.create-post form textarea:focus {
  border: 1px solid var(--primary);
}
.create-post form .buttons input {
  width: 50%;
}
.create-post form .buttons input:focus {
  border: 1px solid black;
}
</style>
