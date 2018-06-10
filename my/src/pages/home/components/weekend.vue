<template>
<div>
    <div class="recommend-title">周末去哪里</div>
    <ul>
    	<li class="item" v-for="item of recommendLists" :key="item.id">
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
					<div class="chagr">
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
		name:'HomeWeekend',
		props:{
			recommendLists:Array
		}
	}
</script>

<style lang="stylus" scoped>
.recommend-title
  background:#ccc
  width:100%
  line-height:1.8rem
  text-indent:.8rem
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