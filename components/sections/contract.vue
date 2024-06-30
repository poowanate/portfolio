<script setup>
const { $swal } = useNuxtApp();
const CopyText = (status) => {
  if (status == "phone") {
    navigator.clipboard.writeText("091-5322309");
    $swal.fire({
      heightAuto: false,
      title: "Copy Phone Success",
      icon: "success",
      iconColor: "background",
       timer: 1500,
      customClass: {
        title: "font-sm",
        popup: "background",
      },
      showConfirmButton: false,
    });
  } else if (status == "email") {
    navigator.clipboard.writeText("poowanate.nop@gmail.com");
    $swal.fire({
      heightAuto: false,
      title: "Copy Email Success",
      icon: "success",
      iconColor: "background",
       timer: 1500,
      customClass: {
        title: "font-sm",
        popup: "background",
      },
      showConfirmButton: false,
    });
  }
};
</script>
<template>
    <div
        class="flex items-end text-PrimaryTitile font-semibold gap-4 text-2xl"
      >
        <div>
          <NuxtLink :to='`https://github.com/poowanate`' target="_blank">
          <font-awesome-icon
            class=" hover:cursor-pointer hover:scale-125 hover:text-PrimaryContent transition-all"
            icon="fa-brands fa-github"
          />
        </NuxtLink>
        </div>
        <div>
          <a @click="CopyText('phone')">
            <font-awesome-icon
              class=" hover:cursor-pointer hover:scale-125 hover:text-PrimaryContent transition-all"
              icon="fa-fa fa-phone"
            />
          </a>
        </div>
        <div>
          <a @click="CopyText('email')">
            <font-awesome-icon
              class="  hover:cursor-pointer hover:scale-125 hover:text-PrimaryContent transition-all"
              icon="fa-solid fa-envelope"
            />
          </a>
        </div>
      </div>
</template>