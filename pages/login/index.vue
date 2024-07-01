<script setup>
definePageMeta({
  layout: false,
});

const runtimeConfig = useRuntimeConfig()
const { $swal } = useNuxtApp();
const username = ref('')
const password = ref('')

const handleLogin = () => {
  login();
}
const asd=()=>{
  console.log('asd')
}


const login  = async ()=> {
const dataform = new FormData()
dataform.append('Username', username.value)
dataform.append('Password', password.value)

      try {
        const response = await useFetch(`${runtimeConfig.public.apiBase}auth/login`,{
          method: 'POST',
          body:dataform
        }
      
      
      );
        // localStorage.setItem('token', response.data.token);
     
        if(response.data.value.status == "success"){
          // console.log(response.data.value.response[0].First_name)
         
         window.localStorage.setItem('username', response.data.value.response[0].First_name);
          navigateTo(`/`)
        } 
        else{
        console.log(response.data.value.status)
          $swal.fire({
      heightAuto: false,
      title: "Login Fail",
            
      icon: "error",
      iconColor: "background",
       timer: 1500,
       html:"<span  class='font-sm'>Please Check Username or Password<span> ",
      customClass: {
        title: "font-sm",
        popup: "background",
        text:"font-sm"
       
      },
      showConfirmButton: false,
    });
         
        }
      
      
        // this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
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