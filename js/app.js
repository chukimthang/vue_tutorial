new Vue({
  el: "#vue-app",
  data: {
    age: 24,
    x: 0,
    y: 0
  },
  methods: {
    add:function(number) {
      return this.age += number;
    },
    subtract:function(number) {
      return this.age -= number;
    },
    updateXY:function(event) { 
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
