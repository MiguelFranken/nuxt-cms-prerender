<script setup lang="ts">
const route = useRoute()
const _slugs = route.params.slugs
const slugs = Array.isArray(_slugs) ? _slugs : [_slugs]
const path = slugs.join('/')

const { data, error } = await useFetch(`http://localhost:4000/${path}`)

const currentRandomNumber = ref(0)

onMounted(() => {
  setInterval(async () => {
    currentRandomNumber.value = await $fetch<number>(`http://localhost:4000/api/random`)
  }, 1500)
})
</script>

<template>
  <h1>Path: {{ path }}</h1>
  <h2>Data:</h2>
  <pre>{{ data }}</pre>

  <h2>Other interactive components:</h2>
  <Counter />

  <h2>Fetching when component is mounted:</h2>
  <p>Random number: {{ currentRandomNumber }}</p>

  <template v-if="error">
    <h2>Error:</h2>
    <pre>{{ error }}</pre>
  </template>
</template>
