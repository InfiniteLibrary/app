<style lang='scss' scoped>

	$break-small:600px;
	$break-large:900px;

	$color-gray:#676767;
	$color-red:#ff3333;

	#container {
		float:left;
		width:100%;
		height:100%;
		color:$color-gray;
		font-size:16px;
		line-height:1.3em;
		background:#fdfaee;
	}

	#bookHolder {
		float:left;
		width:100%;
		/*border:1px solid black;*/
	}

	#coverHolder {
		float:left;
		width:350px;
		margin:20px 20px 20px 45px;
	}

	#cover {
		width:100%;
		height:auto;
		border:1px solid black;
	}

	#controls {
		width:150px;
		height:60px;
	}

	.btn {
		float:left;
		cursor:pointer;
		color:white;
		width:35px;
		height:36px;
		margin:9px 6px 0 0;
	}
	.btn#read {
		background:url(/images/icon-readnow.png) 0 0;
	}
	.btn#add {
		background:url(/images/icon-addtomylibrary.png) 0 0;
	}

	#details {
		background:#fff;
		float:left;
		width:600px;
		margin:20px 0;
		padding:30px;
	}

	#details .meta {
		width:100%;
	}

	.title {
		font-size:30px;
	}

	.author {
		font-size:18px;
		margin-top:12px;
	}

	#details ul {
		float:left;
		list-style-type:none;
		margin:0;
		padding:0;
	}

	#about {
		float:left;
		width:100%;
		margin:0 0 45px 0;
		padding:0;
	}

	#about .header {
		font-weight:bold;
		padding-top:30px;
	}

	#about .header,
	#about .description {
		float:left;
		width:100%;
	}

	@media screen and (max-width: $break-small) {
    	#container {
    		width:100%;
    	}
   	}
   	@media screen and (min-width: $break-large) {
    	#container {
    		width:100%;
    	}
   	}

</style>
<template>
	<div id='container'>
		<div id='bookHolder'>
			<div id='coverHolder'>
				<a v-link="{ name: 'reader', params: { user: githubUser, repo:$route.params.bookID }}"><img id='cover' :src='coverURL'/></a>
			</div>
			<div id='details'>
				<div class='meta title'>{{ metadata.title }}</div>
				<div class='meta author'>{{ metadata.author }}</div>
				<div id='controls'>
					<a id='read' class='btn' v-link="{ name: 'reader', params: { user: githubUser, repo:$route.params.bookID }}"></a>
					<div id='add' class='btn'></div>
				</div>
				<ul>
					<li v-for="subject in metadata.subj">{{subject}}</li>
				</ul>
				<div id='about'>
					<div class='header'><span>About</span></div>
					<div class='description'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci leo, convallis non tincidunt ac, efficitur vitae risus. Vestibulum pharetra eleifend mauris, et vulputate libero luctus sagittis. Sed vitae metus lorem. Curabitur eu pulvinar lectus, nec consequat urna. Cras ac massa eu sapien tempus imperdiet. Suspendisse potenti. Duis sem purus, auctor at quam euismod, laoreet mattis augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum urna orci, vehicula nec volutpat in, semper sit amet tortor. Praesent eleifend et dui eu scelerisque. Phasellus sit amet ligula at massa blandit rutrum.</span></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data(){
		return {
			githubUser: 'InfiniteLibraryLibrary',
			metadata:{}
		}
	},
	computed:{
		coverURL:function(){
			var url = "https://raw.githubusercontent.com/"
				+ this.githubUser + '/'
				+ this.$route.params.bookID + "/master/cover.jpg";
			return url;
		}
	},
	methods:{
		getBook:function(){
			var repoName = this.githubUser + '/' + this.$route.params.bookID;
			var url = "https://api.github.com/repos/" + repoName;
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
			var url = "https://raw.githubusercontent.com/" + this.githubUser + '/' + this.$route.params.bookID + "/master/metadata.json";
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
