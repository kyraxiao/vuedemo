<template>
  <div class="container">
  	<swiper :options="swiperOption">
  		<swiper-slide v-for="page of pages" :key="page.id">
		  	<div class="icon-logo" v-for="item of iconList" :key="item.id">
		  		<span v-bind:class="item.tex" ></span>
		  		<p class="icon-p">{{item.desc}}</p>
		  	</div>
  	   </swiper-slide>
  	</swiper>
  </div>
</template>

<script>
	export default{
		name:'HomeIcons',
		props:{
			iconList:Array
		},
		data (){
			 return{
			 	 swiperOption:{
			 	 	autoplay:false
			 	 }
			 }
		},
		computed: {  
	    pages () {  
	      const pages = []  
	      this.iconList.forEach((item, index,id) => {  
	        const page = Math.floor(index/8)  
	        if (!pages[page]) {  
	          pages[page] = []  
	        }  
	        pages[page].push(item)  
	      })  
	      return pages  
	    }  
    }  
	}
</script>

<style lang="stylus" scoped>
 .container>>>.swiper-container
  height:0
  padding-bottom:50%
  .icon-logo
	  overflow:hidden
	  float:left
	  width:25%
	  height:0
	  padding-bottom:25%
	  text-align:center
	  .icon-span
	     font-size:3rem
	     display:inline-block
</style>