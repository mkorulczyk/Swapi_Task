<template>
    <div>
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from './componets/AppHeader.vue'
import AppFooter from './componets/AppFooter.vue'

</script>