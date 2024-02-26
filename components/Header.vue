<template>
  <Bounded
    as="header"
    class="relative h-screen bg-cover bg-center bg-no-repeat !py-4 md:!py-6 lg:!py-8"
    style="background-image: url(&quot;/img/HeaderImage.webp&quot;)"
  >
    <div class="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
    <div class="text-white relative z-20">
      <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
        <div v-for="(item, index) in settings?.data.logo" :key="index ?? ''">
          <PrismicLink :field="item.logo_link">
            <PrismicImage :field="item.logo" class="w-24 h-auto" />
          </PrismicLink>
        </div>
        <nav>
          <ul class="flex gap-4">
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
      <PrismicRichText
        :field="settings?.data.bg_text"
        class="text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl text-center sm:leading-tight py-40 sm:py-44"
      />

      <div
        class="text-gray-300 flex flex-col sm:flex-row gap-2 sm:gap-10 items-center justify-center text-xs"
      >
        <p class="flex items-center justify-center gap-2">
          <IconsLoco class="w-4 h-auto" />Брест, ул. Красногвардейская, 59
        </p>
        <p class="flex items-center justify-center gap-2">
          <IconsPhone class="w-4 h-auto" /><a href="tel:+375291234567"
            >+375 (29) 851-04-49</a
          >
        </p>
      </div>
    </div>
  </Bounded>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const settings = useSettings();

const route = useRoute();
</script>
