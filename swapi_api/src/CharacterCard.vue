<template>
    <div class="character-card">
        <h2>{{ IPeople.name }}</h2>
        <p><strong>Height:</strong>{{ IPeople.height }}</p>
    </div>
</template>
<script lang="ts" setup>
import IPeople from '../types/people'; 

</script>