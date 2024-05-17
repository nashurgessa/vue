const app = Vue.createApp({
	// can be data, methods
	data() {
		return {
			showBooks:true,
			age: 31,
			title: 'The final Empire'
		}
	},
	methods: {
		changeTitle() {
			this.title = "Chala"
		},
		decreaseAge() {
			this.age--
		}, 
		toggleShowBooks() {
			this.showBooks = !this.showBooks
		}
	}
})

app.mount("#app")