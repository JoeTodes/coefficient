<template>
    <div class="bg-white text-black h-28 pt-3 mb-16">
        <div
            class="
                flex
                h-full
                items-end
                justify-start
                sm:justify-center
                container
                mx-auto
                pb-2
            "
        >
            <transition name="slide-left" appear>
                <nav>
                    <DesktopNav
                        :navs="leftNavs"
                        class="hidden sm:block -mb-1"
                    />
                </nav>
            </transition>
            <g-link class="h-full flex mx-4" to="/"><Logo></Logo></g-link>
            <transition name="slide-right" appear>
                <nav>
                    <DesktopNav
                        :navs="rightNavs"
                        class="hidden sm:block -mb-1"
                    />
                </nav>
            </transition>

            <MobileNav :navs="navs" class="sm:hidden self-end flex-grow mr-4" />
        </div>
        <transition name="expand" appear>
            <div class="min-w-max container bg-black h-0.5 mx-auto"></div>
        </transition>
    </div>
</template>




<script>
import DesktopNav from "~/components/DesktopNav.vue";
import MobileNav from "~/components/MobileNav.vue";
import Logo from "~/components/Logo.vue";
export default {
    name: "Header",
    components: { DesktopNav, MobileNav, Logo },
    data: function () {
        return {
            navs: {
                Home: "/",

                Portfolio: "/portfolio",
                Contact: "/contact",
            },
            leftNavs: {
                Portfolio: "/portfolio",
            },
            rightNavs: {
                Contact: "/contact",
            },
        };
    },
};
</script>

<style>
.expand-enter-active {
    transition: width 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
}
.expand-enter {
    width: 0;
}
.slide-left-enter-active {
    transition: all 1.5s ease 3s;
}
.slide-left-enter {
    opacity: 0;
    transform: translateX(20px);
}
.slide-right-enter-active {
    transition: all 1.5s ease 3s;
}
.slide-right-enter {
    opacity: 0;
    transform: translateX(-20px);
}
</style>