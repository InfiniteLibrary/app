<style lang="scss" scoped>
#home { 
	background-color: #FDFAEE; 
} 
</style>

<template>
<search></search>
<div id="home">
<h1>This is the home section!</h1>
</div>
</template>

<script>
import Search from "./Search.vue";
export default {
  components: {
    Search
  }
}
</script>
