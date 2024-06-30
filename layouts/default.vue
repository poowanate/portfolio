<script setup>
    const hoverNav = ref(false)

    const HandleClick=()=>{
        hoverNav.value = !hoverNav.value
    }
</script>

<template>
<nav class="flex items-center justify-between flex-wrap  bg-PrimaryTitile p-4">
  <div class="flex items-center flex-shrink-0  text-PrimaryBg mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
   
  </div>
  <div class="block lg:hidden">
    <button @click="HandleClick()" class="flex items-center px-3 py-2 border rounded text-PrimaryBg border-pri hover:text-PrimaryContent hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div :class="[ 'w-full',' block ','flex-grow',' lg:flex ','lg:items-center',' lg:w-auto',hoverNav?'':'hidden']">
    <div class="text-sm lg:flex-grow">
        <NuxtLink to='/' class="block mt-4 lg:inline-block lg:mt-0 text-PrimaryBg hover:text-PrimaryContent mr-4">
      
        Home
      
        </NuxtLink>
        <NuxtLink to='/about' class="block mt-4 lg:inline-block lg:mt-0 text-PrimaryBg hover:text-PrimaryContent mr-4">
      
      Portfolio
    
      </NuxtLink>
      <NuxtLink to='/todo' class="block mt-4 lg:inline-block lg:mt-0 text-PrimaryBg hover:text-PrimaryContent mr-4">
      
      CRUD
    
      </NuxtLink>
    </div>
    <div>
        <NuxtLink to='/login' class="inline-block text-sm px-4 py-2 leading-none border bg-PrimaryTitile  rounded text-PrimaryBg   hover:text-PrimaryBg hover:bg-PrimaryContent mt-4 lg:mt-0">
      
            Login
    
      </NuxtLink>
     
    </div>
  </div>
</nav>
    <div class="p-5">
        <slot/>
    </div>
</template>



<style scoped>
 .test{

 }

      
</style>