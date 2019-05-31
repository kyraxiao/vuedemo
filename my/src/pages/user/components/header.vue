<template>
	<div class="UserHeader">
		<div>
			<div class="left">
				<i class="iconfont icon-guonei"></i>
			</div>
			<div class="right">
				<i class="iconfont icon-saoyisao"></i>
			</div>
		</div>
		<div class="xiaoxi">
			<i class="iconfont icon-guonei"></i>
		</div>
	</div>
</template>
<script >
export default{
	name:'UserHeader',
	data(){
		return{

		}
	}

}
</script>
<style scoped>
.UserHeader{
	display:flex;
	justify-content: space-between;
	width:100%;
    line-height:2.6789rem;
    height:2.6789rem;
    background:#00bcd4;
    color:#fff;
    position:fixed;
    top:0;
    left:0;
}
.left{
	float: left;
	margin:0px 20px 0px 10px;
}
.right{
	float:right;
}
.xiaoxi i{
	margin-right: 10px;
}
</style>