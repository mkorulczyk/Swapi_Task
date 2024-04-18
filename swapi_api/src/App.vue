<template>
  <div v-if="pepoleData">
    <h2>{{ peopleData.name }}</h2>
    <DefaultLayout/>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchPeople } from './connectors/peopleConnector';
import IPeople from './types/people';
import DefaultLayout from './layouts/DefaultLayout.vue'
import pepoleData from '../src/modules/mainPage/characterDetails/character.vue'
import peopleData from './modules/mainPage/characterDetails/character';

const people = ref<IPeople | null>();

onMounted(async () => {
  people.value = await fetchPeople(1); 
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
</style>@/types/people./connectors/peopleConnector