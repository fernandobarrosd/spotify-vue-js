<template>
    <li>
        <a :href="link">
            {{text}}
        </a>
    </li>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        text: String,
        link: String
        
    },

   

    
}
</script>

<style scoped>
    li > a {
        color: white;
        font-weight: bold;
    }

    li > a:hover {
        color: green;
    }

    
</style>