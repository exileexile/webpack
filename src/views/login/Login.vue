<template>
	<div class="content">
		<h3 class="greeting">欢迎，{{name}}！</h3>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'summer vibes'
			}
		},
		mounted() {}
	}
</script>

<style scoped>
	.content {
		color: #999;
	}
</style>