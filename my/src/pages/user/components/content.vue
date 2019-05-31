<template>
	<div class="UserContent">
		<div class="userInfo">
			<div class="Infoleft">
				<div class="imgCircel">
					<img src=""/>
				</div>
				<router-link tag="div" to="">kary-shaw</router-link>
			</div>
			<div class="Inforight">
				<router-link tag="span" to="">个人主页</router-link>
				<i class="iconfont icon-jiantou"></i>
			</div>
		</div>
		<div class="Personaldata">
			<div v-for="(item,index) in awesome" :key="index">
				<p>{{item.num}}</p>
				<p>{{item.name}}</p>
			</div>
		</div>
		<div class="biu">
			<img src="" />
		</div>
		<div class="userIcon">
			<div class="firstIcon">
				<div>
					<i class="iconfont icon-xiangji"></i>
					<span>收藏夹</span>
				</div>
				<div>
					<i class="iconfont icon-xiangji">
					</i><span>优惠券</span>
				</div>
				<div>
					<i class="iconfont icon-xiangji">
					</i><span>钱包</span>
				</div>
			</div>
			<div class="secondIcon">
				<div>
					<i class="iconfont icon-xiangji"></i>
					<span>Biu伴</span>
				</div>
				<div>
					<i class="iconfont icon-xiangji"></i>
					<span>订单</span>
				</div>
				<div>
					<i class="iconfont icon-xiangji"></i>
					<span>问答</span>
				</div>
			</div>
		</div>
		<div class="biuBox">
			
		</div>
	</div>
</template>
<script >
export default{
	name:'UserContent',
	data(){
		return{
			awesome:[{
				id:0,
				name:"获取与收藏",
				num:0
			},{
				id:1,
				name:"粉丝",
				num:0
			},{
				id:2,
				name:"关注",
				num:0
			},{
				id:3,
				name:"国家",
				num:0
			}]
		}
	}

}
</script>
<style scoped>
.UserContent{
	background:#eee;
}
.userInfo{
	width:100%;
	margin-top:2.6789rem;
	height:3.5rem;
	line-height:3.5rem;
	background:#fff;
}
.Infoleft{
	float:left;
	display:flex;
	justify-content:space-around;
	align-items:center;
}
.Inforight{
	float:right;
}
.userInfo::after{
	content:"";
	overflow:hidden;
	clear:both;
	height:0;
}
.imgCircel{
	width:3rem;
	height:3rem;
	border-radius:2rem;
	background:red;
	margin:0px 10px;
}
.Personaldata{
	width:100%;
	height:3rem;
	display:flex;
	justify-content:space-around;
	background:#fff;
}
.Personaldata div p:first-child{
	font-weight:800;
	text-align:center;
}
.biu{
	width:100%;
	height:5rem;
	background:#fff;
}
.userIcon{
	background:#fff;
}
.firstIcon,.secondIcon{
	display:flex;
	justify-content:space-around;
	width:100%;
	height:2rem;
	margin:5px 0px
 }
.biuBox{
	height:10rem;
	width:100%;
	margin-top:5px;
	background:#fff;
}
</style>