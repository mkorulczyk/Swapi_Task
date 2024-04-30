<template>
    <div :class="style.characterContainer">
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Imię:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.name}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Rok urodzenia:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.birth_year}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Płeć:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.gender}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Kolor włosów:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.hair_color}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Kolor skóry:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.skin_color}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Kolor oczu:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.eye_color}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Wzrost postaci:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.height}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Waga postaci:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.mass}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Data stworzenia:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.created}}</span>
        </div>
        <div :class="style.characterInfo">
            <span :class="style.characterInfo_label">Data modyfikacji:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.edited}}</span>
        </div>
        <div :class="style.stylecharacterContainer_link">
            <span :class="style.characterInfo_label">Link do postaci:</span>
            <span :class="style.chracterInfo_value">{{fetchCharater?.url}}</span>
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

<style scoped lang="scss" module="style">
@use 'characterDetails';

.stylecharacterContainer_link{
    @include characterDetails.characterContainer_link;
}

.characterInfo_value{
    @include characterDetails.chracterInfo_value;
}

.characterInfo_label{
    @include characterDetails.characterInfo_label;
}

.characterInfo{
    @include characterDetails.characterInfo;
}

.characterContainer {
  @include characterDetails.characterContainer;
}
</style>