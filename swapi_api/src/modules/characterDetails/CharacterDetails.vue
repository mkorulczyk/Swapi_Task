<template>
    <div :class="style.characterContainer">
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Imię: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.name || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Rok urodzenia: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.birth_year || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Płeć: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.gender || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Kolor włosów: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.hair_color || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Kolor skóry: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.skin_color || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Kolor oczu: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.eye_color || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Wzrost postaci: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.height || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Waga postaci: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.mass || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Data stworzenia: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.created || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Data modyfikacji: </span>
            <span :class="style['characterInfo-value']">{{ fetchCharater?.edited || null }}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style['characterInfo-label']">Link do postaci: </span>
            <span :class="[style['characterInfo-value'], style['characterInfo_link']]">{{ fetchCharater?.url || null }}</span>
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
    return people.value;
});

</script>

<style scoped lang="scss" module="style">
@use 'characterDetails';

.characterInfo {
    @include characterDetails.characterInfo;
}

.characterContainer {
    @include characterDetails.characterContainer;
}
</style>