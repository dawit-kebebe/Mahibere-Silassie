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
		<h5 class="text-xl font-semibold text-heading text-center mb-6">Gospel</h5>

		<div class="sm:hidden">
			<label for="tabs-icons" class="sr-only">Select Gospel Status</label>
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
			<div class="bg-neutral-primary-soft block max-w-md p-6 border border-default rounded-base shadow-xs">
				<div class="flex justify-between items-center mb-3">
					<svg class="w-7 h-7 text-body" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
						<g>
							<path fill="currentColor" d="M47.436,302.806c26.222,0,47.417-21.236,47.417-47.436c0-26.192-21.195-47.437-47.417-47.437
		C21.236,207.932,0,229.178,0,255.37C0,281.57,21.236,302.806,47.436,302.806z" />
							<path fill="currentColor" d="M47.386,318.985c-25.506,0-46.324,20.679-46.324,46.314v57.588h54.876l35.408-72.328
		C85.278,332.106,67.946,318.985,47.386,318.985z" />
							<path fill="currentColor" d="M125.037,212.114c23.48,0,42.481-19.01,42.481-42.5c0-23.45-19.001-42.49-42.481-42.49
		c-23.47,0-42.49,19.04-42.49,42.49C82.547,193.104,101.568,212.114,125.037,212.114z" />
							<path fill="currentColor"
								d="M83.431,310.563v9.158h23.023l42.113-85.825c-6.684-4.708-14.739-7.3-23.53-7.3
		c-5.94,0-11.64,1.231-16.715,3.466c3.218,7.806,5.075,16.338,5.075,25.267C113.397,278.492,101.508,298.793,83.431,310.563z" />
							<path fill="currentColor" d="M250.989,129.825c23.48,0,42.49-19.01,42.49-42.5c0-23.45-19.01-42.49-42.49-42.49
		c-23.47,0-42.49,19.04-42.49,42.49C208.499,110.815,227.519,129.825,250.989,129.825z" />
							<path fill="currentColor" d="M250.989,144.276c-22.944,0-41.577,18.614-41.577,41.587v18.026h83.153v-18.026
		C292.566,162.89,273.962,144.276,250.989,144.276z" />
							<polygon fill="currentColor"
								points="176.149,219.871 66.437,443.745 66.437,467.166 445.563,467.166 445.563,443.745 335.851,219.871 	" />
							<path fill="currentColor" d="M464.563,302.806c26.202,0,47.437-21.236,47.437-47.436c0-26.192-21.235-47.437-47.437-47.437
		c-26.221,0-47.417,21.246-47.417,47.437C417.146,281.57,438.342,302.806,464.563,302.806z" />
							<path fill="currentColor" d="M464.613,318.985c-20.56,0-37.892,13.121-43.961,31.575l35.409,72.328h54.876v-57.588
		C510.937,339.664,490.119,318.985,464.613,318.985z" />
							<path fill="currentColor" d="M386.962,212.114c23.471,0,42.491-19.01,42.491-42.5c0-23.45-19.02-42.49-42.491-42.49
		c-23.48,0-42.48,19.04-42.48,42.49C344.482,193.104,363.482,212.114,386.962,212.114z" />
							<path fill="currentColor"
								d="M386.962,226.596c-8.789,0-16.844,2.592-23.529,7.3l42.113,85.825h23.024v-9.158
		c-18.078-11.77-29.966-32.071-29.966-55.234c0-8.929,1.857-17.461,5.075-25.267C398.603,227.826,392.902,226.596,386.962,226.596z" />
						</g>
					</svg>

					<span
						class="bg-success-soft text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded">Open</span>
				</div>

				<a href="#">
					<h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">Need a help in Claim?</h5>
				</a>
				<p class="mb-3 text-body">Go to this step by step guideline process on how to certify for your weekly
					benefits:</p>
				<a href="#" class="inline-flex font-medium items-center text-fg-brand hover:underline">
					See our guideline
					<svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
					</svg>
				</a>
			</div>
			
		</div>


	</section>



</template>
