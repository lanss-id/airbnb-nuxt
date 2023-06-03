<template>
    <nav class="flex justify-between items-center space-x-6 mx-10 mt-4 nav">
        <div class="flex space-x-4 truncate">
            <NuxtLink v-for="category in categories" :to="`/category/${category}`" class="grid place-items-center snap-x scroll-smooth">
                <Icon name="carbon:hotel" size="1.5rem" />
                <p class="snap-center">{{ category }}</p>
            </NuxtLink>
        </div>
        <div class="space-x-2 border flex items-center px-2 py-2 border rounded-lg">
            <Icon name="heroicons-outline:adjustments-horizontal" size="1rem" />
            <span>Filter</span>
        </div>
    </nav>
</template>

<script setup>
let categories = []
const getCategories = async () => {
    try {
        const res = await useFetch('https://dummyjson.com/products/categories')
        return res.data
    } catch (error) {
        console.log(error)
    }
}
categories = await getCategories()
</script>

<style scope></style>
