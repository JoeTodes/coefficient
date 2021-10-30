<template>
    <div>
        <transition name="fade-underline">
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
        </transition>
    </div>
</template>

<script>
export default {
    props: { navs: {} },
};
</script>

<style>
.fade-underline {
    text-decoration: underline solid transparent;
    transition: text-decoration 0.75s ease;
}
.active {
    text-decoration: underline solid black;
}
</style>