<template>
  <div class="our-team">
    <div class="profile">
      <div class="image">
        <img src="https://via.placeholder.com/100" alt="placeholder">
      </div>
      <div class="bio">
        <h4>Team Member</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam
          libero doloremque illo, est fugit, cumque molestiae dolores quidem
          corporis porro repudiandae debitis at adipisci odit facilis aspernatur
          quis quisquam.
        </p>
      </div>
    </div>
    <hr>
    <div class="profile">
      <div class="image">
        <img src="https://via.placeholder.com/100" alt="placeholder">
      </div>
      <div class="bio">
        <h4>Team Member</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ea eius
          distinctio temporibus ex repellat modi deleniti fugiat! Ut saepe
          laboriosam quisquam omnis sint, fugit inventore quae culpa iste quia!
        </p>
      </div>
    </div>
    <hr>
    <div class="profile">
      <div class="image">
        <img src="https://via.placeholder.com/100" alt="placeholder">
      </div>
      <div class="bio">
        <h4>Team Member</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia maxime
          a eum asperiores odio vero vitae deserunt libero? Dignissimos minus
          aut aperiam autem officia deserunt in voluptatibus ratione. Ratione,
          laudantium.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-team {
  display: flex;
  flex-direction: column;
}
.our-team .profile {
  display: block;
  margin: 1em 0;
}
.our-team .profile .image {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
.our-team .profile .bio {
  margin: 1em 1em 0;
}
.our-team .profile .bio h4 {
  text-align: center;
  margin-bottom: 1em;
}
.our-team .profile .bio p {
  text-align: center;
}
@media (min-width: 840px) {
  .our-team {
  display: flex;
  flex-direction: row;
}
}
</style>
