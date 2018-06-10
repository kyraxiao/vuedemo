<template>
  <div>
      <home-header :city="city"> </home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :recommendLists="recommendLists"></home-weekend>
  </div>
</template>

<script>
	import HomeHeader from './components/header'
	import HomeSwiper from './components/homeswiper'
	import HomeIcons from './components/homeicons'
	import HomeRecommend from './components/recommend'
	import HomeWeekend from './components/weekend'
	import axios from 'axios'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
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
</style>