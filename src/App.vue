<template>
  <the-navigation/>
  <router-view />
</template>

<script>
import  TheNavigation from './components/TheNavigation.vue'
export default {
  components:{
    TheNavigation,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
