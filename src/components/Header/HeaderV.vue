<template>
     <header>
        <SpotifyLogoV id="header-icon"/>
        <NavBarV/>
    </header>
</template>

<script>
import SpotifyLogoV from '../Icons/SpotifyLogoV.vue';
import NavBarV from '../NavBar/NavBarV.vue';


export default {
    name: "HeaderV",
    components: {
    SpotifyLogoV,
    NavBarV
}
}

</script>

<style scoped>
    header {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        padding: 20px 20px 20px 20px;
        background-color: #000000;
        align-items: center;
        
    }

    header #header-icon {
        margin-left: 40px;
    }

</style>