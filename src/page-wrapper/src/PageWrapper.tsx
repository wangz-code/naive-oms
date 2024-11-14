import { defineComponent } from "vue";
export default defineComponent({
	render() {
		const style = {
			margin: "0.5rem",
		};
		<div class={style}>
			<slot></slot>
		</div>;
	},
});
