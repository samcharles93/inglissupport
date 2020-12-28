<template>
  <div class="dashboard">
    <div class="greeting">
      <h1 class="title">Dashboard</h1>
      <h3 class="subtitle">Hello</h3>
    </div>
    <nav></nav>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  setup() {
    // const { user } = getUser();

    return { };
  }
};
</script>

<style>
.dashboard {
  background-color: yellow;
  width: 100%;
  height: 100vh;
}
.dashboard .greeting {
  height: 20vh;
  text-align: justify;
  margin: 3em auto;
  width: 80%;
  background-color: #fff;
}
.dashboard nav {
  @media (min-width: 768px) {
  }
}
</style>
