<template>
    <main>
        <MainInformationsV/>
        <MainPremiumV/>
    </main>
</template>

<script>
import MainInformationsV from '../MainInformations/MainInformationsV.vue';
import MainPremiumV from '../MainPremium/MainPremiumV.vue';



export default {
    name: "MainV",
    components: {
    MainInformationsV,
    MainPremiumV
}
}
</script>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
</style>