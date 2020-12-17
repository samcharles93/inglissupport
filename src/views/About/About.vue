<template>
  <div class="about-page">
    <h1>About Us</h1>
      <section class="text-card text-center shadow p-3">
        <h3 class="text-center pb-2">
          Who we are
        </h3>
        <p>
          <strong>Inglis Support Service</strong> is dedicated to providing only
          the most comprehensive, caring support for our clients.
        </p>
        <br />
        <p>Celebrating our key values in respecting choice and independence;</p>
        <br />
        <p>
          We believe in providing only the fullest service for all our clients.
        </p>
      </section>
      <div class="spacer" />
      <!-- TODO - REMOVE ME -->
      <section id="who-we-are" class="text-card text-center shadow p-3 m-3">
        <h3 class="text-center pb-2">
          What we do
        </h3>
        <h4>This will display the services provided</h4>
        <p>
          <strong>Inglis Support Service</strong> is dedicated to providing only
          the most comprehensive, caring support for our clients.
        </p>
        <br />
        <p>Celebrating our key values in respecting choice and independence;</p>
        <br />
        <p>
          We believe in providing only the fullest service for all our clients.
        </p>
      </section>
      <div class="spacer" />
      <!-- TODO - REMOVE ME -->
      <section class="text-card text-center shadow p-3 mb-3">
        <h3 class="text-center pb-2">
          Testimonials
        </h3>
      </section>
      <div class="spacer" />
      <!-- TODO - REMOVE ME -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        testimonials: [
          {
            id: 1,
            imgUrl: 'https://www.w3schools.com/w3images/bandmember.jpg',
            name: 'John Doe',
            message: 'The service was outstanding'
          },
          {
            id: 2,
            imgUrl: 'https://www.w3schools.com/w3images/bandmember.jpg',
            name: 'Richard Huxley',
            message: 'My Son absolutely loves attending'
          },
          {
            id: 3,
            imgUrl: 'https://www.w3schools.com/w3images/bandmember.jpg',
            name: 'Julie Newton',
            message: 'The Staff are so friendly'
          }
        ]
      }
    },
    beforeMount() {},
    methods: {},
    head() {
      return {
        title: 'About - Inglis Support Service'
      }
    }
  }
</script>

<style scoped>
  .about-page {
    justify-content: unset;
    width: 80%;
    margin: 0 auto;
  }
  .about-page h1 {
    text-align: center;
    margin: 2.5rem 0;
  }


  .enhance-text {
    background-color: var(--accent);
    padding: 3px;
    border-radius: var(--border-radius);
  }

  .t-container {
    max-width: 800px;
    margin: auto;
    padding: 15px;
    text-align: center;
  }

  .t-list {
    overflow: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
  }

  .t-item {
    min-width: 100%;
    min-height: 200px;
    background-color: white;
    scroll-snap-align: center;
    margin-bottom: 10px;
    padding: 0 50px;
  }

  .t-item img {
    margin: 15px auto -60px;
    width: 120px;
    height: 120px;
    border: solid 4px #fff;
    border-radius: 60px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .t-card {
    background-color: rgb(237, 242, 247);
    padding: 80px 40px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .t-card p {
    font-style: italic;
    line-height: 1.6;
  }

  .t-card span {
    display: block;
    margin-top: 20px;
    color: teal;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .profile {
    width: 75px;
    border-radius: 50%;
    box-shadow: 1px 1px 12px 1px rgba(65, 65, 65, 0.2),
      -1px -1px 12px 1px rgba(65, 65, 65, 0.2);
  }

  .message {
    text-align: center;
  }

  @media screen and (min-width: 720px) {
  }
</style>
