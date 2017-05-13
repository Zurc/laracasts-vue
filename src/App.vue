<template>
  <div id="app">

    <Task>Go to the bank</Task>
    <Task>Go to the store</Task>
    <Task>Go to the work</Task>  

    <router-view></router-view>
  </div>
</template>

<script>
  import Task from '@/components/Task'
  export default {
    name: 'app',
    components: {
      Task: Task
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
