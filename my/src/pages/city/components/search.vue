<template>
   <div class="search">
       <input class="search-input" type="text" placeholder="请输入城市或者拼音">
   </div>
</template>

<script>
	export default{
		name:'CitySearch'
	}
</script>

<style lang="stylus" scoped>
  .search
    height:2.2rem
    padding:.2rem
    background:#00bcd4
    .search-input
       width:100%
       height:2rem
       line-height:2rem
       text-align:center
       border-radius:.3rem
       box-sizing:border-box
</style>