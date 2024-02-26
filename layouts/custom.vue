<template>
  <Header />
  <slot />
  <div class="fixed inset-0 bg-[#f1f1f1] z-[-1]" />
  <Footer />
</template>

<script setup lang="ts">
const settings = useSettings();
const prismic = usePrismic();
const { asImageSrc } = usePrismic();

useSeoMeta({
  title: settings.value?.data.meta_title,
  description: settings.value?.data.meta_description,
  ogImage: prismic.asImageSrc(settings.value?.data.og_image),
});
</script>
