<template>
	<div class="content">
		<h1 class="title">{{name}}</h1>
		<div class="image less-img"></div>
		<div class="row">
			<span>summer</span>
			<span>vibe</span>
		</div>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
		<nav>
			<ul class="nav">
				<li><a title="Home">Home</a></li>
				<li><a href="./login/login.html">Login</a></li>
				<li><a href="./contact/contact.html">Contact</a></li>
			</ul>
		</nav>
		<div class="image-wrap">
			<img data-gifffer="https://img-ads.csdn.net/2018/201802021120372434.gif" class="image-static" />
		</div>
		<div class="greeting"></div>
		<div class="gogo"></div>
	</div>
</template>

<script>
	import Gifffer from '../../lib/gifffer'
	export default {
		data() {
			return {
				name: 'Summer Vibes'
			}
		},
		mounted() {
			const VERSION = '1.0';
			console.log('VERSION', VERSION, _.chunk(['a', 'b', 'c', 'd'], 2));
			Gifffer.Gifffer();
			$('.greeting').html('webpack ProvidePlugin: $ hello jquery');
		}
	}
</script>

<style scoped lang="less">
	@import "../../css/index.scss";
	.content {
		color: #999;
		.image {
			background: url(https://img-ads.csdn.net/2018/201802021120372434.gif) no-repeat;
		 	height: 266px;
		  width: 466px;
		  transform: rotate(25deg);
		}
		.row {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-family: 华文琥珀; /* 加引号失效 */
			font-size: 24px;
			span {
				margin-right: 5px;
				color: #999;
			}
		}
		.image-wrap {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.greeting {
			margin: 10px;
			font-family: 华文琥珀; /* 加引号失效 */
		}
	}
</style>