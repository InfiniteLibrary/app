<style lang="scss" scoped>
header { 
	background-color: #eaeaea; 
	border-left: 17px solid black;
	.logo { 
		padding-left: 1em; 
	} 
} 
</style>
<template>
	<header>
	<a v-link="{ name: 'home' }"><img class="logo" src="/images/Title-Logo.png"/></a>
	</header>
</template>
