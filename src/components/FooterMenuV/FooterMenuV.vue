<template>
    <div class="lista">
        <ul>
            <li class="li-text">Empresa</li>
            <MenuItem text="Sobre"
            link="#"/>
           <MenuItem text="Empregos"
           link="#"/>
           <MenuItem text="For the Record"
           link="#"/>
        </ul>
        <ul>
            <li class="li-text">Comunidades</li>
            <MenuItem text="Para Artistas"
            link="#"/>
            <MenuItem text="Desenvolvedores"
            link="#"/>
            <MenuItem text="Publicidade"
           link="#"/>
           <MenuItem text="Investidores"
           link="#"/>
        </ul>
        <ul>
            <li class="li-text">Links Úteis</li>
            <MenuItem text="Suporte"
           link="#"/>
           <MenuItem text="Player da Web"
           link="#"/>
           <MenuItem text="Aplicativo móvel grátis"
           link="#"/>
        </ul>
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem/MenuItem.vue';
export default {
    name: "FooterMenuV",
    components: { MenuItem }
}
</script>

<style scoped>
    .lista {
        display: flex;
        gap: 60px;
        
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    li.li-text {
        cursor: auto;
        color: white;
        font-weight: bold;
    }


</style>