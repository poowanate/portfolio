<script setup>
definePageMeta({
  layout: false,
});
const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('username:', username.value)
  console.log('Password:', password.value)
  // Add your login logic here
}
const asd=()=>{
  console.log('asd')
}
</script>

<template>
  
  <div class="min-h-screen flex items-center justify-center  bg-PrimaryContent">
    <div class="  bg-PrimaryBg p-6 rounded-lg  w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            
          />
        </div>
        <div class="flex gap-4">
          <button 
          type="submit"
          class="w-full  bg-PrimaryTitile text-white py-2 px-4 rounded-md hover:bg-PrimaryContent transition duration-300"
        >
        
          Login
        </button>
        <button   @click="asd"
          type="button"
          class="w-full  bg-PrimaryTitile text-white py-2 px-4 rounded-md hover:bg-PrimaryContent transition duration-300"
        >
          Register
        </button>
        </div>
      
      </form>
   
    </div>
  </div>

</template>