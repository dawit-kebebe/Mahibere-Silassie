<script setup lang="ts">
import { navRoutes } from '@/router/index.ts';
import { useUserStore } from '@/store/user.store';
import { RouterView, useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import { computed } from 'vue';

const userStore = useUserStore()

const route = useRoute();
const navbarRoutes = navRoutes(userStore);

const navbarItems = computed(() => {
  return navbarRoutes.filter(i => typeof i.name === 'string').map(rt => ({
	...rt,
    current: route.path === rt.path	
  }))
});

</script>
<template>
	<Header 
		:on-logout="() => {
			console.log('Logged out here!')
		}"
		:navbar-items="navbarItems"
	/>
	<section class="max-w-7xl mx-auto px-2 py-2">
		<router-view />
	</section>
</template>