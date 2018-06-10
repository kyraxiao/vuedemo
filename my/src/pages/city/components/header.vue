<template>
   <div class="header">
                 城市选择
       <router-link to="/">
       	  <div class="iconfont backs-icon">&#xe617;</div>
       </router-link>          
   </div>
</template>

<script>
	export default{
		name:'CityHeader'
	}
</script>

<style lang="stylus" scoped>
  .header
     position:relative
     overflow:hidden
     height:2.6789rem
     line-height:2.6789rem
     text-align:center
     color:#fff
     background:#00bcd4
     .backs-icon
        position:absolute
        top:0
        left:0
        font-size:1.8rem
        text-align:center
        color:#fff
</style>