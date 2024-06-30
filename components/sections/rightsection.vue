<script setup>
 import { experience } from '~/composables/experience';
 import { project } from '~/composables/project';

 import { skill } from '~/composables/skill';

 const props = defineProps(['onInitial'])
   console.log(props)

     
</script>

<template>
    <div class="grid  gap-20 px-3">
     <SectionsAbout  :onInitial="props.onInitial" />
    
     <SectionsContentcontrainer :onInitial="props.onInitial" :title="'Experience'" :data="experience()" />
     <SectionsContentcontrainer :onInitial="props.onInitial" :title="'Project'" :data="project()" />
     <SectionsContentcontrainer :onInitial="props.onInitial" :title="'Skill'" :data="skill()" />
     
      
      <SectionsFooter/>
    </div>
</template>