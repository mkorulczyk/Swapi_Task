<template>
    <div>
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '../Layout/componets/AppHeader.vue'
import AppFooter from '../Layout/componets/AppFooter.vue'

</script>