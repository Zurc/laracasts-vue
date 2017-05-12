<template>
  <!-- always wrap your template with one div -->
  <div>  
    <button v-bind:title="title">Hover Over Me</button>
    <!-- shorthand 
    <button :title="title">Hover Over Me</button>
    -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  // data is our single source of truth.
  data () {
    return {
      title: 'Now the title is being set through Javascript'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
