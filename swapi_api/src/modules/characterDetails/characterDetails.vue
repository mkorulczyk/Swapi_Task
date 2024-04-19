<template>
    <div>
        Imie: {{ fetchCharater?.name }}
    </div>
    <div>
        Rok urodzenia: {{ fetchCharater?.birth_year }}
    </div>
    <div>
        Płeć: {{ fetchCharater?.gender }}
    </div>
    <div>
        Kolor włosów: {{ fetchCharater?.hair_color }}
    </div>
    <div>
        Kolor skóry: {{ fetchCharater?.skin_color }}
    </div>
    <div>
        Kolor oczu: {{ fetchCharater?.eye_color }}
    </div>
    <div>
        Wzrost postaci: {{ fetchCharater?.height }}
    </div>
    <div>
        Waga postaci: {{ fetchCharater?.mass }}
    </div>
    <div>
        Data stworzenia: {{ fetchCharater?.created }}
    </div>
    <div>
        Data modyfikacji: {{ fetchCharater?.edited }}
    </div>
    <div>
        Link do postaci: {{ fetchCharater?.url }}
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { fetchPeople } from '../../connectors/peopleConnector';
import IPeople from '../../types/people';

const people = ref<IPeople | null>();

onMounted(async () => {
  people.value = await fetchPeople(1); 
});

const fetchCharater = computed<IPeople | null>(() => {
    return people.value ;
});

</script>