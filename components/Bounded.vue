<template>
    <Component
      :is="as || 'section'"
      class="px-4 py-10 md:py-14 md:px-6 lg:py-16 font-montserrat"
    >
      <div class="max-w-7xl w-full mx-auto">
        <slot />
      </div>
    </Component>
  </template>
  
  <script setup lang="ts">
  defineProps<{
      as?: string
  }>()
  </script>