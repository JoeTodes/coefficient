<template>
    <div v-if="isMounted">
        <div class="prose" v-html="$page.faq.content"></div>
    </div>
</template>

<page-query>
query{ 
    faq: content(path:"/faq/"){
        content
    }
   
}
</page-query>

<script>
export default {
    data() {
        return {
            isMounted: false,
        };
    },
    metaInfo: {
        title: "About",
        meta: [
            {
                name: "description",
                key: "description",
                content:
                    "Information about our web development services and frequently asked questions",
            },
        ],
    },
    mounted() {
        this.$nextTick(function () {
            this.isMounted = true;
        });
    },
};
</script>
