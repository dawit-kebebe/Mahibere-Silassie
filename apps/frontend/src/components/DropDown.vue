<template>
<div ref="dropdownContainer" class="relative w-fit h-fit" @focusout="handleFocusOut">
    <button 
        class="bg-transparent cursor-pointer mx-auto w-fit h-fit" 
        style="box-shadow: none !important;"
        @click="drop" 
    >
        <slot name="trigger" />
    </button>
    <div 
        class="bg-transparent absolute left-1/2 -translate-x-1/2 mt-2 w-fit h-fit" 
        :class="show ? 'block' : 'hidden'"
        tabindex="-1"
    >
        <slot name="content" />
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const dropdownContainer = ref<HTMLElement | null>(null);

function drop() {
    show.value = !show.value;
}

function handleFocusOut(event: FocusEvent) {
    const movingTo = event.relatedTarget as Node;
    // If the element we are moving to is inside our main container, stay open
    if (dropdownContainer.value?.contains(movingTo)) {
        return;
    }
    
    show.value = false;
}
</script>