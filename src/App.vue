<template>
  <div id="app">

    <tasklist></tasklist>

    <router-view></router-view>
  </div>
</template>

<script>
  import tasklist from '@/components/task-list'

  export default {
    name: 'app',
    components: {
      tasklist: tasklist
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
