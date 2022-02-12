<template lang="">
    <Menu />
    <div class="flex flex-col py-8 px-4 max-w-screen-2xl mx-auto">
        <h2 class="text-4xl text-center font-black mb-8">Tutoriales</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/9GaZzPl_wkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/RV4zNWmI1ss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/enAvT4eLGLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/NNSEyycYZuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/0ypjRo8TxCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="">
                <iframe width="100%" height="430px"  src="https://www.youtube.com/embed/k3iJSndZglc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Menu from './Menu.vue';
import Footer from './Footer.vue';
export default {
    name: 'Tutorial',
    components: {
        Menu,
        Footer
    }
}
</script>
<style>
    
</style>