<template>
    <section class="main-informations-v">
        <h1>Curta o Premium grátis por 2 meses</h1>
        <h2>
            Depois, pague somente R$19,90/mês.
            Cancelar quando quiser.
        </h2>
        <div>
           <ButtonLinkV link="#"
           text="Começar"/>
           <ButtonLinkV link="#"
           text="Ver planos"/>
        </div>
        <small>
            <a href="#">
                Sujeito a Termos e Condições.
            </a>
            Os 2 meses grátis não estão disponíveis para usuários que já experimentaram o Premium.
        </small>
    </section>
</template>

<script>
import ButtonLinkV from '../ButtonLink/ButtonLinkV.vue';

export default {
    name: "MainInformartionsV",
    components: { ButtonLinkV }
}
</script>

<style scoped>
    .main-informations-v {
        margin-right: auto;
        background-color: #FFD4DB;
        width: 100%;
        padding: 50px 40px 20px 80px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .main-informations-v h1 {
        font-size: 35px;
        font-weight: 200px;
    }

    .main-informations-v h2 {
        font-weight: lighter;
    }

    small {
        color: black;
    }

    small > a {
        text-decoration: underline;
        padding-right: 10px;
    }



    
</style>