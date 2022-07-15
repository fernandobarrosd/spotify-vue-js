<template>
    <ul class="navbar-menu-v">
       <MenuItem v-for="menuItem in menuItems" 
       :key="menuItem.id"
       :text="menuItem.text"
       :link="menuItem.link"/>
    </ul>
</template>

<script>
import MenuItem from '@/components/MenuItem/MenuItem.vue'
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
        };
    },
    components: { MenuItem }
}
</script>

<style scoped>
   ul {
    display: flex;
    gap: 25px;
    
   }
</style>