<template>
    <div>
        <button @click.prevent="count++">Add 1</button>
<p>Count is: {{ count }}</p>
    </div>
</template>

<script setup>
const count = ref(0)
</script>