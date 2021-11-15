<template>
    <div v-if="isMounted" class="">
        <div class="prose text-justify" v-html="$page.services.content"></div>
    </div>
</template>

<page-query>
query{
    faq: content(path:"/faq/"){
        content
    }
    services: content(path:"/services/"){
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
        title: "Services",
        meta: [
            {
                name: "description",
                key: "description",
                content:
                    "Pricing is as custom as our solutions, but most projects fall into one of three main categories",
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
