<script setup lang="ts">
import Logo from '@/assets/Logo.vue';
import DarkModeToggle from './DarkModeToggle.vue';
import LanguageToggle from './LanguageToggle.vue';
import type { RouteRecordRaw } from 'vue-router';

defineProps<{
    onLogout: () => void;
    navbarItems: (RouteRecordRaw & {current?: boolean})[];
}>();
</script>

<template>
        <nav class="bg-neutral-primary sticky w-full z-20 top-0 inset-s-0 border-b border-default">
            <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span class="flex items-center space-x-3 rtl:space-x-reverse">
                    <Logo class="w-8 h-8 text-brand" />
                    <!-- <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">ማህበረ ስላሴ</span> -->
                </span>
                
                <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <DarkModeToggle />
                    <LanguageToggle />
                    <button data-collapse-toggle="navbar-language" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                        aria-controls="navbar-language" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                    <ul
                        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <template v-for="item in navbarItems" :key="item.name">
                        <li>
                            <router-link :to="item.path" :aria-current="item.current ? 'page' : undefined"
                                :class="item.current ? 'text-white bg-brand md:bg-transparent md:text-fg-brand dark:text-white dark:bg-brand dark:md:bg-transparent dark:md:text-primary-300' : 'text-heading dark:text-gray-300'"
                                class="block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent md:dark:hover:text-primary-300">{{
                                    item.name }}</router-link>
                        </li>
                    </template>
                    </ul>
                </div>
            </div>
        </nav>
    
</template>
