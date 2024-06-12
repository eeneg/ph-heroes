<script setup>
import NavbarView from './views/Layout/NavbarView.vue'
import FooterView from './views/Layout/FooterView.vue'
</script>

<template>
  <div class="md:pl-[15rem] md:pr-[15rem]">
    <nav>
      <NavbarView />
    </nav>
    <div class="flex min-h-screen flex-row mt-10 max-xs:p-4 max-sm:p-4">
      <div class="basis-2/3 max-md:grow mt-4 mb-[10rem]">
        <RouterView />
      </div>
      <div class="grow max-md:hidden">
        <!-- todo nav -->
      </div>
    </div>
  </div>
  <footer>
    <FooterView />
  </footer>
</template>

<style scoped></style>
