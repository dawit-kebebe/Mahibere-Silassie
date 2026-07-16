<script setup lang="ts">
import { initTabs } from 'flowbite';
import { onMounted, ref } from 'vue';

onMounted(() => {
	initTabs()
})

const tabs = ref<"open" | "closed" | "all">("all");

</script>
<template>
	<section class="w-full mt-8">
		<h5 class="text-xl font-semibold text-heading text-center mb-6">Pilgrim</h5>

		<div class="sm:hidden">
			<label for="tabs-icons" class="sr-only">Select Pilgrim Status</label>
			<select id="tabs-icons" v-model="tabs"
				class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
				<option value="all">All</option>
				<option value="open">Open</option>
				<option value="closed">Closed</option>
			</select>
		</div>
		<ul class="hidden text-sm font-medium text-center text-body sm:flex -space-x-px">
			<li class="w-full focus-within:z-10">
				<a href="#" @click="tabs = 'all'"
					class="inline-flex items-center justify-center w-full text-body bg-neutral-primary-soft border border-default rounded-s-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
					aria-current="page">
					All
				</a>
			</li>
			<li class="w-full focus-within:z-10">
				<a href="#" @click="tabs = 'open'"
					class="inline-block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
					Open
				</a>
			</li>
			<li class="w-full focus-within:z-10">
				<a href="#" @click="tabs = 'closed'"
					class="inline-flex items-center justify-center  w-full text-body bg-neutral-primary-soft border border-default rounded-e-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
					Closed
				</a>
			</li>

		</ul>


		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
			<div class="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
				<img class="rounded-t-base" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />

				<div class="p-6 flex flex-col items-baseline">
					<span
						class="bg-success-soft text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded self-end">Open</span>
					<h5 class="mb-2 text-2xl line-clamp-2 font-semibold tracking-tight text-heading">Journey to Waldiba for Summer!</h5>

					<p class="mb-6 text-body text-justify">In today’s fast-paced digital landscape, fostering seamless
						collaboration
						among Developers and IT Operations.</p>
					<a href="#"
						class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
						Read more
						<svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M19 12H5m14 0-4 4m4-4-4-4" />
						</svg>
					</a>
				</div>
			</div>
		</div>

	</section>



</template>
