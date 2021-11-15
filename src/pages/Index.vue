<template>
    <div v-if="isMounted" class="flex flex-col h-full">
        <h1 class="text-center mb-8 font-display text-4xl font-bold">
            What are you wasting time, energy, and money on?
        </h1>
        <h2 class="text-center mb-8 font-display text-2xl">
            Let's fix that for you
        </h2>
        <p class="prose text-lg text-center self-center">
            We think you should be able to dedicate more of your time, energy,
            and money on the parts of your business that you actually enjoy, and
            less on the small annoyances, tedious busy-work, and unnecessary
            fees which all add up to big costs. Let's replace those big costs
            with <strong>big ideas</strong>.
        </p>
        <ProblemsSVG class="mx-auto"></ProblemsSVG>
        <p class="prose text-lg mb-8 text-center self-center">
            At coEfficient Solutions, we specialize in developing web
            applications to solve your unique problems. Using modern web
            technologies, our websites and applications have the
            <strong>lowest possible hosting fees</strong> (often free), can
            <strong>seamlessly scale</strong> along with your business, and will
            work on <strong>any device with a web browser</strong>.
        </p>
        <div class="flex flex-col sm:flex-row justify-evenly mx-auto sm:mx-0">
            <div class="flex flex-col items-center w-36 mb-8">
                <font-awesome
                    :icon="['fas', 'hand-holding-usd']"
                    size="7x"
                    class="mb-2"
                ></font-awesome>
                <div class="font-display text-center font-bold">
                    Low or Zero Monthly Hosting Fees
                </div>
            </div>
            <div class="flex flex-col items-center w-36 mb-8">
                <font-awesome
                    :icon="['fas', 'chart-line']"
                    size="7x"
                    class="mb-2"
                ></font-awesome>
                <div class="font-display text-center font-bold">
                    Seamless Scaling As Your Business Grows
                </div>
            </div>
            <div class="flex flex-col items-center w-36 mb-8">
                <font-awesome
                    :icon="['fas', 'mobile-alt']"
                    size="7x"
                    class="mb-2"
                ></font-awesome>
                <div class="font-display text-center font-bold">
                    Responsive Design By Default
                </div>
            </div>
        </div>
        <p class="prose text-lg mb-8 text-center self-center">
            Whether you need help simplifying or automating your data-driven
            tasks or you just want a well-crafted landing page for you business
            without any monthly fees, we're excited to start working with you.
        </p>
    </div>
</template>

<script>
import ProblemsSVG from "../components/ProblemsSVG.vue";
export default {
    components: { ProblemsSVG },
    metaInfo: {
        title: "Home",
        meta: [
            {
                name: "description",
                key: "description",
                content:
                    "Calgary Web Developer specializing in developing web applications to solve your unique problems.",
            },
        ],
    },
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        this.$nextTick(function () {
            this.isMounted = true;
        });
    },
};
</script>

<style></style>
