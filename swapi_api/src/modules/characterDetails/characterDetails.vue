<template>
    <div class="character-card">
        <div class="character-card__info">
            <span class="character-card__info-label">Imię:</span>
            <span class="character-card__info-value">{{fetchCharater?.name}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Rok urodzenia:</span>
            <span class="character-card__info-value">{{fetchCharater?.birth_year}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Płeć:</span>
            <span class="character-card__info-value">{{fetchCharater?.gender}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Kolor włosów:</span>
            <span class="character-card__info-value">{{fetchCharater?.hair_color}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Kolor skóry:</span>
            <span class="character-card__info-value">{{fetchCharater?.skin_color}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Kolor oczu:</span>
            <span class="character-card__info-value">{{fetchCharater?.eye_color}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Wzrost postaci:</span>
            <span class="character-card__info-value">{{fetchCharater?.height}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Waga postaci:</span>
            <span class="character-card__info-value">{{fetchCharater?.mass}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Data stworzenia:</span>
            <span class="character-card__info-value">{{fetchCharater?.created}}</span>
        </div>
        <div class="character-card__info">
            <span class="character-card__info-label">Data modyfikacji:</span>
            <span class="character-card__info-value">{{fetchCharater?.edited}}</span>
        </div>
        <div class="character-card__link">
            <span class="character-card__info-label">Link do postaci:</span>
            <span class="character-card__info-value">{{fetchCharater?.url}}</span>
        </div>
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