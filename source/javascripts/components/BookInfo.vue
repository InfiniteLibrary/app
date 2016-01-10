<style type='text/css' scoped>

	#container {
		float:left;
		width:100%;
		height:100%;
		background:white;
	}

	#bookHolder {
		float:left;
		width:100%;
		/*border:1px solid black;*/
	}

	#coverHolder {
		float:left;
		width:300px;
		height:500px;
		margin:30px;
	}

	#cover {
		width:100%;
		height:auto;
		border:1px solid black;
	}

	#controls {
		width:100%;
		height:60px;
	}

	.btn {
		cursor:pointer;
		color:white;
		padding:12px 30px;
		background:green;
	}
	.btn:first-child {
		float:left;
	}
	.btn:last-child {
		float:right;
	}
	.btn span {
		float:left;
		text-align:center;
	}

	#details {
		float:left;
		width:400px;
		height:400px;
		padding-top:30px;
	}

	#details .meta {
		width:100%;
	}

	.title {
		font-size:40px;
	}

	.author {
		font-size:28px;
	}

	#details ul {
		float:left;
		font-size:18px;
		list-style-type:none;
		padding:0;
	}

	#details ul .value {
		padding-left:4px;
	}

	#about {
		float:left;
		background:#eee;
		width:100%;
		min-height:300px;
		margin:0;
		padding:0;
	}

	#about .header {
		font-size:24px;
		padding-top:30px;
	}

	#about .description {
		padding-top:15px;
	}

	#about .header,
	#about .description {
		float:left;
		width:100%;
	}

	#about span {
		padding-left:30px;
	}
</style>
<template>
	<div id='container'>
		<div id='bookHolder'>
			<div id='coverHolder'>
				<a href=''><img id='cover' :src='coverURL'/></a>
				<div id='controls'>
					<div class='btn'><span>Read</span></div>
					<div class='btn'><span>+/-</span></div>
				</div>
			</div>
			<div id='details'>
				<div class='meta title'>{{ metadata.title }}</div>
				<div class='meta author'>{{ metadata.author }}</div>
				<ul>
					<li v-for="subject in metadata.subj">{{subject}}</li>
				</ul>
			</div>
		</div>
		<div id='about'>
			<div class='header'><span>About</span></div>
			<div class='description'><span>Lorem ipsum dolor sit amet</span></div>
		</div>
	</div>
</template>
<script>
	
export default {
	data(){
		return {
			bookID:'GITenberg/Frankenstein_84',
			metadata:{}
		}
	},
	computed:{
		coverURL:function(){
			var url = "https://raw.githubusercontent.com/" + this.bookID + "/master/cover.jpg";
			return url;
		}
	},
	methods:{
		getBook:function(){
			var url = "https://api.github.com/repos/" + this.bookID;
	      	var xhr = new XMLHttpRequest();
	      	var self = this;
	      	xhr.open('GET', url);
	      	xhr.onload = function() {
	        	self.$set('results', JSON.parse(xhr.responseText));
	        	console.log(JSON.parse(xhr.responseText));
	      	}
	      	xhr.send();
		},
		getMetadata:function(){
			var url = "https://raw.githubusercontent.com/" + this.bookID + "/master/metadata.json";
	      	var xhr = new XMLHttpRequest();
	      	var self = this;
	      	xhr.open('GET', url);
	      	xhr.onload = function() {
	        	self.$set('metadata', JSON.parse(xhr.responseText));

	        	console.log(JSON.parse(xhr.responseText));
	      	}
	      	xhr.send();
		}
	},
	ready:function(){
		this.getMetadata();
	}
}

</script>