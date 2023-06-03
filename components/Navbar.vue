<script lang="ts" setup></script>

<template>
    <div>
        <nav>
            <div class="py-4 md:border md:border-b-1 w-full">
                <div class="md:flex md:items-center md:justify-between md:mx-8">
                    <div class="md:flex md:items-center md:justify-between md:w-1/2">
                        <div class="hidden md:block"><Icon name="logos:airbnb-icon" size="2.5rem" /></div>
                        <form action="" class="">
                            <label class="relative block md:w-full mx-5">
                                <span class="sr-only">Search</span>
                                <span class="absolute inset-y-0 left-0 flex items-center w-full justify-between px-4">
                                    <div class="md:invisible">
                                        <Icon name="uil:search" class="w-4 h-4"></Icon>
                                    </div>
                                    <div class="border p-2 rounded-full">
                                        <div class="md:hidden">
                                            <Icon name="heroicons:adjustments-horizontal-solid" class="w-6 h-6"></Icon>
                                        </div>
                                        <div class="hidden md:block items-end">
                                            <Icon name="heroicons-solid:search" class="w-6 h-6"></Icon>
                                        </div>
                                    </div>
                                </span>
                                <input class="placeholder:text-slate-400 block bg-white w-full border rounded-full py-4 md:px-20 md:py-5 pl-9 pr-3 shadow-lg focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                            </label>
                        </form>
                    </div>
                    <div class="hidden md:block md:flex md:items-center">
                        <NuxtLink to="/" class="p-2">Kembali ke beranda</NuxtLink>
                        <div class="p-2 mr-4 ml-2">
                            <Icon name="icon-park-outline:earth" class="w-5 h-5"></Icon>
                        </div>
                        <div class="p-2 rounded-full border space-x-2">
                            <Icon name="ion:menu-outline" class="w-6 h-8"></Icon>
                            <Icon name="carbon:user-avatar-filled" class="w-7 h-7"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped></style>
