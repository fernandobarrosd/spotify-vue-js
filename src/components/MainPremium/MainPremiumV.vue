<template>
  <section class="main-premium-v">
    <h2>Por que ser Premium</h2>

    <div class="cards-premium-v">
      <CardPremiumV
      iconName="music"
      title="Modo offline."
      subtitle="Ouça música onde estiver."/>
      
       <CardPremiumV
      iconName="exclamation-circle"
      title="Sem anúncios."
      subtitle="Curta música, sem parar."/>

       <CardPremiumV
       iconName="headphones"
      title="Ouça o que quiser."
      subtitle="Mesmo no celular ou tablet."/>

       <CardPremiumV
      iconName="circle-play"
      title="Troque de música o quanto quiser."
      subtitle="Pule quando quiser."/>
      
    </div>
    
  </section>
</template>

<script>
import CardPremiumV from '../MainCardPremium/CardPremiumV.vue'
export default {
    
    name: "MainPremiumV",
    components: {
       CardPremiumV
    },
}
</script>

<style scoped>
    .main-premium-v {
      padding-top: 70px;
      margin-bottom: 130px;
    }

    .main-premium-v > h2 {
      text-align: center;
      margin-bottom: 80px;
      font-size: 30px;
    }
    .cards-premium-v {
      display: flex;
      flex-wrap: wrap;
      
    }
</style>