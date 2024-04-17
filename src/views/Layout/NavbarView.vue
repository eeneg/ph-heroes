<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
  <nav class="flex flex-col">
    <div class="flex border">
      <div class="flex xs:p-4">asd</div>
      <div class="flex grow flex-row-reverse xs:hidden">
        <div class="md:p-4 text-2xl">
          <RouterLink :to="{ name: 'all' }">National Heroes</RouterLink>
        </div>
        <div class="md:p-4 text-2xl">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </div>
      </div>
      <div class="flex grow flex-row-reverse xs:p-2 md:hidden lg:hidden">
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black-900 dark:hover:bg-gray-300 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          @click="hamClick()"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="ham" class="w-full border-b" id="navbar-hamburger">
      <ul class="flex flex-col font-medium bg-white-50">
        <li>
          <RouterLink
            class="block py-2 px-3 text-black-900 active:bg-gray-200"
            :to="{ name: 'home' }"
            @click="hamClick"
            >Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="block py-2 px-3 text-black-900 active:bg-gray-200"
            :to="{ name: 'all' }"
            @click="hamClick"
            >National Heroes
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
