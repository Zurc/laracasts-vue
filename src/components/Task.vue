<template>
    <li><slot></slot></li>
</template>

<script>
export default {
  name: 'Task',

  data () {
    return {
      message: 'Foobar'
    }
  }
}
</script>


new Vue({
    el: '#app'
})
