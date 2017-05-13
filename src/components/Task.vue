<template>
    <div>
      <li><slot></slot></li>
    </div>
</template>

<script>
export default {
  name: 'task',

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
