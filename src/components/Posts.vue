<template>
  <article v-for="post in formattedPosts" class="shadow">
    <div class="content">
      <h2>{{ post.title }}</h2>
      <h5>{{ post.created_at }}</h5>
      <p>{{ post.body }}</p>
    </div>
    <div v-if="user" class="actions">
      <button class="btn" @click="editPost(post.id)">Edit</button>
      <button class="btn warning" @click="deletePost(post.id)">
        Delete
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import getPosts from "@/composables/getPosts";
import dayjs from "dayjs";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  async setup() {
    const { posts } = await getPosts();
    const user = ref(false);

    const formattedPosts = computed(() => {
      if (posts.value) {
        return posts.value.map(post => {
          let time = dayjs(post.created_at).format("MMMM D, YYYY h:mm:A");
          return { ...post, created_at: time };
        });
      }
    });

    const editPost = (id: number) => {}
    const deletePost = (id: number) => {}

    return { posts, formattedPosts, user };
  }
});
</script>

<style>
article {
  padding: 1.5em 1em;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
}
article .content {
  margin: 1rem 0;
}
article .content h5 {
  font-size: 14px;
  font-weight: 400;
}
article .content h2 {
  font-weight: bold;
  text-transform: capitalize;
  margin: 1rem 0 4px 0;
}
article .content h4 {
  font-weight: normal;
  font-style: italic;
  font-size: 18px;
  text-transform: capitalize;
}
article .content p {
  line-height: 1.75;
  font-weight: 400;
  margin-top: 1rem;
}
article .actions {
}
article .actions button {
  font-size: 12px;
  padding: 12px 10px;
  margin-right: 12px;
}
</style>
