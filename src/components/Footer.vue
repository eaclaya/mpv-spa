<template lang="">
    <button @click="whatsappLink" class="bg-green-600 text-white w-20 h-20 fixed bottom-10 right-10 rounded-full transform hover:-translate-y-2 duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
    </button>
    <div class="flex bg-green-600 py-4">
        <div class="flex flex-col items-center w-1/2 space-y-4">
            <button class="text-white" @click="homePage">Inicio</button>
            <button class="text-white" @click="tutorialPage">Tutoriales</button>
            <button class="text-white" @click="pricingPage">Precio</button>
            <a class="text-white" target="_blank" href="https://demo.miposvirtual.com">Demo</a>
        </div>
        <div class="flex flex-col items-center w-1/2">
            <p class="text-center text-white mb-4">Tegucigalpa, Honduras</p>
            <div class="social flex max-w-md space-x-4">
            <a target="_blank" href="https://wa.me/50432563354/?text=%27Me%20Interesa%20el%20sistema%20que%20esta%20ofreciendo%27" class="cursor-pointer"><img class="w-10" src="../assets/images/whatsapp.png" /></a>
            <a target="_blank" href="https://www.facebook.com/pg/miposvirtual" class="cursor-pointer"><img class="w-8" src="../assets/images/facebook.svg" /></a>
            <a target="_blank" href="https://www.instagram.com/miposvirtual/" class="cursor-pointer"><img class="w-8" src="../assets/images/instagram.svg" /></a>
            </div>
        </div>
    </div>
    <div class="bg-green-800 py-4">
        <p class="text-center text-white"><span class="font-extrabold text-white">Copyright &copy; 2021</span> | <span class="text-gray-300">Made with Vue and Tailwindcss</span></p>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    methods: {
      pricingPage() {
        this.$router.push('/pricing');
      },
      tutorialPage() {
        this.$router.push('/tutorial');
      },
      homePage(){
         this.$router.push('/');
      },
      whatsappLink() {
            window.location = "https://wa.me/50432563354/?text=%Quiero%contratar%20el%servicio%de%facturacion%27";
      }
  }
}
</script>
