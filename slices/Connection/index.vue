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
  getSliceComponentProps<Content.ConnectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div data-aos="fade-up">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-center uppercase text-xl md:text-2xl font-semibold pb-10"
      />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div v-for="(item, index) in slice.items" :key="index ?? ''">
          <PrismicImage :field="item.images" v-if="index < 4" class="pb-5 w-32 mx-auto" />
          <p class="text-center">{{ item.description }}</p>
        </div>
      </div>
      <div class="mt-12 flex justify-center">
        <PrismicLink
          class="py-7 px-14 text-center bg-white rounded-3xl text-lg mt-6"
          :field="slice.primary.button_link"
        >
          {{ slice.primary.button_text }}
        </PrismicLink>
      </div>
    </div>
  </Bounded>
</template>
