<template>
  <div>
    <input type="text" v-model="msg">
  
    <p>The value of the input is: {{ msg }} </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
