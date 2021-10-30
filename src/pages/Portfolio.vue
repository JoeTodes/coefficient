<template>
    <div>
        <div
            class="
                grid grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
            "
        >
            Portfolio goes here
            <!--
            <PortfolioItem
                v-for="entry in $page.entries.edges"
                :key="entry.node.id"
                :entry="entry.node"
            ></PortfolioItem>
            -->
        </div>
    </div>
</template>

<!--
<page-query>
query{
    entries: allPortfolios{
        edges{
            node{
                id
                title
                link
                thumbnail
                description
            }
        }
    }
}
</page-query>
-->
<script>
import PortfolioItem from "~/components/PortfolioItem.vue";
export default {
    metaInfo: {
        title: "Portfolio",
    },
    components: {
        PortfolioItem,
    },
};
</script>
