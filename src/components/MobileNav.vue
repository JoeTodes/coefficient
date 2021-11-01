<template>
    <div class="flex justify-end">
        <transition name="slide-left" appear>
            <font-awesome
                :icon="['fas', 'bars']"
                @click="isNavToggled = true"
                size="2x"
            ></font-awesome>
        </transition>
        <transition name="fade" appear>
            <div
                class="
                    h-full
                    top-0
                    left-0
                    w-full
                    bg-opacity-50 bg-gray-500
                    fixed
                    z-20
                "
                v-if="isNavToggled"
                @click="isNavToggled = false"
            ></div>
        </transition>

        <aside
            class="
                h-full
                w-1/2
                fixed
                z-50
                transform
                top-0
                right-0
                bg-gray-200
                transition-transform
                duration-1000
                ease-in-out
            "
            :class="isNavToggled ? 'translate-x-0' : 'translate-x-full'"
        >
            <nav class="text-xl font-medium flex flex-col pt-20 items-center">
                <div
                    class="py-3"
                    v-for="(page, i) in Object.keys(navs)"
                    :key="i"
                    @click="isNavToggled = false"
                >
                    <g-link
                        :to="navs[page]"
                        class="
                            text-black
                            no-underline
                            text-center
                            hover:bg-white
                            mx-auto
                        "
                        >{{ page }}</g-link
                    >
                </div>
            </nav>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isNavToggled: false,
        };
    },
    props: { navs: {} },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.slide-left-enter-active {
    transition: all 1.5s ease 3s;
}
.slide-left-enter {
    opacity: 0;
    transform: translateX(20px);
}
.active--exact {
    text-decoration: underline solid black;
}
</style>