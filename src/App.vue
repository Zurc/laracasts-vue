<template>
  <div id="app">
    <message title="Hello World" body="Lorem ipsum dolor sit amet"></message>
    
    <message title="Hello Universe" body="bla bla bla"></message>
  </div>
</template>

<script>
  import message from '@/components/Message'

  export default {
    name: 'app',
    components: {
      message
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
