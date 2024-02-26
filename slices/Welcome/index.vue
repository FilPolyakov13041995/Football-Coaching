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
  getSliceComponentProps<Content.WelcomeSlice>([
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
      <div class="pb-7">
        <PrismicRichText
          :field="slice.primary.welcome"
          class="text-2xl font-semibold md:text-4xl text-center p-4 leading-normal uppercase"
        />
        <div class="border-b-2 border-black w-1/5 mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <PrismicImage
          :field="slice.primary.image"
          class="rounded-xl shadow-lg"
        />
        <div>
          <PrismicRichText
            :field="slice.primary.bold_text"
            class="text-xl pb-4 font-bold uppercase"
          />
          <p class="md:text-base lg:text-lg tracking-wide line">
            {{ slice.primary.description }}
          </p>
        </div>
      </div>
    </div>
  </Bounded>
</template>

<style scoped>
.line {
  line-height: 35px;
}
</style>
