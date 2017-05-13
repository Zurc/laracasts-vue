<template>
    <div>
      <task v-for="task in tasks" :key="task.task">{{ task.task }}</task>
    </div>
</template>

<script>
// remember to import if you are using component inside component
import task from './task'

export default {
  name: 'tasklist',
  // define your component(s)
  components: {
    task
  },

  data () {
    return {
      tasks: [
          {task: 'Go to the store', complete: true},
          {task: 'Go on holidays', complete: false},
          {task: 'Go to the farm', complete: true},
          {task: 'Go to work', complete: false}
      ]
    }
  }
}
</script>


new Vue({
    el: '#app'
})
