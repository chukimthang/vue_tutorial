new Vue({
  el: "#vue-app",
  data: {
    output: 'Your fav food'
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input_text.value;
    }
  }
});
