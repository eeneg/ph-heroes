<script setup>
import NavbarView from './views/Layout/NavbarView.vue'
</script>

<template>
  <header>
    <NavbarView />
  </header>
  <div class="xs:p-4">
    <RouterView />
  </div>
</template>

<style scoped></style>
