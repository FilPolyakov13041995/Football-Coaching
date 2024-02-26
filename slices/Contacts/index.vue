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
  getSliceComponentProps<Content.ContactsSlice>([
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
    <div data-aos="fade-left">
      <PrismicRichText
        :field="slice.primary.title"
        class="text-center text-4xl md:text-5xl font-semibold pb-2"
      />
      <div class="border-b border-black w-1/4 mx-auto mb-10"></div>
      <div class="text-center sm:text-left pb-5">
        <PrismicText
          :field="slice.primary.address"
          class="text-2xl font-semibold"
        />
        <PrismicRichText :field="slice.primary.address_item" class="text-lg" />
      </div>
      <div class="text-center sm:text-left pb-5">
        <PrismicText
          :field="slice.primary.phone"
          class="text-2xl font-semibold"
        />
        <PrismicText :field="slice.primary.phone_item" class="text-lg max-w-48 mx-auto sm:mx-0" />
      </div>
      <div class="text-center sm:text-left pb-5">
        <PrismicText
          :field="slice.primary.email"
          class="text-2xl font-semibold"
        />
        <PrismicText :field="slice.primary.email_item" class="text-lg" />
      </div>
      <div
        class="text-center sm:text-left text-2xl font-semibold hover:underline"
      >
        <PrismicLink :field="slice.primary.link_school">{{
          slice.primary.link_text
        }}</PrismicLink>
      </div>
    </div>
  </Bounded>
</template>
