<template>
  <div class="nav-container shadow">
    <nav>
      <div class="nav-brand">
        <img src="../assets/images/inglis-logo.png" alt="logo" height="70" />
      </div>
      <div class="nav-menu" :class="{ active: this.navActive }">
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
        <RouterLink to="/blog">
          Blog
        </RouterLink>
        <RouterLink to="/contact">
          Contact
        </RouterLink>
      </div>
      <div
        class="nav-burger"
        @click="toggleNav"
        :class="{ toggle: this.navActive }"
      >
        <div class="line1" />
        <div class="line2" />
        <div class="line3" />
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navActive: false
      }
    },
    methods: {
      toggleNav() {
        this.navActive = !this.navActive
      }
    }
  }
</script>

<style>
  .nav-container {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--bg-header);
  }

  nav {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      'logo burger'
      'menu menu';
  }

  .nav-brand {
    grid-area: logo;
    grid-column: 1;
    margin: 12px 1rem;
    height: 10vh;
  }
  .nav-brand img {
    height: 100%;
    max-width: 100%;
  }

  .nav-menu {
    grid-area: menu;
    display: none;
    padding: 0 1rem;
  }

  .nav-menu a {
    color: var(--text-color);
    text-decoration: none;
    outline: none;
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

  .nav-burger {
    grid-area: burger;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  .nav-burger div {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    margin: 6px 3px;
    transition: 0.3s ease;
    background-color: var(--accent);
  }

  .nav-menu.active {
    display: grid;
    background-color: var(--bg-body);
  }

  .active a {
    padding: 1rem 0;
  }

  .toggle .line1 {
    transform: translate(12px, 12px);
  }
  /* .toggle .line2 {
    opacity: 0;
  } */
  .toggle .line3 {
    transform: translate(-12px, -12px);
  }

  @media screen and (min-width: 720px) {
    nav {
      grid-template-areas: 'logo menu';
    }

    .nav-burger {
      display: none;
    }

    .nav-menu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-menu a {
      margin: 0 1rem;
    }
  }
</style>
