<template>
    <div class="w-full bg-black text-white">
        <div class="container mx-auto text-center font-display pt-4 copyright">
            © coEfficient Solutions {{ new Date().getFullYear() }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>
<style>
.copyright {
    font-variant: small-caps;
}
</style>