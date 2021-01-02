<template>
  <div class="about-page">
    <h1>About Us</h1>

    <section id="who-we-are">
      <WhoWeAre />
    </section>
    
    <section id="our-team">
      <OurTeam />
    </section>

    <section id="our-services">
      <OurServices />
    </section>

    <Suspense>
      <template #default>
        <section id="testimonials">
          <Testimonials />
        </section>
      </template>
      <template #fallback>
        <div style="height:250px;">
          <Spinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Testimonials from "@/components/About/Testimonials.vue";
import OurServices from "@/components/About/OurServices.vue";
import WhoWeAre from "@/components/About/WhoWeAre.vue";
import OurTeam from "@/components/About/OurTeam.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { Testimonials, Spinner, OurTeam, OurServices, WhoWeAre }
};
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
}
.about-page h1 {
  text-align: center;
  margin: 2.5rem 0;
}
.about-page section {
  padding: 1.5em 1em;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: var(--border-radius);
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 720px) {
  .about-page {
  }
}
</style>
