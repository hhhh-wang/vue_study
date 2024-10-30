export default {
	data() {
		return {
			a: 1,
			b: 2
		}
	},
	methods: {
		fn() {
			this.a++;
			this.b += 2;
		}
	},
	template: (`
		<div>
			<h3>one</h3>
			<p>a:{{a}}</p>
			<p>b:{{b}}</p>
			<button @click="fn">点击</button>
		</div>
	`)
}