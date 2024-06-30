<script setup>
  const Nav = [
    { title:'About', sectionsID:'About-section' },
    { title:'Experience', sectionsID:'Experience-section' },
    { title:'Project', sectionsID:'Project-section' },
    { title:'Skill', sectionsID:'Skill-section' },
  ]

  const handleClick =(sectionID) =>{
    
    console.log(sectionID)
    document.getElementById(sectionID).scrollIntoView({
  behavior: 'smooth'
});
  }

  const mouseEvent = ref ({})
</script>

<template>

  <div  class="flex  flex-col  ">
     <div  v-for="(item, index) in Nav" :key="index">
      <div @click="handleClick(item.sectionsID)" class="cursor-pointer text-1sm flex gap-4 py-4 font-semibold text-PrimaryBase"
      @mouseover="mouseEvent={[index]:true}" @mouseleave="mouseEvent = {[index]:false}"
       >  
       <div :class="[ 'new-arrow', mouseEvent[index]?'':'hidden']"> <font-awesome-icon   icon="fa-solid fa-arrow-right"/></div>
       <div :class="[ ' duration-500 ease-out', mouseEvent[index]?'  translate-x-2 ':'']">{{item.title}}</div>
       
        </div>
      
      </div>
    </div>
</template>