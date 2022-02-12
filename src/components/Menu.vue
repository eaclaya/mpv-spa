<template>
    <header class="flex sticky top-0 z-10 bg-white items-center justify-between px-2 md:px-4 py-4 shadow-lg">
      <div class="flex menu-icon w-5 h-5 hidden">
        <button class="text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
      </div>
      <div class="flex logo w-16 md:w-20">
        <button @click="homePage">
          <img src="../assets/images/mpv.png" alt="Mi POS Virtual">
        </button>
      </div>
      <div class="flex items-center justify-between w-2/3 md:w-1/3">
          <button @click="pricingPage" class="cursor text-sm mx-2  lg:text-lg">Precios</button>
          <button @click="tutorialPage" class="cursor text-sm lg:text-lg">Tutoriales</button>
          <a href="https://demo.miposvirtual.com" target="_blank" class="cursor text-sm lg:text-lg bg-green-600 text-white px-4 md:px-8 py-2 rounded-md hover:bg-green-800">Demo</a>
      </div>
     
  </header>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
      
      pricingPage() {
        this.$router.push('/pricing');
      },
      tutorialPage() {
        this.$router.push('/tutorial');
      },
      homePage(){
         this.$router.push('/');
      }
  }
}
</script>