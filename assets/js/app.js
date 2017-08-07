
var app = new Vue({
  el: `#app`,
  data: {
    isLogin: false
  },
  methods: {
    changeStatus: function () {
      this.isLogin = true
    }
  }
})
