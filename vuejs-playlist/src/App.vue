<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    </br>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Ninjas from "./components/Ninjas.vue"

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data () {
    return {
      ninjas: [
        {name: "Chu Kim Thang", age: 24, show: false},
        {name: "Chu Kim Loi", age: 22, show: false},
        {name: "Luu Duc Phu", age: 22, show: false},
        {name: "Nguyen Doan Quyet Thang", age: 24, show: false},
        {name: "Le Van Bien", age: 23, show: false}
      ],
      title: "Vue ThangCK"
    }
  }
}
</script>
