<template>
  <div class="create-post">
    <form @submit.prevent="handleSubmit">
      <h4 v-if="!$route.params">Create New Post</h4>
      <h4 v-else>Update Post</h4>
      <div v-if="$route.params" class="post-info">
        <p>Author: {{ post.author}}</p>
      </div>
      <input type="text" placeholder="Post title" v-model="title" required />
      <!-- TODO - REPLACE EDITOR -->
      <!-- <ckeditor
        :editor="editor"
        v-model="body"
        :config="editorConfig"
      ></ckeditor> -->
      <div class="error">{{ error }}</div>
      <div>Current Route Params: {{ $route.params }}</div>
      <div class="buttons">
        <button @click="cancelForm" class="btn-alt warning">Cancel</button>
        <button type="submit" class="btn-alt mx-1" v-if="!isPending">
          Save Post
        </button>
        <button class="btn-alt" v-else disabled><Spinner /></button>
      </div>
    </form>
  </div>
</template>

<script>
import { onBeforeUpdate, onMounted, ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const title = ref("");
    const body = ref("");
    const isPending = ref(false);

    console.log('Post title: ', post.title);
    
    const handleSubmit = async () => {
      const res = await updateDoc({ // FIXME
        title: title.value,
        body: body.value
      });
      if (!error.value) {
        title.value = "";
        body.value = "";
        router.push({ name: "Blog" });
      }
    };

    const cancelForm = () => {
      router.push({ name: "Blog" });
    };

    return {
      title,
      body,
      isPending,
      error,
      handleSubmit,
      cancelForm,
      post
    };
  }
};
</script>

<style>
.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
.create-post form .buttons {
  margin-left: auto;
}
</style>
