<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on-click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.age }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: [
        {name: "Chu Kim Thang", age: 24, show: false},
        {name: "Chu Kim Loi", age: 22, show: false},
        {name: "Luu Duc Phu", age: 22, show: false},
        {name: "Nguyen Doan Quyet Thang", age: 24, show: false},
        {name: "Le Van Bien", age: 23, show: false}
      ]
    }
  }
}
</script>

<style scoped>
  #ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
