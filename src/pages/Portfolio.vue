<template>
    <div>
        <div class="font-display text-5xl text-center">UNDER CONSTRUCTION</div>
        <div class="flex flex-col">
            <PortfolioItem
                v-for="entry in $page.entries.edges"
                :key="entry.node.id"
                :entry="entry.node"
            ></PortfolioItem>
        </div>
    </div>
</template>


<page-query>
query{
    entries: allPortfolios{
        edges{
            node{
                id
                title
                link
                thumbnail (width:176, quality:100)
                description
            }
        }
    }
}
</page-query>

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
