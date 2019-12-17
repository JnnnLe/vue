new Vue({
	el: '#app',
  data: {
  	title: 'Have fun with it, it should not have to be so serious.'
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    }
  }
});