<template>
  <Bounded
    as="footer"
    class="bg-[#05182D] p-10">
    <div class="grid grid-cols-1 gap-7 sm:grid-cols-3 place-items-center">
      <PrismicRichText
        :field="footer?.data.title"
        class="text-white uppercase text-2xl text-center sm:text-left"
      />
      <div>
        <ul class="flex gap-4">
          <li v-for="(item, index) in footer?.data.images" :key="index ?? ''">
            <PrismicLink :field="item.link" class="font-medium">
              <PrismicImage :field="item.image" class="w-7" />
            </PrismicLink>
          </li>
        </ul>
      </div>
      <div class="text-white text-xs text-center sm:text-left flex flex-col gap-2">
        <p>{{ footer?.data.address }}</p>
        <p>{{ footer?.data.phone }}</p>
        <p>{{ footer?.data.email }}</p>
      </div>
    </div>
  </Bounded>
</template>

<script setup lang="ts">
const footer = useFooter();
</script>


