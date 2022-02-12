<template lang="">
    <div class="tabs mx-4">
        <ul class="titles flex justify-between bg-gray-100 rounded-full shadow-lg mb-4 max-w-4xl mx-auto">
            <li v-for="(tab, index) in tabs" 
                :key="index" 
                class="cursor-pointer hover:text-green-600 px-4 py-4 w-1/3 text-center text-sm md:text-lg rounded-full transition duration-500 ease-in-out"
                :class="{'bg-white text-green-600': tab.title == selectedTitle}"
                @click="selectedTitle = tab.title"
            >
                
                <svg xmlns="http://www.w3.org/2000/svg" v-if="tab.name == 'accesibility'"  class="hidden md:block float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" v-if="tab.name == 'realtime'"  class="hidden md:block float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" v-if="tab.name == 'companies'"  class="hidden md:block float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                {{tab.title}}
            </li>
        </ul>
        <slot />
    </div>
</template>
<script>
import {ref, provide } from 'vue';
export default {
    name: 'Tabs',
    setup(props, {slots}){
        const tabs = ref(slots.default().map((tab) => ({'title': tab.props.title, 'name': tab.props.name})));
        const selectedTitle = ref(tabs.value[0].title);
        provide('selectedTitle', selectedTitle);
        return {
            selectedTitle,
            tabs,
        }
    }
}
</script>
<style lang="">
    
</style>