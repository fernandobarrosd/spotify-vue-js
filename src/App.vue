<template>
   <div id="app">
    <HeaderV/>
    <MainV/>
    <FooterV/>
   </div>
</template>

<script>
import HeaderV from './components/Header/HeaderV.vue';
import MainV from './components/Main/MainV.vue';
import FooterV from './components/Footer/FooterV.vue';
import "./css/global.css";


export default {
  name: 'App',
  components: {
    HeaderV,
    MainV,
    FooterV
}

}
</script>

<style>


</style>
