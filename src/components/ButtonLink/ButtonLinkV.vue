<template>
    <button>
        <a  :href="link">{{text}}</a>
    </button>
</template>

<script>
export default {
    name: "ButtonLink",
    props: {
        link: String,
        text: String
    }
}
</script>

<style  scoped>
    button {
        background-color: black;
        text-transform: uppercase;
        padding: 15px;
        border-radius: 40px;
        cursor: pointer;
        font-weight: bold;
        margin-left: 9px;
        border: 0;
        padding-left: 30px;
        padding-right: 30px;
    }

    button > a {
        color: white;
    }

    button:hover {
        transform: scale(1.1);
    }
    
</style>