<script setup>


definePageMeta({
  layout: false,
});

 const SectionID = ref([])
const addSectionID =(SectionIDs) =>{
  // console.log(SectionIDs.value.childNodes)
  const children = SectionIDs
  //  SectionID = [...SectionID,elementid]

  // console.log(children)
   
}



</script>

<template>
  <div id="g"  class="mt-14 mx-auto max-w-7xl grid gap-y-5 lg:grid-cols-[40%_60%]">
  <SectionsLeftsection/>
  <SectionsRightsection :onInitial="addSectionID"/>
  </div>
</template>

<style scoped>
/* *{
  border:2px solid red;
} */
</style>
