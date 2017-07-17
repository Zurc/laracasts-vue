<template>
  <div id="app">

    <tabs>
      <tab name="Home" selected="true">
        <h1>Here is the content for Home tab</h1>
      </tab>
      <tab name="About Us" >
        <h1>Here is the content for About Us tab</h1>
      </tab>
      <tab name="Culture" >
        <h1>Here is the content for Culture tab</h1>
      </tab>
      <tab name="Vision" >
        <h1>Here is the content for Vision tab</h1>
      </tab>
    </tabs>

  </div>
</template>

<script>
  import tabs from '@/components/Tabs'
  import tab from '@/components/Tab'

  export default {
    name: 'app',
    components: {
      tabs, tab
    },
    props: [
      'name'
    ],
    data () {
      return {
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
