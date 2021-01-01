<template>
    <div class="bg-inglis">
      <div class="masthead">
        <div>
          <h1>
            Respecting Choice and
            <span>Independance</span>
          </h1>
          <RouterLink tag="button" class="btn shadow mt-2" to="/about">
            Get to know us
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  
})
</script>

<style>
.bg-inglis {
  height: 90vh;
  width: 100% !important;
  margin: 0 !important;
  background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.masthead {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 40px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  background-color: rgba(74, 85, 104, 0.5);
}
.masthead div {
  text-align: center;
}

.masthead div h1 {
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  line-height: 1.7;
}

.masthead div h1 span {
  text-decoration: underline;
  color: var(--text-color);
  background-color: var(--primary);
  border-radius: 3px;
  letter-spacing: 1px;
  padding: 0 3px;
}

.masthead div button {
  margin-top: 3em;
}
</style>
