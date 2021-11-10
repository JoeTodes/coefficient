<template>
  <div v-if="isMounted">
    <NetlifyForm />
    <div class="font-display text-3xl sm:text-5xl text-center">
      UNDER CONSTRUCTION
    </div>
  </div>
</template>

<script>
import NetlifyForm from "~/components/NetlifyForm.vue";
export default {
  data() {
    return {
      isMounted: false,
    };
  },
  components: { NetlifyForm },
  metaInfo: {
    title: "Contact",
  },
  mounted() {
    this.$nextTick(function() {
      this.isMounted = true;
    });
  },
};
</script>
