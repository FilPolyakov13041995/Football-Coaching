<script setup lang="ts">
import { components } from "~/slices";
import { ref } from "vue";

const isLoading = ref(true);

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home")
);

definePageMeta({
  layout: "custom",
});

const { asImageSrc } = usePrismic();

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
