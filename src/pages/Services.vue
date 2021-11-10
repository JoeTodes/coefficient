<template>
  <div
    class="flex flex-col relative items-center xl:items-start xl:flex-row justify-between"
  >
    <div class="prose text-justify" v-html="$page.services.content"></div>
    <div
      class="bg-black h-px xl:absolute xl:left-1/2 xl:h-5/6 w-full xl:w-px mb-12 xl:mb-0"
    ></div>
    <div class="prose text-justify" v-html="$page.faq.content"></div>
  </div>
</template>

<page-query>
query{
    faq: content(path:"/faq/"){
        content
    }
    services: content(path:"/services/"){
        content
    }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Services",
  },
};
</script>
