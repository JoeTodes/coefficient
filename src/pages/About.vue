<template>
    <div>
        <!-- <div class="prose" v-html="$page.content.content"></div> -->
        <div class="font-display text-3xl sm:text-5xl text-center">
            UNDER CONSTRUCTION
        </div>
    </div>
</template>

<page-query>
query{ 
	content(path: "/about/"){
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
