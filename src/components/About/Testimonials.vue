<template>
  <div v-if="testimonial" class="testimonials">
    <h2 class="text-center">
      Testimonials
    </h2>
    <div class="t-box">
      <div class="testimonial">
        <h4 class="testimonial-name">{{ testimonial.name }}</h4>
        <p class="testimonial-role">{{ testimonial.role }}</p>
        <p class="testimonial-message">
          {{ testimonial.message }}
        </p>
      </div>
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script>
import getTestimonials from "@/composables/getTestimonials";
import { ref, watch, watchEffect } from "vue";

export default {
  async setup() {
    const { testimonials } = await getTestimonials();
    const testimonial = ref({});

    let index = 0;

    function updateTestimonial() {
      const { name, message, role } = testimonials.value[index];

      testimonial.value.name = name;
      testimonial.value.message = message;
      testimonial.value.role = role;

      index++;

      if (index > testimonials.value.length - 1) {
        index = 0;
      }
    }

    updateTestimonial();
    setInterval(updateTestimonial, 10000);

    return { testimonial };
  }
};
</script>

<style>
.testimonials {
}
.testimonials h3 {
  padding-bottom: 1rem;
}
.testimonials div.t-box {
  margin: 0 auto;
  width: 100%;
}
.testimonials .testimonial {
  height: 100%;
  line-height: 1.75rem;
  text-align: justify;
}
.testimonials .testimonial-name {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  padding: 6px 1.5rem;
  cursor: pointer;
  background-color: var(--accent);
  color: white;
  margin: auto;
}
.testimonials .testimonial-role {
  padding: 6px 1.5rem;
  background-color: rgb(118, 155, 104);
  font-size: 12px;
  font-weight: bold;
  color: var(--primary);
  margin: auto;
}
.testimonials .testimonial-message {
  padding: 6px 1.5rem;
  background-color: var(--primary);
  margin: auto;
  min-height: 100px;
}
.progress-bar {
  background-color: var(--accent);
  height: 4px;
  width: 100%;
  animation: grow 10s linear infinite;
  transform-origin: left;
}
@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
@media (min-width: 720px) {
  .testimonials div.t-box {
    margin: 0 auto;
    width: 90%;
  }
}
</style>
