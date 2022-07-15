<template>
    <nav>
        <NavBarMenuV/>
    </nav>
</template>

<script>
import NavBarMenuV from '../NavBarMenu/NavBarMenuV.vue';


export default {
    name: "NavBarV",
    components: {
    NavBarMenuV
    }
}
</script>

<style scoped>
    nav {
        margin-right: 100px;
    }
</style>