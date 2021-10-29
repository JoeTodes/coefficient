<template>
    <div class="bg-black text-white h-12">
        <div class="flex h-full items-end container mx-auto">
            <g-link to="/">Title</g-link>
            <div class="flex-1"></div>
            <nav>
                <DesktopNav :navs="navs" class="hidden sm:block" />
                <MobileNav :navs="navs" class="sm:hidden mr-3" />
            </nav>
        </div>
    </div>
</template>




<script>
import DesktopNav from "~/components/DesktopNav.vue";
import MobileNav from "~/components/MobileNav.vue";
export default {
    name: "Header",
    components: { DesktopNav, MobileNav },
    data: function () {
        return {
            navs: {
                Home: "/",
                About: "/about",
                Portfolio: "/portfolio",
                Contact: "/contact",
            },
        };
    },
};
</script>