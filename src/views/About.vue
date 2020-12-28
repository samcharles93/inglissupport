<template>
  <div class="about-page">
    <h1>About Us</h1>
    <section class="who-we-are">
      <h2>
        Who we are
      </h2>
      <p>
        <strong>Inglis Support Service</strong> is dedicated to providing only
        the most comprehensive, caring support for our clients.
      </p>
      <p>Celebrating our key values in respecting choice and independence;</p>
    </section>
    <section class="our-mission">
      <h2>
        What we do
      </h2>
      <h4>This will display the services provided</h4>
      <h3>
        Lacinia Ultrices Euismod Ornare Ullamcorper Pharetra Neque Consectetuer
      </h3>
      <p>
        Tempor, ut convallis lacinia. Pretium volutpat, hymenaeos Diam. Lorem,
        vestibulum sit curabitur nonummy lobortis sollicitudin. Magnis varius
        cursus <strong>ut</strong> vitae mollis semper pede rhoncus tempor mi.
        Adipiscing integer, inceptos litora vel platea Nisl semper curabitur
        nostra est curae; felis amet parturient ligula vehicula platea euismod.
        Felis sit eu lacus congue.
      </p>

      <p>
        <strong>Quam</strong> feugiat. Pede hac <strong>molestie</strong> dolor
        taciti tortor blandit egestas non Eget Ligula nunc dolor libero
        sociosqu, <strong>luctus</strong> auctor sed volutpat integer.
        Consectetuer quam eu faucibus cursus.
      </p>

      <h2>Platea Sociis Viverra Faucibus Hac Felis Venenatis Tellus</h2>
      <p>
        Egestas morbi. Amet, <em>amet</em> varius potenti ligula. Mi fringilla
        nunc, fusce curabitur tellus congue velit convallis vivamus sollicitudin
        sollicitudin conubia nibh hendrerit tristique.
      </p>
    </section>
    <Suspense>
      <template #default>
        <Testimonials />
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
import Testimonials from "@/components/Testimonials.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { Testimonials, Spinner }
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
  margin-bottom: 1rem;
}
.about-page section h2 {
  margin-bottom: 1rem;
}

.about-page section.who-we-are {
}
.about-page section.our-mission {
}
.about-page section.testimonials {
}

@media screen and (min-width: 720px) {
  .about-page {
  }
}
</style>
