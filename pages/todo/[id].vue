<script setup>
useHead({
  title: 'CRUD',
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
const runtimeConfig = useRuntimeConfig()
    const route = useRoute();
    const todoID = route.params.id;



    const todos = ref([])

  
    const loadTodo = async () =>{
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}post/${todoID}`,{
        method: 'GET',
        // headers: {
        //   Authorization: 'Bearer ' + `${token}`  },
         
    })
    console.log(data.value.response)
    todos.value= data.value.response
}

loadTodo()

</script>
<template>
    <div>
        <Head>
         <Meta name="description" :content="todos[0].title" />
        </Head>
        <NuxtLink :to="`/todo`">back</NuxtLink>
        <!-- {{ todos.value.response[0].id }} -->
        <ul v-for="data in todos" :key="data.id">
            <li>{{ data.id }} {{ data.title }} {{ data.body }}</li>
        </ul>
    </div>
</template>