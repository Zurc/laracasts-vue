<template>
  <!-- always wrap your template with one div -->
  <div>  
    <ul>
      <!-- I can access using v-text or {{ }} syntax -->
      <li v-for="name in names" v-text="name"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  // data is our single source of truth.
  data () {
    return {
      names: ['Joe', 'Mary', 'Jane', 'Jack']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
