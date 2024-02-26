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
  getSliceComponentProps<Content.CardSlice>([
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
    <div data-aos="fade-up">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-xl md:text-2xl font-semibold py-6 text-center md:text-left uppercase"
      />
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center sm:place-items-stretch md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          class="max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
          v-for="(item, index) in slice.items"
          :key="index ?? ''"
        >
          <PrismicImage
            :field="item.image_card"
            v-if="index < 4"
            class="rounded-t-lg w-full"
          />
          <div class="p-5">
            <PrismicRichText
              :field="item.name_card"
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            />
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
              {{ item.description_card }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
