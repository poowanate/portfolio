<script setup>
const props = defineProps(['data', 'title','onInitial'])

const data =props.data

const parentElement = ref(null)

const mouseEnter = ref({});
const splitJoin = (theText) =>{
      	return theText.split(',');
      }
const SectionID = props.title+`-section`


 onMounted(() => {
  // Optionally, log child nodes on mount
 
  if (parentElement.value) {
    const children = parentElement.value.childNodes[0].textContent
  
    props.onInitial(children)  
  }
})

        // console.log(document.getElementById(SectionID).id)      
</script>

<template>
       <div class="scroll-mt-14" :id="SectionID" ref="parentElement">

<div :class="[ 'text-1xl',  'text-PrimaryContent', 'font-semibold'   ]">{{props.title}}</div>
<div v-for="(item, index) in data.data" :key="index"   >
<div :class="[ 'grid'  ,'gap-1','grid-cols-[25%_75%]' ,'px-2' ,'py-6' ,'rounded-md' , mouseEnter[index]?' bg-PrimaryHover':'' ]" @mouseover="mouseEnter={[index]:true}" @mouseleave="mouseEnter ={[index]:false}">
<div class="flex flex-col gap-5 px-2">
<div :class="[ item.time?'':' hidden' ]">{{item.time}}</div>
    <div :class="[ item.title?'':' hidden' ]" >{{item.title}}</div>
    <div :class="[ 'pr-4', item.image?'':'hidden' ]" ><img :src=item.image /></div>

  
</div>
<div class="grid gap-6 ">
 
    <div :class="[ '' ,'font-semibold' ,mouseEnter[index] ? 'text-PrimaryTitile ':'text-PrimaryContent  ', item.company?'':' hidden']">{{item.company}} </div>
    <div :class="[item.description?'':'hidden' ]" >{{item.description}} </div>
    <!-- <div>{{data.data[1].skill}} </div> -->
    <div class="grid grid-cols-3  sm:grid-cols-4 gap-5 text-sm  pr-2">
    <div v-for="item in splitJoin(item.skill)" :key="item" >            
            <div  :class="[  '','text-PrimaryBg' ,'font-semibold'  ,'text-center',  'shadow-lg',  'rounded-md' ,'px-1' ,'py-1 ', , 'hover=cursor-pointer' ,'transition-all' , mouseEnter[index] ? '  bg-PrimaryTitile  ' : 'bg-PrimaryContent']">{{ item }}</div> 
        </div> 
      
    </div>
</div>
</div> 
</div>

</div>
</template>