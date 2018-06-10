<template>
  <ul class="list">
    <li class="item" v-for="item of CityAlphabet" :key="item.id" @click="handleLetterClick">{{item.tex}}</li>
  </ul>
</template>

<script>
	export default{
		name:'Alphabet',
		props:{
			CityAlphabet:Array
		},
		methods:{
			handleLetterClick (e){
				console.log(e.target.innerText)
				this.$emit('change','e.target.innerText')
			}
		}
	}
</script>

<style lang="stylus" scoped>
 .list
   position:absolute
   top:5.2rem
   right:0
   bottom:0
   width:1.5rem
   display:flex
   flex-direction:column
   justify-content:center
   .item
     line-height:1.3rem
     text-align:center
     color:#00bcd4
</style>