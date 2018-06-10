<template>
  <div class="wrapper">
  	<swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
    	<img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
    	swiperList:Array
    },
    data() {
      return {
        swiperOption: {
        	notNextTick: true,
          pagination:'.swiper-pagination',
          autoplay:2000,
          loop:true
        }
      }
    },
    computed:{
    	showSwiper (){
    		return this.swiperList.length
    	}
    }
  }
</script>


<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active
   background:#fff
  .wrapper
	  overflow:hidden
	  width:100%
	  height:0
	  padding-bottom:30.476%/*图片的高宽自适应，或者width：100%，height：30.476vm*/
  .swiper-img
    width:100%
</style>