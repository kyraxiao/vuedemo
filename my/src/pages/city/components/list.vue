<template>
    <div class="list" ref="wrapper">
	   <div>
	   	    <div class="area">
		    	<div class="title presentcity">当前城市</div>
		    	<div class="button-list">
		    		<div class="button-wrapper">
		    		  <div class="button">深圳</div>
		    	    </div>
		    	</div>
		    </div>
		    <div class="area">
		    	<div class="title">热门城市</div>
		    	<div class="button-list">
		    		<div class="button-wrapper">
		    			<div class="button">深圳</div>
		    		</div>
		    		<div class="button-wrapper">
		    			<div class="button">北京</div>
		    		</div>
		    		<div class="button-wrapper">
		    			<div class="button">上海</div>
		    		</div>
		    		<div class="button-wrapper">
		    			<div class="button">哈尔滨</div>
		    		</div>
		    		<div class="button-wrapper">
		    			<div class="button">重庆</div>
		    		</div>
		    		<div class="button-wrapper">
		    			<div class="button">广州</div>
		    		</div>
		    	</div>
		    </div>
		    <div class="area">
		    	<div class="title">A</div>
		    	<div class="item-list">
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    	</div>
		    	<div class="title">b</div>
		    	<div class="item-list">
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    	</div>
		    	<div class="title">c</div>
		    	<div class="item-list">
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    	</div>
		    	<div class="title">d</div>
		    	<div class="item-list">
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    	</div>
		    	<div class="title">e</div>
		    	<div class="item-list">
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    		<div class="item">阿拉尔</div>
		    	</div>
		    </div>
	   </div>
    </div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'CityList',
		mounted (){
			this.scroll=new BScroll(this.$refs.wrapper)
		}
	}
</script>

<style lang="stylus" scoped>
.list
  overflow:hidden
  position:absolute
  top:5.2rem
  left:0
  right:0
  bottom:0
  .title
    line-height:1.7rem
    background:#eee
    padding-left:.8rem
    color:#666
    border:.01rem solid #ccc
  .button-list 
  	overflow:hidden
  	padding:.1rem 1rem .1rem 1rem
  	.button-wrapper
  	  float:left
  	  width:33.33%
  	  .button
	  	  margin:.3rem
	  	  padding:.3rem 0
	  	  text-align:center
	  	  border:.02rem solid #ccc
  .item-list
    .item
      line-height:3rem
      color:#666
      padding-left:.8rem
      border-bottom:.01rem solid #ccc	  	  
</style>