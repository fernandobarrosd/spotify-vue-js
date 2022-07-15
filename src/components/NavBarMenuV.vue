<template>
    <ul class="navbar-menu-v">
       <li v-for="menuItem in menuItems" :key="menuItem.id">
            <a :href="menuItem.link">
                {{menuItem.text}}
            </a>
       </li>
    </ul>
</template>

<script>
export default {
    name: "NavBarMenuV",
    data() {
        return {
            menuItems: [
                { id: 1, text: "Premium", link: "#" },
                { id: 2, text: "Suporte", link: "#" },
                { id: 3, text: "Baixar", link: "#" },
                { id: 4, text: "Inscrever-se", link: "#" },
                { id: 5, text: "Entrar", link: "#" }
            ]
        }
    }
}
</script>

<style scoped>
    
</style>