<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorldNew msg="Bem vindo ao seu aplicativo Vue.js"  />
  <!-- <ListaDeClientes /> -->
</template>

<script>
import HelloWorldNew from './components/Motor.vue'
//import ListaDeClientes from './components/ListaDeClientes.vue'

export default {
  name: 'App',
  components: {
    HelloWorldNew //, ListaDeClientes
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
  margin-top: 60px;
}
</style>
