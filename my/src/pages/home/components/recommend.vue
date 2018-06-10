<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
    	<li class="item" v-for="item of recommendList" :key="item.id">
    		<img class="item-img" :src="item.imgs">
    		<div class="item-info">
    			<p class="item-title">{{item.title}}</p>
    			<p class="item-desc">{{item.desc}}</p>
    			<div class="item-star">
						<span :class="item.ico"></span>
						<span :class="item.ico"></span>
						<span :class="item.ico"></span>
						<span :class="item.ico"></span>
						<span :class="item.ico"></span>
						<span class="star-f">{{item.tets}}</span>
					</div>
					<div class="chagrs"> 
						<span class="char-fir">￥</span>
						<span class="char-sec">{{item.mu}}</span>
						<span>起</span>
						<span class="char-las">票面价：￥</span>
					</div>
    		</div>
    	</li>
    </ul>
  </div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommendList:Array
		}
	}
</script>

<style lang="stylus" scoped>
 .recommend-title
	  margin-top:.4rem
	  line-height:1.8rem
	  background:#eee
	  text-indent:1.1rem
 .item 
    display:flex
    overflow:hidden
    height:6rem
    border-bottom:.01rem solid #ccc
    padding:.6rem 0rem .6rem 0rem
    .item-img
	    width:5rem
	    height:5rem
	    padding:.4rem
		.item-info
		  color:#000
		  .item-title
			  margin-top:.2rem
			  font-size:.8rem
			.item-desc
				font-size:0.3rem
				color:#333
				margin:.5rem 0rem
			.item-star
				margin:.5rem 0rem
				font-size:0.3rem
				color:#87CEEB
				.star-f
				  color:#dcdcdc
			.chagrs
			  font-size:.3rem
				.char-fir
				  color:#FF0000
				.char-sec
					color:#FF0000
				.char-las
				  text-decoration:line-through
				  color:#dcdcdc
</style>