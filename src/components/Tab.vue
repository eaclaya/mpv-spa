<template>
    <div class="tab-content py-12 bg-white  rounded-lg" 
        v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'Tab',
    props: ['title'],
    setup(){
        const selectedTitle = inject('selectedTitle');
        return {
            selectedTitle
        }
    }
}
</script>