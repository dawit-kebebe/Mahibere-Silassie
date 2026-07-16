<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
import { initCarousels, initTooltips } from 'flowbite';
import Kenat from 'kenat';

const thisYear = (new Kenat()).getEthiopian().year;

const radialChart = reactive({
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
});

onMounted(() => {
    initCarousels()
    initTooltips()
})

const yearCalendar = computed(() => Kenat.getYearCalendar(thisYear));

</script>

<template>

    <div id="default-carousel" class="relative w-full z-0" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-base md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4"
                data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5"
                data-carousel-slide-to="4"></button>
        </div>
    </div>



    <section class="w-full grid grid-cols-2">
        <div class="flex items-center justify-center text-brand min-w-0 w-full h-48 sm:h-58 md:h-96">
            <apexchart height="100%" width="100%" :type="radialChart.chart.type" :options="radialChart"
                :series="radialChart.series"></apexchart>
        </div>
        <div class="flex items-center justify-center text-brand min-w-0 w-full h-48 sm:h-58 md:h-96">
            <apexchart height="100%" width="100%" :type="radialChart.chart.type" :options="radialChart"
                :series="radialChart.series"></apexchart>
        </div>
        <div class="min-w-0 w-full text-center">
            <h2>Monthly Tribbute</h2>
        </div>
        <div class="min-w-0 w-full text-center">
            <h2>Yearly Conference</h2>
        </div>
    </section>

    <section class="w-full mt-8">
        <h5 class="text-xl font-semibold text-heading text-center mb-6">Monthly Contribution</h5>
        <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 md:gap-4">
            <div :data-tooltip-target="`tooltip-default-${month.month}`"
                class="grid grid-cols-7 content-start rounded-base shadow-base overflow-hidden cursor-pointer"
                v-for="month in yearCalendar" :key="`month-${month}`">
                <div :id="`tooltip-default-${month.month}`" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    {{ month.monthName }}
                    {{ "Unpaid" }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="w-full h-10 flex justify-center items-center bg-green-700" v-for="header in month.headers"
                    :key="`header-${header}`">
                    <span>{{ header.charAt(0) }}</span>
                </div>
                <div class="w-full h-10 flex justify-center items-center border border-success-medium"
                    :class="day?.isToday ? 'bg-danger-soft' : 'bg-success-soft'" v-for="day in month.days"
                    :key="`day-${day}`">
                    <span v-if="day">{{ day.ethiopian?.day }}</span>
                    <span v-else>&nbsp;</span>
                </div>
            </div>
        </div>
    </section>


</template>