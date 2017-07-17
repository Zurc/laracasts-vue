<template>
    <article class="message" v-show="isVisible"> 
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" @click="isVisible = false"></button>
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
