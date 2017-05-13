import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
