<template>
	<div class="blog-page">
		<h1 class="text-center my-4">
			Blog
		</h1>
		<div v-if="error" class="connectionError">
			<h3>Unable to contact server, Please try again later.</h3>
		</div>
		<div v-else>
			<article v-for="post in posts" class="shadow">
					<h5>{{ post.published_at }}</h5>
					<h2>{{ post.title }}</h2>
					<p>{{ post.content }}</p>
			</article>
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

			// TODO - Transfer to firestore
			// ! getCollection
			
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
</style>
