<template>
  <canvas id="activeUsers"></canvas>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name:'ActiveUsersChart',
  mounted(){
    const datapoints = [281,29]
    const data = {
      labels: ['Active', 'Inactive'],
      datasets: [{
          data: datapoints,
          backgroundColor: ['#81C28B','#CE324D'],
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
        ctx.fillText('281',width/2,top+(height/2)-10)
        ctx.restore();
        ctx.fillStyle = options.fontColor;
        ctx.font = options.fontSize2 + 'px ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillText('Active',width/2,top+(height/2)+45)
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
            position:'bottom',
            labels:{
              boxWidth:15,
              boxHeight:15,
              font:{
                size:25,
                weight:'bold',
              }
            }
          },
          counter:{
            fontColor:'#81C28B',
            fontSize1:'100',
            fontSize2:'35',
            fontFamily:'sans-serif',
          }
        }
      }, 
      plugins:[counter]
    }
    const myChart = new Chart(
      document.getElementById('activeUsers'),
      config);
    myChart;
  }
}
</script> 