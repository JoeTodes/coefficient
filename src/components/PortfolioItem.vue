<template>
    <div class="mx-16 sm:mx-4 my-4">
        <a
            class="
                shadow-lg
                bg-gray-100
                flex flex-row
                h-36
                justify-center
                items-center
                p-2
            "
            :href="entry.link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <g-image
                class="h-full w-44 object-contain flex-none"
                :src="entry.thumbnail"
                onerror="this.src='/uploads/placeholder-square.jpg'"
            />
            <div class="flex flex-col h-full px-2 font-sans justify-between">
                <div class="font-bold text-lg underline">
                    {{ entry.title }}
                </div>
                <div class="overflow-hidden">{{ entry.description }}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        entry: {},
    },
};
</script>
