<script setup lang="ts">
import Kenat from 'kenat';
import { computed } from 'vue';

const thisYear = (new Kenat()).getEthiopian().year;
const yearCalendar = computed(() => Kenat.getYearCalendar(thisYear));

</script>
<template>
    <section class="w-full mt-8">
        <h5 class="text-xl font-semibold text-heading text-center mb-6">Contribution</h5>

        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-1"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Default checkbox</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>

            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-1"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Default checkbox</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>

            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-1"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Default checkbox</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
            <div
                class="flex items-center w-full max-w-sm px-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox"
                    class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                <label for="bordered-checkbox-2"
                    class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
            </div>
        </div>

        <section class="w-full mt-8">
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
                    <div class="w-full h-10 flex justify-center items-center bg-green-700"
                        v-for="header in month.headers" :key="`header-${header}`">
                        <span>{{ header.charAt(0) }}</span>
                    </div>
                    <div class="w-full h-10 flex justify-center items-center bg-"
                        :class="day?.isToday ? 'bg-danger-soft' : 'bg-success-soft'" v-for="day in month.days"
                        :key="`day-${day}`">
                        <span v-if="day">{{ day.ethiopian?.day }}</span>
                        <span v-else>&nbsp;</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
