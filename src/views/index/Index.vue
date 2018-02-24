<template>
	<div class="content">
		<h1 class="title">{{name}}</h1>
		<div class="image less-img"></div>
		<div class="row">
			<span>summer</span>
			<span>vibes</span>
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
	import Gifffer from 'src/lib/gifffer'
	import Json from 'src/test'
	export default {
		data() {
			return {
				name: 'Summer Vibes'
			}
		},
		mounted() {
			const VERSION = '1.0';
			console.log('VERSION', VERSION, Json);
			Gifffer.Gifffer();
			$('.greeting').html('webpack ProvidePlugin: $ hello jquery');
		}
	}
</script>

<style scoped>
	@import "../../css/index.scss";
	.content {
		color: #999;
		.title {} /* this is useless css webpack will remove */
		.image {
			background: url(https://img-ads.csdn.net/2018/201802021120372434.gif) no-repeat;
		 	height: 266px;
		  width: 760px;
		  transform: rotate(25deg);
		}
		.row {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 24px;
			font-family: 华文琥珀;
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
			font-family: 华文琥珀;
		}
	}
	.unuse { /* this is useless css webpack will not remove */
		 color: red; 
	}
</style>