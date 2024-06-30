
<script setup>
  import { about } from '~/composables/about';
  const props = defineProps(['onInitial'])
  const { data } = about()

  const mouseEnter = ref(false);

  props.onInitial("About-section")  
</script>
  
<template>

    <div :class="['grid',' gap-2' ,'scroll-mt-14']" id="About-section" >
        <div class="text-1xl  text-PrimaryContent font-semibold">{{data.title}}</div>
        <div :class="['px-5','py-2' , mouseEnter?' bg-PrimaryHover rounded-md ':'' ]" @mouseover="mouseEnter=true" @mouseleave="mouseEnter = false">{{data.description}}</div>
    </div>
    
</template>