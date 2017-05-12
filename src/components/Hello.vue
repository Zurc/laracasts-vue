<template>
  <!-- always wrap your template with one div -->
  <div>  
    <!-- conditionally set classes -->
    <button :class="{ 'is-loading': isLoading }" @click="toggleClass">Toggle Me</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  // data is our single source of truth.
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    toggleClass () {
      this.isLoading = !this.isLoading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .is-loading {
    background: red;
  }
</style>
