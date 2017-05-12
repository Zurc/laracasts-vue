<template>
  <!-- always wrap your template with one div -->
  <div>  
    <ul>
      <!-- I can access using v-text or {{ }} syntax -->
      <li v-for="name in names" v-text="name"></li>
    </ul>

    <input type="text" id="input" v-model="newName">
    <button v-on:click="addName()">Add Name</button>
    <!--shorthand
    <button @click="addName()">Add Name</button>
    -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  // data is our single source of truth.
  data () {
    return {
      newName: '',
      names: ['Joe', 'Mary', 'Jane', 'Jack']
    }
  },
  methods: {
    addName () {
      this.names.push(this.newName)
      this.newName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
