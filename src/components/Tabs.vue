<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>
  
    <div class="tab-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  components: {
    // tab
  },
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  },
  created () {
    this.tabs = this.$children
  }
}
</script>

new Vue({
  el: '#app'
})
