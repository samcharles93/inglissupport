<template>
  <div class="blog-page">
    <h1 class="text-center my-4">Blog</h1>
    <Suspense>
      <template #default>
        <Posts />
      </template>
      <template #fallback>
        <div style="height:250px;">
        <Spinner />
        </div>
      </template>
    </Suspense>
    <SubscribeForm />
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import SubscribeForm from "@/components/SubscribeForm.vue";
import Spinner from "@/components/Spinner.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: { Posts, Spinner, SubscribeForm },
  setup() {
    
    return {  };
  }
};
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
