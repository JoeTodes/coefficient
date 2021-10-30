<template>
    <div>
        <div class="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>

            <div class="flex-1 container mx-auto">
                <slot />
            </div>
        </div>
        <footer><Footer /></footer>
    </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
    components: { Header, Footer },
};
</script>

