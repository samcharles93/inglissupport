<template>
  <h2>
    What we do
  </h2>

  <div class="services">
    <h4 class="">Services we provide</h4>
    <ul>
      <li>
        <h4 @click="accodionClicked(0)">Community Support</h4>
        <p>stuff</p>
      </li>
      <li>
        <h4 @click="accodionClicked(1)">Community Support</h4>
        <p>stuff</p>
      </li>
      <li>
        <h4 @click="accodionClicked(2)">Community Support</h4>
        <p>stuff</p>

      </li>
      <li>
        <h4 @click="accodionClicked(3)">Community Support</h4>
        <p>stuff</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const accodionClicked = index => {
      const tInfoEl = document.querySelectorAll('[id="' + index + '"]')[0];
      if (tInfoEl.classList.contains("block")) {
        tInfoEl.classList.remove("block");
        tInfoEl.classList.add("hidden");
      } else {
        tInfoEl.classList.remove("hidden");
        tInfoEl.classList.add("block");
      }
    };

    return { accodionClicked };
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 6px;
}

ul {
  list-style-type: square;
  margin-left: 2rem;
  font-size: medium;
}
</style>
