<script setup lang="ts">
import { initDropdowns } from 'flowbite';
import { onMounted } from 'vue';
import DropDown from '@/components/DropDown.vue';

onMounted(() => {
    initDropdowns()
})

</script>
<template>
    <section class="w-full mt-8">
        <h5 class="text-xl font-semibold text-heading text-center mb-6">Members</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-2 md:gap-4">
            <div class="w-full p-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-12 h-12 md:w-16 md:h-16 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 flex flex-col min-w-0 md:px-8 md:text-xl">
                        <p class="font-medium text-heading truncate">
                            Neil Sims
                        </p>
                        <p class="text-sm text-body truncate">
                            neil@windster.com
                        </p>
                        <p class="text-sm text-body truncate">
                            Finance Officer
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <DropDown>
                            <template #trigger>
                                <button
                                    class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
                                    type="button">
                                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="3"
                                            d="M12 6h.01M12 12h.01M12 18h.01" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>
                                <div
                                    class="bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                                    <ul class="p-2 text-sm text-body w-content font-medium"
                                        aria-labelledby="dropdownMenuIconButton">
                                        <li>
                                            <span
                                                class="inline-flex items-center cursor-pointer w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                                Option 1
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                class="inline-flex items-center cursor-pointer w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                                                Option 2
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </DropDown>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>
