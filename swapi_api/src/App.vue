<template>
  <i>"{{people}}"</i>
  <p>-Star wars character</p>
</template>

<script lang="ts">
import axios from 'axios';
import { ref } from 'vue';

export default{
  setup(){
    const people = ref("")
    axios.get(" https://swapi.dev/api/people/5/")
    .then(response =>{
      people.value = response.data
    })
    return{
      people
    }
  }
}

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
