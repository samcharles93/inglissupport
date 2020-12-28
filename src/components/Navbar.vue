<template>
  <header>
    <nav>
      <div class="brand">
        <RouterLink :to="{ name: 'Home' }">
          <img src="../assets/images/inglis-logo.png" alt="logo" height="70" />
        </RouterLink>
      </div>

      <div class="menu">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </div>
    </nav>
    <nav v-if="user" class="auth-subnav">
      <div class="user-links">
        <RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
        <RouterLink v-if="route.name === 'Blog'" :to="{ name: 'CreatePost' }"
          >Create Post</RouterLink
        >
        <button class="btn-underline" @click="handleLogout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const isLoggedIn = ref(false);
    const menuActive = ref(true);
    const user = ref(false);

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Login" });
      }
    };

    return { menuActive, handleLogout, route, user };
  }
};
</script>

<style>
header {
  width: 100%;
  padding: 12px 0;
  background-color: var(--bg-header);
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.1);
}
header nav {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}
header .auth-subnav {
  width: 80%;
  margin: 0 auto;
}
header .auth-subnav .user-links {
  margin-left: auto;
}
header .auth-subnav .user-links a, header .auth-subnav .user-links button {
  font-size: 1rem;
}
header nav .brand {
}
header nav .brand img {
}
header nav .menu {
  margin: 1rem 0;
}
header nav .menu a {
  margin: 0 0.75rem;
}

.router-link-exact-active {
  color: var(--text-color) !important;
  font-style: italic;
  text-decoration: underline;
}

.router-link-exact-active:hover {
  text-decoration: underline;
}

.router-link-exact-active:focus {
  text-decoration: underline;
  outline: none;
}

.user-links {
}
.user-links a,
.user-links button {
  margin: 0 0.75rem;
  padding: unset;
}

@media (min-width: 720px) {
  header nav {
    flex-direction: row;
  }
  header nav .menu {
    margin-left: auto;
  }
}
</style>
