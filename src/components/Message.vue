<template>
    <article class="message" v-show="isVisible"> 
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" @click="hideModal"></button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
</template>

<script>
export default {
  name: 'message',
  props: ['title', 'body'],
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    hideModal () {
      this.isVisible = false
    }
  }
}
</script>

<style>
    body {
        margin: 0 15px;
    }
</style>


new Vue({
    el: '#app'
})
