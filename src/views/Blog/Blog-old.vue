<template>
  <div class="blog-page">
    <h1 class="text-center my-4">
      Blog
    </h1>
    <div v-if="error" class="connectionError">
      <h3>Unable to contact server, Please try again later.</h3>
    </div>
    <div v-if="!error" class="blog-container">
      <div class="posts-grid">
        <h3>Latest News</h3>
        <div
          v-for="post in posts"
          :key="post.id"
          class="post text-card shadow p-3"
        >
          <div class="post-title">
            {{ post.title }}
          </div>
          <div v-if="post.published_at" class="published">
            {{ post.published_at }}
          </div>
          <div class="post-desc">
            {{ post.description }}
          </div>
          <p>read more...</p>
          <!-- <router-link class="btn-underline post-link" :to="{ name: 'BlogPost', params: { data: post } }">
            read more...
          </router-link> -->
        </div>
      </div>
      <div v-if="!error" class="sidebar">
        <div class="recent-posts">
          <!-- Recent Blog Posts Goes Here -->
          <h3>Recent Posts</h3>
          <div v-for="post in posts" :key="post.id">
            <p @click="this.$router.push('/blog/' + post.id)">
              {{ post.title }}
            </p>
          </div>
        </div>
        <form @submit.prevent="handleSubscribe" class="subscribe">
          <h3>Subscribe</h3>
          <p>Get the latest Inglis Support Service news direct to your inbox.</p>
          <input
            v-model="emailForSubscription"
            type="email"
            placeholder="Email"
            required
          />
          <input class="btn-alt" type="submit" value="Subscribe Now" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        posts: [],
        error: null,
        emailForSubscription: ''
      }
    },
    async mounted() {
      const uri = 'https://api.catlow.tech/posts'

      try {
        const res = await axios.get(uri).then(res => {
          this.posts = res.data
        })
      } catch (error) {
        this.error = error
      }
    },
    methods: {
      handleSubscribe() {
        console.log(this.emailForSubscription)
      }
    }
  }
</script>

<style>
  .blog-page {
    height: 100%;
  }
  .blog-container {
    display: grid;
    justify-content: center;
    gap: 2em;
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'post';
  }
  .posts-grid {
    margin: auto auto 1.5em;
    display: grid;
    gap: 0.8em;
    width: 90%;
  }
  .post {
    display: grid;
    grid-row: span 3;
    grid-template-rows: subgrid;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: var(--border-radius);
    width: 100%;
  }

  .sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }

  .recent-posts {
    width: 100%;
    padding: 2rem;
    margin-bottom: 1.5rem;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .recent-posts h3 {
    text-align: justify;
    margin-bottom: 1.5rem;
  }

  .recent-posts div p {
    margin: 1rem 0;
    cursor: pointer;
  }

  .subscribe {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 100%;
    padding: 2rem;
    border-radius: var(--border-radius);
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .subscribe h3 {
    text-align: justify;
    margin-bottom: 1em;
  }

  .subscribe p {
    text-align: justify;
    margin-bottom: 1em;
  }

  .subscribe input {
    border: none;
    font-size: 0.75em;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .subscribe input[type='email'] {
    padding: 1em;
    margin-bottom: 1em;
  }

  .subscribe input[type='submit'] {
  }

  .subscribe input:focus {
    outline: none;
  }

  .connectionError {
    text-align: center;
  }

  @media screen and (min-width: 720px) {
    .blog-container {
      width: 80%;
      margin: auto;
      grid-template-areas: 'post sidebar';
      gap: 0.8em;
    }
    .posts-grid {
      margin: 0 0 1.5em;
      width: unset;
    }
    .sidebar {
      width: 30vw;
      margin: unset;
    }
  }
</style>
