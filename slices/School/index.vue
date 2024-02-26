<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 500,
  });
});

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SchoolSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    class="!py-4 md:!py-6 lg:!py-8 overflow-x-hidden"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div data-aos="fade-left" class="text-center mb-10">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-3xl sm:text-5xl md:text-6xl font-semibold pb-3"
      />
      <div class="border-b border-black w-1/2 mx-auto mb-5"></div>
      <PrismicRichText
        :field="slice.primary.name"
        class="text-2xl sm:text-5xl uppercase p-4"
      />
    </div>
    <div data-aos="fade-right" class="w-full sm:w-3/4 p-0 sm:p-6 mx-auto bg-white rounded-xl mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 items-center text-center md:text-left">
        <PrismicImage :field="slice.primary.image" class="w-full md:w-3/4 rounded-t-xl sm:rounded-xl" />
        <PrismicRichText
          :field="slice.primary.text"
          class="text-base font-semibold p-2"
        />
      </div>
    </div>
    <div data-aos="fade-left" class="w-full sm:w-3/4 mx-auto p-2 sm:p-6 bg-white rounded-xl mb-10">
      <PrismicRichText :field="slice.primary.description" class="text-lg font-medium" />
    </div>
    <div data-aos="fade-right" class="flex flex-wrap justify-center lg:justify-start gap-5">
      <div v-for="(item, index) in slice.items" :key="index ?? ''">
        <PrismicImage :field="item.images" class="rounded-md" />
      </div>
    </div>
  </Bounded>
</template>
