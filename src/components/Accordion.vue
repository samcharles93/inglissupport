<template>
  <div class="service">
    <div @click.prevent="active = !active" class="heading">
      <h4>{{ title }}</h4>
      <span class="down-Arrow" v-show="!active">&#9660;</span>
      <span class="up-Arrow" v-show="active">&#9650;</span>
    </div>
    <div class="content" v-show="active"><slot /></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: [ "title" ],
  setup(props, context) {

    const active = ref(false);

    return { active };
  }
};
</script>

<style>
.service .heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: var(--accent);
  cursor: pointer;
  border-bottom: 1px solid var(--primary);
}
.service .heading h4 {
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
}
.service .heading span {
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
}
.service .content {
  background-color: var(--primary);
  padding: 1rem;
}
.service .content p {
  text-align: justify;
  
}
.service .content a {

}
.service .content ol {
  list-style-type: square;
  padding: 1rem;
}

ol {
}
</style>
