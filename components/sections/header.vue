<script setup>

import { header } from '~/composables/header'
const age = ref(null);
const calculateAge = () => {
  const currentYear = new Date().getFullYear();
  age.value = currentYear - 1995;
  return age.value;
};


const { data } = header()

</script>

<template>

<div class="flex flex-col gap-5">
        <div class="TitleCus">
          {{data.name}}
        </div>
        <div class="text-2xl text-PrimaryContent font-semibold">
          {{data.title}}
        </div>
        <div class="text-sm font-semibold">Age {{ calculateAge() }} year</div>
        <div class="text-sm font-semibold">{{ data.university }}</div>
        <div class="text-sm font-semibold">
          {{ data.faculty }}
        </div>
        <div class="mt-2">
          <NuxtLink :to="data.link" target="_blank">
            <span
              class="bg-PrimaryTitile shadow-sm  font-semibold rounded-xl p-3 w-auto text-white   hover:bg-PrimaryContent hover:text-PrimaryTitile transition-all"
            >
              View Degree
              <span class="ml-2 -rotate-90 inline-block">
                <font-awesome-icon class=" " icon="fa-solid fa-arrow-down"
              /></span>
            </span>
          </NuxtLink>
        </div>
      </div>
</template>