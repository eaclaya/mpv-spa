<template>
   <Menu />
   <div class="flex flex-col items-center relative pb-32">
       <h2 class="text-center text-4xl my-8 font-black">Precios</h2>
           <div class="flex flex-col lg:flex-row w-full max-w-7xl mb-8 justify-between lg:shadow-lg rounded-lg">
            <div class="item px-8 w-full lg:w-1/3 py-8 my-8 border-b-2 lg:border-0 lg:border-r-2 border-gray-200">
                <h2 class="text-3xl text-center mb-4">Plan Basico</h2>
                <h1 class="text-5xl text-center mb-4 font-black relative">L. 250 <span class="text-xl absolute top-0 font-semibold ml-2">/mes</span></h1>
                <button class="bg-green-600 hover:bg-gray-900 text-center text-white py-2 px-8 w-full mb-8 font-semibold text-lg" @click="whatsappLink">Contratar</button>
                <div class="flex-col">
                    <ul class="max-w-max mx-auto text-md lg:text-lg">
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">1 Sucursal</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Facturas ilimitadas</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Clientes ilimitados</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Inventario ilimitado</span>
                        </li>
                        
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">3 Usuarios</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 float-left mt-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">No abierto a modificaciones</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Pago unico de instalacion L. 2,750</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div class="item px-8 w-full lg:w-1/3 py-8 my-8 border-b-2 lg:border-0 lg:border-r-2 border-gray-200">
                <h2 class="text-3xl text-center mb-4">Plan Intermedio</h2>
                <h1 class="text-5xl text-center mb-4 font-black relative">L. 500 <span class="text-xl absolute top-0 font-semibold ml-2">/mes</span></h1>
                <button class="bg-gray-800 hover:bg-gray-900 text-center text-white py-2 px-8 w-full mb-8 font-semibold text-lg" @click="whatsappLink">Contratar</button>
                <div class="flex-col">
                    <ul class="max-w-max mx-auto text-md lg:text-lg">
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">3 Sucursales</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Facturas ilimitadas</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Clientes ilimitados</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Inventario ilimitado</span>
                            </li>
                        
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Multipes usuarios</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Abierto a modificaciones</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Transferencia entre sucursales</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Reportes por sucursal y globales</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Accesos propietarios multi-sucursal</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Pago unico de instalacion L. 7,000</span>
                            </li>
                    </ul>
                </div>
            </div>
            <div class="item px-8 w-full lg:w-1/3 py-8 my-8">
                <h2 class="text-3xl text-center mb-4">Plan Avanzado</h2>
                <h1 class="text-5xl text-center mb-4 font-black relative">L. 500 <span class="text-xl absolute top-0 font-semibold ml-2">/mes</span></h1>
                <button class="bg-gray-800 hover:bg-gray-900 text-center text-white py-2 px-8 w-full mb-8 font-semibold text-lg" @click="whatsappLink">Contratar</button>
                <div class="flex-col">
                    <ul class="max-w-max mx-auto text-md lg:text-lg">
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">6 Sucursales</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Facturas ilimitadas</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Clientes ilimitados</span>
                            </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Inventario ilimitado</span>
                            </li>
                        
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Multiples usuarios</span>
                            </li>
                            <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Abierto a modificaciones</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Transferencia entre sucursales</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Reportes por sucursal y globales</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Accesos propietarios multi-sucursal</span>
                        </li>
                        <li class="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left text-green-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4">Pago unico de instalacion L. 8,000</span>
                        </li>
                    </ul>
                </div>
            </div>  
       </div>

       <div class="custom-shape-divider-bottom-1626449425">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>
   </div>

   <div class="flex flex-col bg-gray-50 lg:py-8">
       <h1 class="text-center text-4xl font-black mb-24 lg:mb-8">Ventajas de la nube</h1>
        <div class="flex flex-col lg:flex-row max-w-6xl mx-auto lg:space-x-4">
            <div class="lg:w-1/2 bg-gray-800 lg:rounded-lg p-16 relative shadow-lg">
                <div class="w-24 h-24 bg-gray-50 text-green-600 rounded-full pt-6 pl-6 absolute -top-12 left-1/2 -ml-12">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                </div>
                <h2 class="text-2xl text-center text-white mb-8 border-b border-white pb-4 font-bold">Sistema en la nube</h2>
                <ul>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl max-w-max mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-left mt-0 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                            Soporte
                            </p>
                        <p class="text-white mb-8 text-center">Te brindamos ayuda rapidamente, no tienes que esperar dias para solventar problemas o agregar nuevos componentes.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl max-w-max mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-left mt-0 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                            Respaldo
                            </p>
                        <p class="text-white mb-8 text-center">Informacion respaldada en la nube, esto te ayuda a prevenir cualquier que pierdas informacion por daños en equipo.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl max-w-max mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-left mt-0 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                            Mantemiento
                            </p>
                        <p class="text-white mb-8 text-center">Nuestro sistema se puede adaptar a cualquier necesidad de negocio, solo dinos tu problema y nosotros lo solventamos.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl max-w-max mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-left mt-0 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                            Accesibilidad
                        </p>
                        <p class="text-white mb-8 text-center">Puedes administrar la actividad de tu negocio las 24 horas del dia desde cualquier dispositivo y desde cualquier lugar del mundo.</p>
                    </li>
                </ul>
            </div>
            <div class="lg:w-1/2 bg-gray-800 lg:rounded-lg p-16 relative shadow-lg">
                <div class="w-24 h-24 bg-gray-50 text-green-600 rounded-full pt-6 pl-6 absolute -top-12 left-1/2 -ml-12">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 class="text-2xl text-center text-white mb-8 border-b border-white pb-4 font-bold">Sistema local</h2>
                <ul>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl mx-auto max-w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-1 mr-1 float-left" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
                            Soporte
                            </p>
                        <p class="text-white mb-8 text-center">El soporte es tardado, muchas veces es necesario moverse al lugar para brindar ayuda tecnica.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl mx-auto max-w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-1 mr-1 float-left" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
                            Respaldo
                            </p>
                        <p class="text-white mb-8 text-center">Riesgo de perder toda la informacion si el equipo sufre algun problema de hardware.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl mx-auto max-w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-1 mr-1 float-left" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
                            Mantemiento
                            </p>
                        <p class="text-white mb-8 text-center">Hacer cambios o modificiones a un sistema empaquetado es complicado y tardado, en ocasiones es imposible.</p>
                    </li>
                    <li>
                        <p class="text-gray-400 font-medium mb-2 text-center text-xl mx-auto max-w-max">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mt-1 mr-1 float-left" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
                            Accesibilidad
                            </p>
                        <p class="text-white mb-8 text-center">No tienes la comodidad de acceder remotamente al sistema desde tus dispositivos preferidos.</p>
                    </li>
                </ul>
            </div>
        </div>
   </div>
    
   <Footer />
</template>

<script>
import Menu from './Menu.vue';
import Footer from './Footer.vue';
export default {
    components: {
        Menu,
        Footer
    },
    methods: {
        whatsappLink() {
            window.location = "https://wa.me/50432563354/?text=%Quiero%contratar%20el%servicio%de%facturacion%27";
        }
    }
}
</script>

<style>
    .custom-shape-divider-bottom-1626449425 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1626449425 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1626449425 .shape-fill {
    fill: rgba(249, 250, 251);
}
</style>

