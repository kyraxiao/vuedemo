<template>
  <div>
      <home-header :city="city" class="fixhead"> </home-header>
      <home-swiper :swiperList="swiperList" class="lunbo"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :recommendLists="recommendLists" class="Lis"></home-weekend>
      <home-footer></home-footer>
  </div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeSwiper from './components/homeswiper'
	import HomeIcons from './components/homeicons'
	import HomeRecommend from './components/recommend'
	import HomeWeekend from './components/weekend'
	import HomeFooter from './components/footer'
	import axios from 'axios'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend,
			HomeFooter
		},
		data (){
			return{
				city:'',		
				swiperList:[],
				iconList:[],
				recommendList:[],
				recommendLists:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json').then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				//console.log(res)
				res=res.data
				if(res.ret&&res.data){
					const data=res.data
					this.city=data.city
					this.swiperList=data.swiperList
					this.iconList=data.iconList
					this.recommendList=data.recommendList
					this.recommendLists=data.recommendLists
				}
			}
		},
		mounted (){
			this.getHomeInfo()
		}
	}
</script>

<style>
	.fixhead{
		width:100%;
		position: fixed;
		top:0;
		left:0;
		z-index: 3;
	}
	.lunbo{
		margin-top:2.6789rem;
	}
	.Lis{
		margin-bottom:2.6789rem;
	}
</style>