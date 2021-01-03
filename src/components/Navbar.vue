<template>
  <header>
    <nav>
      <div class="brand">
        <RouterLink :to="{ name: 'Home' }">
          <img src="../assets/images/inglis-logo.png" alt="logo" height="70" />
        </RouterLink>
      </div>

      <div class="menu">
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
        <RouterLink :to="{ name: 'Blog' }">Blog</RouterLink>
        <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const menuActive = ref(true);

    return { menuActive };
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
header nav .menu {
  margin: 1rem 0;
}
header nav .menu a {
  margin: 0 0.75rem;
}

.router-link-exact-active {
  color: var(--text-color) !important;
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
