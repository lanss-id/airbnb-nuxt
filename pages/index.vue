<template>
    <div>
        <Navbar />
        <Category />
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <Card :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: objectData } = await useAsyncData('products', () => $fetch('https://dummyjson.com/products'))
await objectData.value
const products = objectData.value.products
</script>

<style scoped></style>
