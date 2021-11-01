<template>
    <div>
        <transition name="fade-underline">
            <div class="flex flex-row">
                <g-link
                    class="
                        mx-3
                        fade-underline
                        font-display font-semibold
                        align-bottom
                        text-xl
                    "
                    v-for="(page, i) in Object.keys(navs)"
                    :key="i"
                    :to="navs[page]"
                    >{{ page }}</g-link
                >
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: { navs: {} },
};
</script>

<style scoped>
.fade-underline {
    text-decoration: underline solid transparent;
    transition: text-decoration 0.75s ease;
}
.active--exact {
    text-decoration: underline solid black;
}
</style>