<template>
  <MainLayout>
    <transition
      name="content"
      appear
      appear-active-class="content-appear-enter-active"
    >
      <router-view class="mx-4" />
    </transition>
  </MainLayout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MainLayout from "~/layouts/Default.vue";
export default {
  components: { MainLayout },

  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content-enter-active {
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1s;
}
.content-leave-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
.content-appear-enter-active {
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 3s;
}
.content-enter,
.content-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
