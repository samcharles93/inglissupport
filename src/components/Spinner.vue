<template>
      <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 30px;
  height: 30px;
  margin: auto;
  border: 4px solid transparent;
  border-radius: 100%;
  border-top-color: var(--accent);
  animation: spin 1.3s linear infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
