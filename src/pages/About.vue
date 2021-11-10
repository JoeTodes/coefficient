<template>
  <div v-if="isMounted">
    <div class="font-display text-3xl sm:text-5xl text-center">
      UNDER CONSTRUCTION
    </div>
    <div class="prose" v-html="$page.about.content"></div>
  </div>
</template>

<page-query>
query{ 
    about: content(path:"/about/"){
        content
    }
   
}
</page-query>

<script>
export default {
  data() {
    return {
      isMounted: false,
    };
  },
  metaInfo: {
    title: "About",
  },
  mounted() {
    this.$nextTick(function() {
      this.isMounted = true;
    });
  },
};
</script>
