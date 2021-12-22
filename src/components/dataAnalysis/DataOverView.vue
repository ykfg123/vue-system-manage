<template>
	<div class="data-over-view">
		<el-card>
			<div id="main1">
				数据分析1
			</div>
		</el-card>
		<el-card>
			<div id="main2">
				数据分析2
			</div>
		</el-card>
	</div>
</template>
<script>

export default {
	data() {
		return {};
	},
	mounted(){
		var echarts = require('echarts');
		var myChart1 =echarts.init(document.getElementById('main1'));
		myChart1.setOption({
			title:{
				text:'衣服品类'
			},
			tooltip:{},
			xAxis:{
				data:['衬衫','羊毛衫','雪纺衫',"裤子",'高跟鞋','袜子']
			},
			yAxis:{},
			series:[{
				name:'销量',
				type:'bar',
				data:[5,20,36,10,10,20]
			}]
		});
		var myChart2 =echarts.init(document.getElementById('main2'));
		myChart2.setOption({
			color:["skyblue"],
			textStyle:{
				color:"#000",
			},
			title: {
				text: '世界人口总量',
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				// boundaryGap: [0, 0.01],
				min:0,
				max:100,
				interval:25,
				axisTick:{
					show:false
				},
				axisLine:{
					lineStyle:{
						color:'transparent'
					}
				}
			},
			yAxis: {
				type: 'category',
				data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(亿)'],
				axisTick:{
					show:false
				},
				axisLine:{
					lineStyle:{
						color:'#fff'
					}
				},
				textStyle:{
					color:'#000'
				}
			},
			series: [
				{
					name: '2020年',
					type: 'bar',
					data: [19, 23, 31, 121, 134, 68],
					barWidth:'25px',
					itemStyle:{
						normal:{
							barBorderRadius:[0,10,10,0]
						}
					}
				}
			]
		})
	}
};
</script>

<style scoped>
.data-over-view {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
}
.el-card {
	width: 50%;
} 
#main1,
#main2 {
	height: 500px;
}
</style>