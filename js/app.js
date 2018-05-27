new Vue({
  el: "#vue-app",
  data: {
    name: "Chu Kim Thang",
    job: "Information Technology"
  },
  methods: {
    greet:function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
