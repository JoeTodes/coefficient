<template>
    <div>
        <div class="font-display text-3xl sm:text-5xl text-center">
            UNDER CONSTRUCTION
        </div>
        <div class="prose" v-html="$page.about.content"></div>
        <div class="prose" v-html="$page.faq.content"></div>
    </div>
</template>

<page-query>
query{ 
    about: content(path:"/about/"){
        content
    }
    faq: content(path:"/faq/"){
        content
    }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: "About",
    },
};
</script>
