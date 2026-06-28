<script setup lang="ts">
import { navRoutes } from '@/router/index.ts';
import { useUserStore } from '@/store/user.store';
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
import Header from '../components/Header.vue';

const { t } = useI18n()
const userStore = useUserStore()

const navbarItems = navRoutes(userStore);
</script>
<template>
	<Header 
		:on-logout="() => {
			console.log('Logged out here!')
		}"
		:navbar-items="navbarItems"
	/>
	<section class="max-w-7xl mx-auto px-4 py-2">
		<h1>Test: {{ t('app_name') }}</h1>
		<router-view />
	</section>
</template>