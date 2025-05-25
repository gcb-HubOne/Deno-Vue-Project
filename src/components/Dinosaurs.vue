<script setup>
import { ref, onMounted } from 'vue';

const dinosaurs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:8000/dinosaurs');
    dinosaurs.value = await response.json();
  } catch (error) {
    console.error('Error fetching dinosaurs:', error);
  }
});
</script>

<template>
  <div class="dinosaurs-list">
    <div v-for="dinosaur in dinosaurs" :key="dinosaur.name">
      <RouterLink :to="{ name: 'Dinosaur', params: { dinosaur: dinosaur.name }}">
        {{ dinosaur.name }}
      </RouterLink>
    </div>
  </div>
</template>