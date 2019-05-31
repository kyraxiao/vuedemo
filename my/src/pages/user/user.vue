<template>
    <div class="user">
      <user-header></user-header>
      <user-content></user-content>
      <home-footer></home-footer>
    </div>
</template>

<script>
import UserHeader from './components/header'
import UserContent from './components/content'
import HomeFooter from '../home/components/footer'
	export default{
		name:'User',
    components:{
      UserHeader,
      UserContent,
      HomeFooter,
    }
	
	}
</script>

<style lang="stylus" scoped>
  
    
</style>