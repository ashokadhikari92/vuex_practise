import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movies from '@/components/Movies'
import Preview from '@/components/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
