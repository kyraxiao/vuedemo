   <template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <alphabet :CityAlphabet="CityAlphabet" @change="handleLetterChange"></alphabet>
    </div>
</template>

<script>
	import CityHeader from './components/header'
	import CitySearch from './components/search'
	import CityList from './components/list'
	import Alphabet from './components/alphabet'
	import axios from 'axios'
	export default{
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			Alphabet,
		},
		data (){
			return{
				CityAlphabet:[]
		    }
		},
		methods:{
			getCityInfo(){
				axios.get('/api/City.json').then(this.getCityInfoSucc)
			},
			getCityInfoSucc(res){
				console.log(111)
				console.log(res)
				res=res.data
				if(res.ret&&res.data){
					const data=res.data
					this.CityAlphabet=data.CityAlphabet
				}
			},
			mounted (){
				this.getCityInfo()
			},
			handleLetterChange (){
					console.log(letter)
			}
	   }
	}	
</script>

<style lang="stylus" scoped>

</style>