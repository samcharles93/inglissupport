<template>
  <Navbar />
  <router-view class="container" v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navbar, Footer },
  setup() {


    return {};
  }
};
</script>

<style>
.fadeIn {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
.fadeOut {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeOut;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
