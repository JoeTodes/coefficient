<template>
    <div>
        <svg viewBox="0 0 116 470">
            <path
                class="path"
                fill="white"
                stroke="black"
                stroke-width="8"
                d="M31.16,2.72C15.26,19.86,2.88,45.64,4.08,69.52a12.61,12.61,0,0,0,1.49,6c2,3.25,6.13,4.41,9.9,5a89.88,89.88,0,0,0,27.2.48c10.74-1.45,21.25-11,14.74-22.32C54.28,53.26,48.27,50,42.18,48.4,33.28,46.07,23,47,16.09,53.09,8.16,60,4.58,75.56,7.5,85.64c3.73,12.91,33.92,5.45,44,5,5.63-.29,11.91-1.43,17.5-.89,7,.67,10.31,10,12.42,15.54,6.4,16.66,21.28,39.66,15.6,58.05-2.62,8.49-9.8,15-17.86,18.76s-17,5.1-25.85,6.16c-10.43,1.24-13.26-11-15.13-19.3a33.09,33.09,0,0,1-.66-13.28,18,18,0,0,1,6.6-11.28c23.59-17.41,54.15,29.57,63.93,45a20.62,20.62,0,0,1,3.29,7.22c1.6,9.08-8,15.8-16.19,20l-28,14.25c-5,2.54-10.28,5.37-12.9,10.32-2.54,4.8-2,10.58-1.46,16a1421.75,1421.75,0,0,1,5.88,212.54"
                pathLength="1"
                :style="lineDrawStyle"
            />
        </svg>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            lineStart: 0.25,
            lineDrawStyle: {
                "stroke-dasharray": 1,
                "stroke-dashoffset": 1 - this.lineStart,
            },
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            let scrollpercent =
                (document.body.scrollTop + document.documentElement.scrollTop) /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight);
            scrollpercent *= 1 - this.lineStart;
            this.lineDrawStyle["stroke-dashoffset"] =
                1 - this.lineStart - scrollpercent;
        },
    },
};
</script>

<style>
</style>
