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
  getSliceComponentProps<Content.AboutMeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

</script>

<template>
  <Bounded
    class="overflow-x-hidden"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div :data-aos="slice.variation === 'reverse' ? 'fade-left' : 'fade-right'">
      <div
        class=" w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start gap-8"
        :class="{
          'place-items-center': slice.variation === 'reverse',
        }"
      >
        <div
          :class="{
            'md:order-2': slice.variation === 'reverse',
          }"
        >
          <PrismicImage
            class="w-full h-auto rounded-xl shadow-lg"
            :field="slice.primary.image"
          />
        </div>
        <div>
          <PrismicRichText
            :field="slice.primary.name"
            class="font-bold text-center md:text-left text-3xl md:text-4xl leading-10 tracking-wider uppercase"
          />
          <div
            v-if="slice.variation === 'default'"
            class="border-b border-black mb-3 pt-1"
          ></div>
          <div>
            <PrismicRichText
              :field="slice.primary.education_or_experience"
              class="text-2xl lg:text-3xl text-center md:text-left font-semibold pb-3"
              :class="{
                uppercase: slice.variation === 'reverse',
                'font-bold': slice.variation === 'reverse',
              }"
            />
            <div
              v-if="slice.variation === 'reverse'"
              class="border-b border-black mb-3"
            ></div>
            <PrismicRichText :field="slice.primary.items" />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
