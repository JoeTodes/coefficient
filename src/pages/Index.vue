<template>
    <div v-if="isMounted" class="font-display text-3xl sm:text-5xl text-center">
        UNDER CONSTRUCTION
    </div>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
    components: { Logo },
    metaInfo: {
        title: "Home",
    },
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        this.$nextTick(function () {
            this.isMounted = true;
        });
    },
};
</script>

<style>
</style>
