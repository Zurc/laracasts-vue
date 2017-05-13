<template>
  <!-- always wrap your template with one div -->
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Task',
  // data is our single source of truth.
  data () {
    return {
      msg: 'task component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
