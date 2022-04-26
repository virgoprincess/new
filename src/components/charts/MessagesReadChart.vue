<template>
  <canvas id="messages-read"></canvas>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name:'MessagesReadChart',
  mounted(){
    const datapoints = [2,4,6,8,10,8,2,6,10,]
    const data = {
      labels: [['8','AM'],'9','10','11',['12','PM'],'1','2','3','4','5'],
      datasets: [{
          data: datapoints,
          backgroundColor: ['#2A91DE'],
          categoryPercentage:.4,
          barPercentage:.5,
      },
      {
          data: [2,2,7,8,4,10,8,2,4,6],
          backgroundColor: ['#D8D8D8'],
          categoryPercentage:.4,
          barPercentage:.5,
      }
      ]
    };

    const counter = {
      id:'counter',
     /*  beforeDraw( chart,args,options ){
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
      } */
    };

    const config = {
      type:'bar',
      data,
      options:{
        responsive:true,
        scales:{
          y:{
            beginAtZero:true,
            grid:{
              display:false,
            }
          },
          x:{
            grid:{
              display:false
            }
          }
        },
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
      document.getElementById('messages-read'),
      config);
    myChart;
  }
}
</script> 