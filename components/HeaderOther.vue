<template>
  <div class="bg-[#05182D]">
    <Bounded class="!py-4 md:!py-6 lg:!py-8" as="header">
      <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
        <div v-for="(item, index) in settings?.data.logo" :key="index ?? ''">
          <PrismicLink :field="item.logo_link">
            <PrismicImage :field="item.logo" class="w-24 h-auto" />
          </PrismicLink>
        </div>
        <nav>
          <ul class="flex gap-4 text-white">
            <li
              class="text-sm sm:text-base"
              v-for="item in settings?.data.navigation"
              :key="item.label ?? ''"
            >
              <PrismicLink
                :field="item.link"
                class="font-medium"
                :class="{
                  'text-pink-500': route.path === item.link.url,
                }"
              >
                <p class="hover:text-gray-400">
                  {{ item.label.toUpperCase() }}
                </p>
              </PrismicLink>
            </li>
          </ul>
        </nav>
      </div>
    </Bounded>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const settings = useSettings();
</script>
