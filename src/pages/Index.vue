<template>
    <div class="relative">
        <h1>this is the home page</h1>
    </div>
</template>

<script>
import LineDrawing from "~/components/LineDrawing.vue";
export default {
    components: { LineDrawing },
    metaInfo: {
        title: "Home",
    },
};
</script>

<style>
#text {
    top: 50%;
}
</style>
