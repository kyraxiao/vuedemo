<template>  
  <div class="me">  
    <div class="tabs">  
      <ul>  
        <!--<router-link :to="{name: 'Default'}" tag="li" exact>默认内容</router-link>-->  
        <router-link to="/me/t" tag="li" >我的收藏</router-link>  
        <router-link to="/me/h" tag="li">我的足迹</router-link>  
      </ul>  
    </div>  
    <div class="content">
       <router-view></router-view> <!-- 路由器的出口 -->
    </div>  
  </div>  
</template>  

<script>

export default {
    name:"Me",
    components:{
    }
}
</script>
<style lang="stylus" scoped>
.me
  .tabs
     & > ul, & > ul > li
        margin: 0;  
        padding: 0;  
        list-style: none;
     & > ul
        display: flex;  
        border-bottom: #cccccc solid 1px;
        & > li
           flex: 1;  
           text-align: center;  
           padding: 10px;
           &.router-link-active
                color: #D0021B;      
</style>
