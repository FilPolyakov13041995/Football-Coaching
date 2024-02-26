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
    class="!py-4 md:!py-6 lg:!py-8"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div data-aos="flip-up" class="text-center mb-10">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-4xl sm:text-5xl md:text-6xl font-semibold pb-3"
      />
      <div class="border-b-2 border-black w-1/2 mx-auto mb-5"></div>
      <PrismicRichText
        :field="slice.primary.name"
        class="text-2xl sm:text-5xl uppercase p-4"
      />
    </div>
    <div data-aos="flip-up" class="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-12 mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center text-center md:text-left">
        <PrismicImage :field="slice.primary.image" class="w-3/4 rounded-xl" />
        <PrismicRichText
          :field="slice.primary.text"
          class="text-base font-semibold"
        />
      </div>
    </div>
    <div data-aos="zoom-in" class="w-full sm:w-3/4 mx-auto p-6 md:p-12 bg-white rounded-xl mb-10">
      <PrismicRichText :field="slice.primary.description" class="text-lg" />
    </div>
    <div data-aos="zoom-in" class="flex flex-wrap justify-center lg:justify-start gap-5">
      <div v-for="(item, index) in slice.items" :key="index ?? ''">
        <PrismicImage :field="item.images" class="rounded-md" />
      </div>
    </div>
  </Bounded>
</template>
