<template>
    <div class="mx-16 sm:mx-4 my-4">
        <a
            class="
                shadow-lg
                bg-gray-200
                flex flex-col
                h-full
                justify-center
                items-center
                px-4
                pb-2
                rounded-md
            "
            :href="entry.link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="mb-2">{{ entry.title }}</div>
            <img
                class="object-cover h-36 w-36"
                :src="entry.thumbnail"
                onerror="this.src='/uploads/placeholder-square.jpg'"
            />
            <div class="flex-grow"></div>
            <div class="mt-2">{{ entry.description }}</div>
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
