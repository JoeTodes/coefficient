<template>
	<div v-if="isMounted">
		<div class="font-display text-3xl sm:text-5xl text-center">
			UNDER CONSTRUCTION
		</div>
		<div class="flex flex-col">
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

<page-query>
query{
    entries: allPortfolios{
        edges{
            node{
                id
                title
                link
                thumbnail (width:500, quality:100)
                description
            }
        }
    }
}
</page-query>

<script>
import PortfolioItem from "~/components/PortfolioItem.vue";
export default {
	data() {
		return {
			isMounted: false,
		};
	},
	metaInfo: {
		title: "Skills & Interests",
		meta: [
			{
				name: "description",
				key: "description",
				content:
					"We love to talk tech. Here is a sampling of some of our skills and interests",
			},
		],
	},
	components: {
		PortfolioItem,
	},
	mounted() {
		this.$nextTick(function() {
			this.isMounted = true;
		});
	},
};
</script>
