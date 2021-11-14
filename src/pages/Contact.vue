<template>
  <div v-if="isMounted">
    <NetlifyForm />
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
