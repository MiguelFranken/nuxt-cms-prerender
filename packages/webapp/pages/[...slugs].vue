<script setup lang="ts">
const route = useRoute()
const _slugs = route.params.slugs
const slugs = Array.isArray(_slugs) ? _slugs : [_slugs]
const path = slugs.join('/')

const { data, error } = await useFetch(`http://localhost:4000/${path}`)
</script>

<template>
  <h1>Path: {{ path }}</h1>
  <h2>Data:</h2>
  <pre>{{ data }}</pre>

  <template v-if="error">
    <h2>Error:</h2>
    <pre>{{ error }}</pre>
  </template>
</template>
