<template>
  <div>
    <app-header></app-header>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
    <router-view></router-view>
  </div>
</template>

<script>

import addBlog from "./components/addBlog.vue"
import showBlogs from "./components/showBlogs.vue"
import header from './components/header.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'app-header': header
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
