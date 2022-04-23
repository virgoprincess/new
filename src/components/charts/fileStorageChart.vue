<template>
  <canvas id="fileStorage"></canvas>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name:'fileStorageChart',
  mounted(){
    const datapoints = [250,29]
    const data = {
      labels: ['Active', 'Inactive'],
      datasets: [{
          data: datapoints,
          backgroundColor: ['#CE324D','#9C9C9C'],
          cutout:'90%'
      }]
    };

    const counter = {
      id:'counter',
      beforeDraw( chart,args,options ){
        const { ctx , chartArea:{ top,right,bottom,left,width, height } } = chart;
        ctx.save();
        ctx.fillStyle = options.fontColor;
        ctx.font = options.fontSize1 + 'px ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillText('21',width/2,top+(height/2)-10)
        ctx.restore();
        ctx.fillStyle = options.fontColor;
        ctx.font = options.fontSize2 + 'px ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillText('of 30 GB used',width/2,top+(height/2)+45)
      }
    };

    const config = {
      type:'doughnut',
      data,
      options:{
        responsive:true,
        plugins:{
          tooltip:{
            enabled:false,
          }, 
          legend:{
            display:false
          },
          counter:{
            fontColor:'#2A91DE',
            fontSize1:'100',
            fontSize2:'35',
            fontFamily:'sans-serif',
          }
        }
      }, 
      plugins:[counter]
    }
    const myChart = new Chart(
      document.getElementById('fileStorage'),
      config);
    myChart;
  }
}
</script> 