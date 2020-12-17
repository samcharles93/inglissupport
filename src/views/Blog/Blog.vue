<template>
	<div class="blog-page">
		<h1 class="text-center my-4">
			Blog
		</h1>
		<div v-if="error" class="connectionError">
			<h3>Unable to contact server, Please try again later.</h3>
		</div>
		<div v-else>
			<section v-for="post in posts" class="posts">
				<div class="card">
					<h2 class="subtitle">{{ post.published_at }}</h2>
					<h1 class="title">{{ post.title }}</h1>
					<p>{{ post.content }}</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'

	export default {
		setup() {
			const posts = ref([])
			const error = ref(true)
			const emailForSubscription = ref('')

			const API_URL = 'https://api.catlow.tech/posts'

			async function getPosts() {
				const response = await fetch(API_URL)
				const json = await response.json()
				posts.value = json
				error.value = false
			}

			getPosts()

			return { posts, error, emailForSubscription }
		}
	}
</script>

<style>
	.posts {
		padding: 2em 1em;
		margin: 3em;
	}
</style>
