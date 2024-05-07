<script setup lang="ts">
const counter = ref(0)
</script>

<template>
  <button type="button" @click="counter--">
    -
  </button>
  <span>{{ counter }}</span>
  <button type="button" @click="counter++">
    +
  </button>
</template>
