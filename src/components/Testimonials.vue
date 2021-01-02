<template>
  <section class="testimonials">
    <h3 class="text-center">
      Testimonials
    </h3>
    <div class="t-box">
      <Swiper :space-between="25" virtual>
        <SwiperSlide
          class="testimonial"
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :virtualIndex="index"
        >
          <p class="testimonial-name">{{ testimonial.name }}</p>
          <p class="testimonial-message">{{ testimonial.message }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import getTestimonials from "@/composables/getTestimonials";
import SwiperCore, { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.min.css";

export default {
  components: { Swiper, SwiperSlide },
  async setup() {
    const { testimonials } = await getTestimonials();

    SwiperCore.use([Virtual]);

    return { testimonials };
  }
};
</script>

<style>
section.testimonials h3 {
  padding-bottom: 1rem;
}
section.testimonials div.t-box {
  margin: 0 auto;
  width: 80%;
}
section.testimonials .testimonial {
  height: 100%;
}
section.testimonials .testimonial-name {
  padding: 6px 1.5rem;
  cursor: pointer;
  background-color: var(--accent);
  color: white;
  margin: auto;
}
section.testimonials .testimonial-message {
  padding: 6px 1.5rem;
  background-color: var(--primary);
  margin: auto;
  min-height: 100px;
}
@media (min-width: 720px) {
  section.testimonials .testimonial {
  }
}
</style>
