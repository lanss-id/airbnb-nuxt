<template>
    <nav class="flex justify-between items-center space-x-6 mx-10 mt-4">
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

function scrollToNext() {
    const scrollCategory = document.querySelector('.scroll-category')
    scrollCategory.scrollLeft += scrollCategory.offsetWidth / 4
}
function scrollToPrev() {
    const scrollCategory = document.querySelector('.scroll-category')
    scrollCategory.scrollLeft -= scrollCategory.offsetWidth / 4
}

onMounted(() => {
    if (process.client) {
        const navScroll = () => {
            const nav = document.querySelector('.nav-category')
            if (document.documentElement.scrollTop > 175 || document.body.scrollTop > 175) {
                nav.classList.add('border-b')
                nav.classList.add('shadow-sm')
            } else {
                nav.classList.remove('border-b')
                nav.classList.remove('shadow-sm')
            }
            window.addEventListener('scroll', navScroll)
        }
        navScroll()
    }
})
</script>

<style scope>
.scroll-category::-webkit-scrollbar {
    display: none;
}
</style>
