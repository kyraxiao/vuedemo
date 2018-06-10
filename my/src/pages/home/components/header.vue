<template>
 <div class="header">
       <div class="header-left">
       	  	<div class="iconfont backs-icon">&#xe617;</div>
       </div>
       <div class="header-input">
	       	<span class="iconfont">&#xe60c;</span>
	       	输入城市/景点/游玩主题
       </div>
       <router-link to='/city'>
       	   <div class="header-right">
	       		{{this.city}}
	       		<span class="iconfont arrow-icon">&#xe6aa;</span>
           </div>
       </router-link>
    </div>
</template>

<script>
	export default{
		name:'HomeHeader',
		props:{
			city:String
		}
	}
</script>

<style lang="stylus" scoped>
  .header
    display:flex
    line-height:2.6789rem
    height:2.6789rem
    background:#00bcd4
    color:#fff
    .header-left
     width:2rem
     float:left
     .backs-icon
       font-size:1.8rem
       text-align:center
    .header-input
     flex:1
     background:#fff
     margin-top:.4rem
     margin-left:.7rem
     height:2rem
     line-height:2rem
     border-radius:.2rem
     color:#ccc
    .header-right
     width:3.875rem
     float:right
     text-align:center
     color:#fff
     .arrow-icon
       margin-left:-.3rem  
</style>