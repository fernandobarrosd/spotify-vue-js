<template>
    <footer>
        <SpotifyLogoV/>
        <FooterMenuV/>
    </footer>
</template>

<script>


import SpotifyLogoV from '../Icons/SpotifyLogoV.vue';
import FooterMenuV from '../FooterMenuV/FooterMenuV.vue';


export default {
    name: "FooterV",
    components: {
    SpotifyLogoV,
    FooterMenuV
}
}
</script>

<style>
    footer {
        display: flex;
        width: 100vw;
        background-color: black;
        justify-content: space-around;
        padding-top: 50px;
        padding-bottom: 40px;
    }
</style>