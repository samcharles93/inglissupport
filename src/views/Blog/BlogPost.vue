<template>
	<div>
		<!-- Post Page -->
		{{ route.name }}
		<!-- <div v-if="post">
      Post exists.
    </div>
    <div v-else>
      Post doesn't exist.
    </div> -->
	</div>
</template>

<script>
	export default {
		props: [  ],
		setup() {

      const API_URL = 'https://api.catlow.tech/posts'
      
      async function getPost() {
        
      }

      return { post }
		}
	}
</script>

<style></style>
