<script setup>
const { data: data } = await useFetch('https://dummyjson.com/products/categories')
</script>
<template>
    <div class="py-2 flex items-center justify-center max-w-full gap-4">
        <div class="w-full md:w-5/6 px-6 md:px-4 flex gap-2 items-center">
            <div class="max-w-full overflow-hidden relative">
                <ul class="flex gap-2 gap-x-8 flex-nowrap font-[500] text-black/[0.6] text-[13px] overflow-x-auto text-center whitespace-nowrap">
                    <NuxtLink :to="'/product/category/' + items" v-for="items in data" :key="items.id">
                        <li class="py-1 relative group" :class="{ active: isActive === 1 }">
                            <Icon name="carbon:hotel" size="2rem"></Icon>
                            <p class="py-2">{{ items }}</p>
                            <div class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
                        </li>
                    </NuxtLink>
                </ul>
            </div>
        </div>
        <div class="hidden md:block">
            <div class="px-4 py-4 rounded-full border flex items-center gap-2">
                <Icon name="heroicons-outline:adjustments-horizontal" size="1.8rem"></Icon>
                <span>Filter</span>
            </div>
        </div>
    </div>
</template>
