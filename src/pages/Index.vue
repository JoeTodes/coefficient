<template>
    <div>
        <p>Home page text</p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            fuga accusamus beatae? Dolore vero perspiciatis cum fugiat
            temporibus sint veniam numquam, aperiam harum, architecto magnam
            ipsum cupiditate, totam commodi? Aspernatur labore porro ipsum.
            Labore provident incidunt unde reprehenderit. Possimus error
            excepturi debitis distinctio adipisci laudantium consectetur qui?
        </p>
    </div>
</template>

<script>
import LineDrawing from "~/components/LineDrawing.vue";
import Logo from "../components/Logo.vue";
export default {
    components: { LineDrawing, Logo },
    metaInfo: {
        title: "Home",
    },
};
</script>

<style>
#text {
    top: 50%;
}
</style>
