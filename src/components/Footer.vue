<template>
  <footer>
    <div class="socials">
      <img src="../assets/images/we-heart-ndis.svg" alt="we heart ndis" />
      <p>Registered NDIS Provider</p>
    </div>
    <div class="info">
      <p>Inglis Support Service © {{ year }}</p>
      <p>
        Designed with dedication by <a href="https://catlow.tech">CatlowTech</a>
      </p>
      <p>ABN 56 335 494 559</p>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const year = ref('')
    let d = new Date()

    const updateYear = () => {
      year.value = d.getFullYear()
    }

    updateYear()

    return { year };
  }
};
</script>

<style>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 20vh;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: var(--bg-header);
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
}
footer .info {
  width: 90%;
  margin: 1rem;
  text-align: center;
}
footer .info p {
  font-size: 12px;
  font-weight: bold;
  line-height: 2;
}
footer .info p a {
  text-decoration: none;
  color: var(--text-color);
  font-style: italic;
  transition: all 0.3s ease;
}
footer .info p a:hover {
  color: rgba(0, 0, 0, 0.7);
  font-style: italic;
}
footer .socials {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 1rem;
}
footer .socials {
}
footer .socials img {
  height: 60px;
}
footer .socials p {
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  border: 1px solid var(--text-color);
  border-radius: 4px;
  background-color: white;
  padding: 4px;
  margin-left: 1rem;
}
.footer-links {
  display: flex;
  padding: 4px 5em;
  position: relative;
  min-height: 3vh;
  background-color: var(--bg-header);
}
.footer-links a {
  font-size: medium;
  font-weight: bold;
}

@media (min-width: 720px) {
  footer {
    flex-direction: row;
  }
}
</style>
