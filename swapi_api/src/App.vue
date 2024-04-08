<template>
  <i>"{{ people }}"</i>
  <p>
    <router-link to="/">Home</router-link>
  </p>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchPeople } from '../connectors/peopleConnector';

const people = ref<string | null>("");


onMounted(async () => {
  const people.value = await fetchPeople(1);
  console.log(people.value);
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
