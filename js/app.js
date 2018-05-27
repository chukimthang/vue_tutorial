new Vue({
  el: "#vue-app",
  data: {
    name: "Chu Kim Thang",
    job: "Information Technology",
    website: "https://sochitieu.herokuapp.com",
    websiteTag: "<a href='https://www.youtube.com'>Link youtube</a>"
  },
  methods: {
    greet:function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
