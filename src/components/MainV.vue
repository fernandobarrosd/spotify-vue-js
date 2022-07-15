<template>
    <main>
        <MainInformationsV/>
        <MainPremiumV/>
    </main>
</template>

<script>
import MainInformationsV from './MainInformationsV.vue';
import MainPremiumV from './MainPremiumV.vue';

export default {
    name: "MainV",
    components: {
    MainInformationsV,
    MainPremiumV
    }
}
</script>

<style scoped>
    
</style>