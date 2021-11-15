<template>
    <div v-if="isMounted">
        <NetlifyForm />
    </div>
</template>

<script>
import NetlifyForm from "~/components/NetlifyForm.vue";
export default {
    data() {
        return {
            isMounted: false,
        };
    },
    components: { NetlifyForm },
    metaInfo: {
        title: "Contact",
        meta: [
            {
                name: "description",
                key: "description",
                content:
                    "Get in touch today, we're excited to find out how we can help you",
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
