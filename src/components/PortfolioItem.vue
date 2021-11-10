<template>
  <div class="mx-8 sm:mx-4 my-4">
    <a
      class="
                shadow-lg
                bg-gray-100
                flex flex-col
                sm:flex-row sm:h-36
                justify-start
                items-center
                p-2
                text-center
                sm:text-left
            "
      :href="entry.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <g-image
        class="
                    w-full
                    sm:h-full sm:w-40
                    shadow-md
                    object-contain
                    flex-none
                    mb-4
                    sm:mb-0
                "
        :src="entry.thumbnail"
        onerror="this.src='/uploads/placeholder-square.jpg'"
      />
      <div class="flex flex-col h-full px-2 font-sans justify-between">
        <div class="font-bold text-lg underline">
          {{ entry.title }}
        </div>
        <div class="overflow-hidden">{{ entry.description }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    entry: {},
  },
};
</script>
