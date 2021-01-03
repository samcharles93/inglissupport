<template>
  <h2>
    What we do
  </h2>

  <div class="services">
    <h4 class="">Services we provide</h4>
    <Accordion title="Community Support">
      <p>
        At Inglis Support, we believe that getting involved with community
        activities, events and outings help our clients foster a strong
        community presence, help build practical skills, develop strong
        interpersonal relationships and most importantly, have fun.
      </p>
    </Accordion>
    <Accordion title="Support Coordination">
      <p>
        Support coordination is in place to help you get the most of your
        funding package and get your plan on track.
      </p>
      <p>
        Services that can help you achieve your plan and goals include but are
        not limited to
      </p>
      <ol>
        <li>
          Helping get the most of your funding and services by coordinating
          service providers and obtaining quotes in line with your plan
        </li>
        <li>Managing your service providers and support team</li>
        <li>
          Connecting you to work, training providers and/or community activities
        </li>
        <li>Finding the right services to suit your unique needs</li>
      </ol>
    </Accordion>
    <Accordion title="Respite">
      <p>
        Our respite services are here to help you, to take care of your loved
        ones when you need a break, need time for activities or just to relax,
        deal with stresses of everyday life and look after yourself.
      </p>
    </Accordion>
    <Accordion title="Tenancy Services">
      <p>
        With our tenancy support services we can help you find the right
        location and accommodation, we can represent you in meetings with real
        estate agencies, help you complete your application and help arrange
        inspections, moving, purchasing furniture and getting utilities
        connected.
      </p>
    </Accordion>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: { Accordion }
};
</script>

<style scoped>
h2 {
  margin-bottom: 6px;
  text-align: center;
}
.services {
  font-size: medium;
  padding: 0.5rem 0;
}
.services h4 {
  margin-bottom: 0.5rem;
}
@media (min-width: 720px) {
  .services {
    margin: 0 auto;
    width: 90%;
  }
}
</style>
