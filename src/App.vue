<template>
  <div id="app">

    <modal v-if="showModal" @close="showModal = false"></modal>
    <message title="Hello World" body="Lorem ipsum dolor sit amet"></message>
    <message title="Hello Universe" body="bla bla bla"></message>

    <button class="button is-primary is-outlined" @click="showModal = true">Show modal</Button>
  </div>
</template>

<script>
  import message from '@/components/Message'
  import modal from '@/components/Modal'

  export default {
    name: 'app',
    components: {
      message, modal
    },
    data () {
      return {
        showModal: false
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
