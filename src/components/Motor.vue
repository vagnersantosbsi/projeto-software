<template>
  <div>
    <label>Motor do Carro</label>
  </div>
  <ArranqueCarro/>
</template>

<script>

import ArranqueCarro from './ArranqueCarro.vue'; 

export default {
  name: 'MotorCarro',
  components: {
    ArranqueCarro
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  color: #4246b9;
  font-size: 14px;
}

</style>
