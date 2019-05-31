<template>
    <div class="footer">
      <div @click="Shouye()">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div @click="Find()">
        <i class="iconfont icon-shouye"></i>
        <span>发现</span>
      </div>
      <div @click="Shop()">
        <i class="iconfont icon-shouye"></i>
        <span>订单</span>
      </div> 
      <div @click="User()">
        <i class="iconfont icon-shouye"></i>
        <span>我的</span>
      </div>   
    </div>
</template>

<script>
	export default{
		name:'HomeFooter',
	 data(){
      return{

      }
   },
   methods:{
    Shouye(){
      this.$router.push({path:"/"})
    },
    Find(){
      this.$router.push({path:"/find"})
    },
    Shop(){
      this.$router.push({path:"/shop"})
    },
    User(){
      this.$router.push({path:"/user"})
    }
   }
	}
</script>

<style lang="stylus" scoped>
  .footer
    display:flex
    justify-content:space-between
    width:100%
    line-height:2.6789rem
    height:2.6789rem
    background:#00bcd4
    color:#fff
    position:fixed
    bottom:0
    left:0
  .footer div 
      width:25% 
      text-align:center
    
</style>