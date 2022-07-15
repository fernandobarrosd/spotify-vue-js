<template>
  <section class="main-premium-v">
    <h2>Por que ser Premium</h2>
    <div class="cards-premium-v">
      <CardPremiumV
      imageUrl=""
      imageAlt=""
      title="Modo offline."
      subtitle="Ouça música onde estiver."/>

       <CardPremiumV
      imageUrl=""
      imageAlt=""
      title="Sem anúncios."
      subtitle="Curta música, sem parar."/>

       <CardPremiumV
      imageUrl=""
      imageAlt=""
      title="Ouça o que quiser."
      subtitle="Mesmo no celular ou tablet."/>

       <CardPremiumV
      imageUrl=""
      imageAlt=""
      title="Troque de música o quanto quiser."
      subtitle="Pule quando quiser."/>
    </div>
    
  </section>
</template>

<script>
import CardPremiumV from './CardPremiumV.vue';
export default {
    name: "MainPremiumV",
    components: {
        CardPremiumV
    },
}
</script>

<style scoped>
    
</style>