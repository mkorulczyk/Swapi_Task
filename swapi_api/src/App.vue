<template>
  <i>"{{people}}"</i>
  <p>-Star wars Character</p>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchPeople } from '../connectors/peopleConnector';

//onMounted(() => {
//  people.value = fetchPeople(2)

//} )

onMounted(async() => {
  try{
    const costam = await fetchPeople(1)
    console.log(costam);
  }catch (error){
    console.error('Wystąpił błąd podczas pobierania danych' , error)
  }
});

// async function onMountedIpeple() {
//   const costam = await fetchPeople(1)
//   console.log(costam)
// }
// onMountedIpeple()




const people = ref<any>("");


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
