

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
      user_id: '',
      title: '',
      body: '',
      testselect: 'option1'
    })
    const response = ref(null)
    const error = ref(null)

    

  
       const todobody = ref('')
 const todotitle = ref('')
 const todotestselect = ref('')
const todos = ref([])

const loadTodo = async () =>{
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}`,{
        method: 'GET',
        // headers: {
        //   Authorization: 'Bearer ' + `${token}`  },
         
    })
    console.log('g',data.value.response    )
    todos.value= data.value.response
}

  
const submitForm = async () =>{

    const dataform = new FormData()
    dataform.append('user_id', formData.value.user_id)
    dataform.append('title', formData.value.title)
    dataform.append('body', formData.value.body)
    dataform.append('testselect', formData.value.testselect)

    try{
        const {data} = await useFetch(`${runtimeConfig.public.apiBase}/create`,{
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

const Updatedata = async (id) =>{

const dataform = new FormData()
dataform.append('user_id', formData.value.user_id)
dataform.append('title', formData.value.title)
dataform.append('body', formData.value.body)
dataform.append('testselect', formData.value.testselect)

console.log(dataform)
try{
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}/${id}/update`,{
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



 loadTodo()




  
</script>



<template>
      <div>

    
  </div>

  <form @submit.prevent="submitForm">
      <input type="text" v-model="formData.user_id" placeholder="User ID" />
      <input type="text" v-model="formData.title" placeholder="Title" />
      <textarea v-model="formData.body" placeholder="Body"></textarea>
      <select v-model="formData.testselect">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    
      <button type="submit">Upload</button>
    </form>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="response">Response: {{ response }}</div>
    <ul>
      
        <li v-for="post in todos" :key="post.id">
            {{ post.user_id }} {{ post.title }} {{ post.body }} {{ post.testselect }}  
            <button type="submit" @click.prevent="Updatedata(post.id)">edit</button>
           
        </li>
    </ul>
  
    
</template>