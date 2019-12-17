new Vue({
	el: '#app',
  data: {
    link: 'https://www.google.com/'
  },
  methods: {
    sayHello: function() {
      this.title = 'Go to Google'
      return this.title
    }
  }
});