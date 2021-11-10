<template>
  <div class="flex flex-col h-full">
    <ProblemsSVG class="mx-auto"></ProblemsSVG>
  </div>
</template>

<script>
import ProblemsSVG from "../components/ProblemsSVG.vue";
export default {
  components: { ProblemsSVG },
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.isMounted = true;
    });
  },
};
</script>

<style></style>
