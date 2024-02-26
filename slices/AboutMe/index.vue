<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AOS from "aos";
import { onMounted } from "vue";

const isLoading = ref(true);

const { client: about } = usePrismic();

about.getByUID("page", "about").then((document) => {
  isLoading.value = false;
});

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
    v-if="!isLoading"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div :data-aos="slice.variation === 'reverse' ? 'fade-left' : 'fade-right'">
      <div
        class="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 place-items-start gap-8"
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
            class="font-bold text-center md:text-left text-4xl leading-10 tracking-wider uppercase"
          />
          <div
            v-if="slice.variation === 'default'"
            class="border-b-2 border-black mb-3 pt-1"
          ></div>
          <div>
            <PrismicRichText
              :field="slice.primary.education_or_experience"
              class="text-xl lg:text-2xl text-center md:text-left font-medium pb-3"
              :class="{
                uppercase: slice.variation === 'reverse',
                'font-bold': slice.variation === 'reverse',
              }"
            />
            <div
              v-if="slice.variation === 'reverse'"
              class="border-b-2 border-black mb-3"
            ></div>
            <PrismicRichText :field="slice.primary.items" />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
  <div role="status" v-else class="flex items-center justify-center py-56">
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#05182D]"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
</template>
