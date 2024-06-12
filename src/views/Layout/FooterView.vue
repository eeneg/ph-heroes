<script setup>
import { ref } from 'vue'
const ham = ref(false)

const hamClick = () => {
  if (ham.value) {
    ham.value = false
  } else {
    ham.value = true
  }
}
</script>

<style></style>

<template>
  <div class="h-60 flex flex-row bg-gray-300">
    <div class="grow p-4">About This Website</div>
    <div class="grow flex flex-col p-4 text-lg">
      <div>Links</div>
      <div class="text-gray-500">
        <RouterLink
          class="block text-black-900 active:bg-gray-200"
          :to="{ name: 'home' }"
          @click="hamClick"
          >Home
        </RouterLink>
      </div>
      <div class="text-gray-500">
        <RouterLink
          class="block text-black-900 active:bg-gray-200"
          :to="{ name: 'about' }"
          @click="hamClick"
          >About
        </RouterLink>
      </div>
      <div class="text-gray-500">
        <RouterLink
          class="block text-black-900 active:bg-gray-200"
          :to="{ name: 'all' }"
          @click="hamClick"
          >National Heroes
        </RouterLink>
      </div>
      <div class="text-gray-500">Hire Me</div>
    </div>
  </div>
</template>
