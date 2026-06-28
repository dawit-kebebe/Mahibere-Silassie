<script setup lang="ts">
import ETFlag from '@/assets/ETFlag.vue';
import USFlag from '@/assets/USFlag.vue';
import { loadLocaleMessages } from '@/i18n';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const toggleLang = async (language: string) => {
  await loadLocaleMessages(language)
  locale.value = language   
  document.documentElement.lang = language
  localStorage.setItem('locale', language)
}

</script>

<template>

    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
        class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
        type="button">
        <ETFlag class="w-6 h-6" v-if="locale === 'am-ET'" />
        <USFlag class="w-6 h-6" v-else-if="locale === 'en-US'" />
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDots"
        class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
        <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
            <li>
                <span @click="toggleLang('en-US')"
                    class="inline-flex items-center cursor-pointer w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    <USFlag class="w-4 h-4 me-1.5" /> English (US)
                </span>
            </li>
            <li>
                <span @click="toggleLang('am-ET')"
                    class="inline-flex items-center cursor-pointer w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    <ETFlag class="w-4 h-4 me-1.5" /> አማርኛ (ET)
                </span>
            </li>
        </ul>
    </div>
</template>