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
  getSliceComponentProps<Content.ServicesSlice>([
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
    <div>
      <div data-aos="fade-right">
        <PrismicRichText
          :field="slice.primary.rich_text"
          class="text-center text-3xl md:text-5xl font-semibold pb-2"
        />
        <div class="border-b border-black w-1/4 mx-auto mb-4"></div>
        <PrismicText
          :field="slice.primary.small_text"
          class="w-full md:w-2/3 pb-5 mx-auto text-lg text-center"
        />
      </div>
      
      <div>
        <div 
          data-aos="fade-left"
          v-for="(item, index) in slice.items"
          :key="index ?? ''"
          class="w-full md:w-4/5 md:rounded-full p-3 mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center gap-4 mb-5 md:mb-16 bg-white rounded-xl md:bg-gradient-to-l to-gray-200 from-[#f1f1f1]"
        >
          <PrismicImage
            class="w-2/3 h-auto rounded-full shadow-lg mx-auto md:mx-0"
            :field="item.images"
          />
          <div>
            <PrismicText
              :field="item.title"
              class="font-bold text-center md:text-left pb-2 text-lg lg:text-2xl tracking-wider uppercase"
            />
            <PrismicText
              :field="item.description"
              class="text-sm lg:text-xl text-center md:text-left font-medium pb-3"
            />
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
    </div>
  </Bounded>
</template>
