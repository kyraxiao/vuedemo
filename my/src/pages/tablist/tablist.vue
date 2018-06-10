<template>
    <div>
        <div class="heas">
           <div v-for="(item,index) in list" :key="item.id" @click="handle(index)" :class="(currenIndex==index)?'active':'ps'">
              <span>{{item.des}}</span>
           </div> 
        </div>
        <alls v-show="currenIndex==0"></alls>
        <unfinished v-show="currenIndex==1"></unfinished>
        <finished v-show="currenIndex==2"></finished>
        <backgo v-show="currenIndex==3"></backgo>
    </div>
</template>

<script>
import Alls from "./compents/alls"
import Unfinished from "./compents/unfinished"
import finished from "./compents/finished"
import Backgo from "./compents/backgo" 
export default {
   name:"Tab",
   components:{
     Alls,
     Unfinished,
     finished,
     Backgo
   },
   data () {
      return {
          currenIndex:0,
          isShow:false,
          list:[
              {
                  des:'全部',
                  id:'001'
              },{
                  des:'未完成',
                  id:'002'
              },{
                  des:'已完成',
                  id:'003'
              },{
                  des:'退回',
                  id:'004'
              }
          ]
      }
   },
   methods:{
      handle:function(index){
         console.log(index)
         this.currenIndex=index

      }
   }  
}
</script>

<style lang="stylus" scoped>
  .heas
    width:100%
    height:60px
    background:#eeee
    display:flex
    justify-content:center
    align-item:space-between
    .ps
      width:25%
      line-height:60px
      text-align:center
      background:#eee
    .active
      width:25%
      line-height:60px
      text-align:center
      color:#fff
      background:#000
</style>


