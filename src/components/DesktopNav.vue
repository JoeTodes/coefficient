<template>
    <div>
        <g-link
            class="mx-3"
            v-for="(page, i) in Object.keys(navs)"
            :key="i"
            :to="navs[page]"
            >{{ page }}</g-link
        >
    </div>
</template>

<script>
export default {
    props: { navs: {} },
};
</script>
