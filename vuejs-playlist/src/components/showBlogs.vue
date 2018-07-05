<template>
  <div id="show-blogs">
    <h1>All Blog Article</h1>
    <input type="text" v-model="search" placeholder="Search Blog">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.content }}</article>
      <p>Author: {{ blog.author }}</p>
      <p>Categories:</p>
      <ul>
          <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
      blogs: [],
      search: ""
    }
  },
  methods: {
    
  },
  created() {
    this.$http.get('https://my-vue-ninja.firebaseio.com/posts.json').then(function(data){
      return data.json()
    }).then(function(data){
      var blogsArray = [];
      for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      //console.log(this.blogs);
    });
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
