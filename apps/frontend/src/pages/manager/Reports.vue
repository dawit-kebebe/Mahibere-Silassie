<script setup lang="ts">
import { initTabs } from 'flowbite';
import { onMounted, ref } from 'vue';

onMounted(() => {
	initTabs()
})

const tabs = ref<"expense" | "income" | "analysis">("expense");
</script>
<template>
	<section class="w-full mt-8">
		<h5 class="text-xl font-semibold text-heading text-center mb-6">Meetings</h5>

		<div class="sm:hidden">
			<select id="tabs-icons" v-model="tabs"
				class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
				<option value="expense">Expense</option>
				<option value="income">Income</option>
				<option value="analysis">Analysis</option>
			</select>
		</div>
		<ul class="hidden text-sm font-medium text-center text-body sm:flex -space-x-px">
			<li class="w-full focus-within:z-10">
				<a href="#" @click="tabs = 'expense'"
					class="inline-flex items-center justify-center w-full text-body bg-neutral-primary-soft border border-default rounded-s-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
					aria-current="page">
					Expense
				</a>
			</li>
			<li class="w-full focus-within:z-10">
				<a href="#"  @click="tabs = 'income'"
					class="inline-block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
					Income
				</a>
			</li>
			<li class="w-full focus-within:z-10">
				<a href="#" @click="tabs = 'analysis'"
					class="inline-flex items-center justify-center  w-full text-body bg-neutral-primary-soft border border-default rounded-e-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
					Analysis
				</a>
			</li>

		</ul>

		<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default mt-4">
			<table class="w-full text-sm text-left rtl:text-right text-body">
				<thead class="bg-neutral-secondary-soft border-b border-default">
					<tr>
						<th scope="col" class="px-6 py-3 font-medium">
							Product name
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Color
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Category
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Price
						</th>
						<th scope="col" class="px-6 py-3 font-medium">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
							Apple MacBook Pro 17"
						</th>
						<td class="px-6 py-4">
							Silver
						</td>
						<td class="px-6 py-4">
							Laptop
						</td>
						<td class="px-6 py-4">
							$2999
						</td>
						<td class="px-6 py-4">
							<a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
						</td>
					</tr>
					<tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
							Microsoft Surface Pro
						</th>
						<td class="px-6 py-4">
							White
						</td>
						<td class="px-6 py-4">
							Laptop PC
						</td>
						<td class="px-6 py-4">
							$1999
						</td>
						<td class="px-6 py-4">
							<a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
						</td>
					</tr>
					<tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
							Magic Mouse 2
						</th>
						<td class="px-6 py-4">
							Black
						</td>
						<td class="px-6 py-4">
							Accessories
						</td>
						<td class="px-6 py-4">
							$99
						</td>
						<td class="px-6 py-4">
							<a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
						</td>
					</tr>
					<tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
							Google Pixel Phone
						</th>
						<td class="px-6 py-4">
							Gray
						</td>
						<td class="px-6 py-4">
							Phone
						</td>
						<td class="px-6 py-4">
							$799
						</td>
						<td class="px-6 py-4">
							<a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
						</td>
					</tr>
					<tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
							Apple Watch 5
						</th>
						<td class="px-6 py-4">
							Red
						</td>
						<td class="px-6 py-4">
							Wearables
						</td>
						<td class="px-6 py-4">
							$999
						</td>
						<td class="px-6 py-4">
							<a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>


	</section>
</template>
