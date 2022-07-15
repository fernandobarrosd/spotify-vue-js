<template>
    <div class="card-premium-v">
        <div class="card-premium-icon-v">
            <FontAwesomeIcon :icon="iconName"
            class="icon"/>
        </div>
        <h4>{{title}}</h4>
        <h5>{{subtitle}}</h5>
    </div>
</template>

<script>
export default {
    name: "CardPremiumV",
    props: {
        iconName: String,
        title: String,
        subtitle: String
    }
}
</script>

<style scoped>
    .card-premium-v {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        gap: 20px;
    }

    .card-premium-icon-v {
        background-color: gray;
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 50%;
    }

    .card-premium-v h5 {
        text-align: center;
    }
    .icon {
        width: 50%;
        height: 50%;
        margin-bottom: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }
</style>