<template>
    <div class="prose" v-html="$page.content.content"></div>
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
