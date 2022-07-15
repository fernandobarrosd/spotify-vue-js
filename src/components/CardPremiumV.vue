<template>
    <div class="card-premium-v">
        <img :src="imageUrl" 
        :alt="imageAlt">
        <h4>{{title}}</h4>
        <h5>{{subtitle}}</h5>
    </div>
</template>

<script>
export default {
    name: "CardPremiumV",
    props: {
        imageUrl: String,
        imageAlt: String,
        title: String,
        subtitle: String
    }
}
</script>

<style>
</style>