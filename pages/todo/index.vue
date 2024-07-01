

<script setup>

useHead({
  title: 'CRUD',
  meta: [
    { name: 'MY CRUD', content: 'CREATE READ UPDATE DELETE' }
  ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()

console.log(appConfig.theme.colors)
 const formData = ref({
      id:'',
      user_id: '',
      title: '',
      body: '',
      testselect: 'option1'
    })
    const response = ref(null)
    const error = ref(null)
    const ButtonSwitch = ref(false)
    

  
       const todobody = ref('')
 const todotitle = ref('')
 const todotestselect = ref('')
const todos = ref([])

const loadTodo = async () =>{
    todos.value = []
    Reset()
    
    try {
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}post`,{
        method: 'GET',
        // headers: {
        //   Authorization: 'Bearer ' + `${token}`  },
         
    });
    todos.value= data.value.response
} catch (error) {
    console.error('Error:', error);
    // Handle network errors or other issues
  }
 
   
}

  
const submitForm = async () =>{

    const dataform = new FormData()
    dataform.append('user_id', formData.value.user_id)
    dataform.append('title', formData.value.title)
    dataform.append('body', formData.value.body)
    dataform.append('testselect', formData.value.testselect)

    try{
        const {data} = await useFetch(`${runtimeConfig.public.apiBase}post/create`,{
        method: 'POST',
        body: dataform
    })
    console.log(data)
    await loadTodo()
}
catch(error){
    console.log('error',error)
}

    

}


const Edit =(data)=>{
     ButtonSwitch.value=true;
     formData.value.id = data.id;
       formData.value.user_id = data.user_id;
     formData.value.title = data.title;
       formData.value.body = data.body;
       formData.value.testselect = data.testselect;
    
}
const Reset =()=>{
     ButtonSwitch.value=false;
     formData.value.id = '';
       formData.value.user_id = '';
     formData.value.title = '';
       formData.value.body = '';
       formData.value.testselect = 'option1';
    
}

const Updatedata = async () =>{

const dataform = new FormData()
dataform.append('user_id', formData.value.user_id)
dataform.append('title', formData.value.title)
dataform.append('body', formData.value.body)
dataform.append('testselect', formData.value.testselect)

console.log(dataform)
try{
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}post/${ formData.value.id}/update`,{
    method: 'POST',
    body: dataform
})
console.log(data)
await loadTodo()

}
catch(error){
console.log('error',error)
}



}

const DeleteData = async (id) =>{


try{
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}post/${id}/delete`,{
    method: 'POST',
   
})



}
catch(error){
console.log('error',error)
}

await loadTodo()

}

const isEven =(id) =>{
      return id % 2 === 0;
    }

 loadTodo()




</script>



<template>
     <div class="   ">

  <form @submit.prevent="submitForm" class=" grid grid-rows-5 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-5 grid-flow-col gap-2 justify-center">
    <div class="grid gap-1 uppercase ">
        <label>userid</label>
      <input class="  text-PrimaryBg   bg-PrimaryContent rounded-md p-1" type="text" v-model="formData.user_id"  />
    </div>
    <div class="grid gap-1 uppercase">
        <label>Title</label>
      <input class="  text-PrimaryBg   bg-PrimaryContent rounded-md p-1" type="text" v-model="formData.title"  />
    </div>
    <div class="grid gap-1 uppercase">
        <label>Body</label>
      <input class="  text-PrimaryBg   bg-PrimaryContent rounded-md p-1 " type="text" v-model="formData.body"  />
    </div>
    <div class="grid gap-1 uppercase">
        <label>testselect</label>
        <select v-model="formData.testselect" class="  text-PrimaryBg   bg-PrimaryContent rounded-md  px-10  p-1">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
    <div   class="grid grid-rows-[0%_100%] gap-1 "><div></div>
    <button :hidden="!ButtonSwitch" class="bg-PrimaryTitile shadow-sm  font-semibold rounded-xl px-5 w-auto text-white   hover:bg-PrimaryContent hover:text-PrimaryTitile transition-all" @click="Updatedata">Edit</button>
    <button :hidden="!ButtonSwitch" class=" bg-red-400 shadow-sm  font-semibold rounded-xl  w-auto text-white   hover:bg-PrimaryContent hover:text-PrimaryTitile transition-all" @click="Reset">cancel</button>
    <button :hidden="ButtonSwitch" class="bg-PrimaryTitile shadow-sm  font-semibold rounded-xl p-3 w-auto text-white   hover:bg-PrimaryContent hover:text-PrimaryTitile transition-all" type="submit">Create</button>
    </div>
     
    
     
    </form>
   

<div class="relative overflow-x-auto rounded-lg  mt-20 justify-center ">
    <table class="w-full text-sm text-left  text-PrimaryBg dark:text-gray-400 sm:text-base md:text-lg ">
        <thead class="text-md text-PrimaryBg  uppercase dark:bg-PrimaryTitile dark:text-PrimaryBg ">
            <tr >
                <th scope="col" class="px-6 py-3  ">
                   ลำดับที่
                </th>
                <th scope="col" class="px-6 py-3">
                    user_id
                </th>
                <th scope="col" class="px-6 py-3">
                    title
                </th>
                <th scope="col" class="px-6 py-3">
                    body
                </th>
                <th scope="col" class="px-6 py-3">
                    testselect
                </th>
                <th scope="col" class="px-6 py-3">
                    #
                </th>
            </tr>
        </thead>
        <!-- class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" -->
        <tbody v-if="todos.length>0" class="  bg-PrimaryHover" >
            <tr v-for="(post, index) in todos" :key="post.id" :class="{  'bg-PrimaryContent':isEven(index+1) ,' text-PrimaryBg ': isEven(index+1) }" >
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    {{ index+1 }}
                </th>
                <td class="px-6 py-4">
                    {{ post.user_id }}
                </td>
                <td class="px-6 py-4">
                    {{ post.title }} 
                </td>
                <td class="px-6 py-4">
                    {{ post.body }}
                </td>
                <td class="px-6 py-4">
                    {{ post.testselect }}  
                </td>
                <td class="px-6 flex gap-2 py-4">
                    <button type="submit" class=" border-PrimaryTitile border p-4 rounded-md hover:bg-PrimaryTitile hover:text-PrimaryBg  shadow-lg" @click.prevent="Edit(post)">Edit</button>
                    <button type="submit" class=" border-red-400 border p-4 rounded-md hover:bg-red-200 hover:text-PrimaryBg  shadow-lg" @click.prevent="DeleteData(post.id)">Delete</button>
                </td>
            </tr>
            
        </tbody>
        <tbody v-else class="  bg-PrimaryHover" >
            <tr>
               
            </tr>
        </tbody>
    </table>
   
</div>

    <div v-if="error">Error: {{ error }}</div>
    <div v-if="response">Response: {{ response }}</div>
    <ul>
      
        <li v-for="post in todos" :key="post.id">
             
           
           
        </li>
    </ul>
  
</div>
</template>