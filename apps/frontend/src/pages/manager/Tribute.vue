<script setup lang="ts">
import Kenat from 'kenat';
import { computed } from 'vue';


const radialChart = computed(() => ({
	chart: {
		// height: 280,
		type: "radialBar"
	},

	series: [67],

	plotOptions: {
		radialBar: {
			hollow: {
				size: "60%"
			},

			dataLabels: {
				showOn: "always",
				name: {
					show: true,
				},
				value: {
					fontSize: "20px",
					show: true,
					formatter: (day: number) => {
						return `${day}`
					},
				}
			}
		}
	},

	stroke: {
		lineCap: "round",
	},

	fill: {
		colors: "currentColor",
	},

	labels: ["Days Left"],
}));

const thisYear = (new Kenat()).getEthiopian();
const yearCalendar = computed(() => Kenat.getMonthCalendar(thisYear.year, thisYear.month));

</script>
<template>
	<section class="w-full mt-8">
		<h5 class="text-xl font-semibold text-heading text-center mb-6">Tribute</h5>

		<div class="w-full mt-8 grid grid-cols-1 md:grid-cols-2">
			<div class="flex items-center justify-center min-w-0 w-full h-48 sm:h-58 md:h-96">
				<div class="h-full w-full">
					<apexchart class="text-brand" height="100%" width="100%" :type="radialChart.chart.type" :options="radialChart"
						:series="radialChart.series"></apexchart>
					<div class="min-w-0 w-full text-center">
						<h2>Monthly Tribbute</h2>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-7 content-start rounded-base shadow-base overflow-hidden cursor-pointer">
				<div class="w-full h-10  md:h-20 flex justify-center items-center bg-green-700"
					v-for="header in yearCalendar.headers" :key="`header-${header}`">
					<span class="text-gray-100 truncate md:text-overflow-clip md:whitespace-normal">{{ header }}</span>
				</div>
				<div class="w-full aspect-square md:h-20 border border-success-medium flex justify-center items-center"
					:class="day?.isToday ? 'bg-danger-soft' : 'bg-success-soft'" v-for="day in yearCalendar.days"
					:key="`day-${day}`">
					<span v-if="day">{{ day.ethiopian?.day }}</span>
					<span v-else>&nbsp;</span>
				</div>
			</div>
		</div>
	</section>
</template>
