<script setup>
const props = defineProps({
  user: Object,
});
</script>

<template>
  <div v-if="user" class="relative flex items-center space-x-4">
    <div class="relative">
      <span class="absolute text-green-500 right-0 bottom-0">
        <svg width="20" height="20">
          <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
        </svg>
      </span>
      <img
        :src="user.avatar_url"
        :alt="user.poke_name"
        class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
      />
    </div>
    <div class="flex flex-col leading-tight">
      <div class="text-2xl mt-1 flex items-center">
        <span class="text-gray-700 mr-3">{{ user.socket_id }}</span>
      </div>
      <span class="text-lg text-gray-600">{{ user.poke_name }}</span>
    </div>
  </div>
</template>
