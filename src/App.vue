<template>
   <div id="app">
    <HeaderV/>
    <MainV/>
   </div>
</template>

<script>
import HeaderV from './components/HeaderV.vue';
import MainV from './components/MainV.vue';
import "./css/global.css";

export default {
  name: 'App',
  components: {
    HeaderV,
    MainV
  }

}
</script>

<style>


</style>
