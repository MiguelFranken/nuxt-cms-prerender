<script setup lang="ts">
const { data: sitetree } = await useFetch('http://localhost:4000/sitetree')
</script>

<template>
  <div>
    <h1>Site Tree</h1>
    <pre>{{ sitetree }}</pre>
  </div>
</template>
