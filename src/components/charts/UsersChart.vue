<template>
  <canvas id="usersChart"></canvas>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name:'UsersChart',
  mounted(){
    const datapoints = [10,20,70]
    const data = {
      labels: ['Admin', 'Owner', 'User',],
      datasets: [{
          label: 'Number of users',
          data: datapoints,
          backgroundColor: ['#8C64D1','#81C28B','#2A91DE'],
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
        ctx.fillText('209',width/2,top+(height/2)-10)
        ctx.restore();
        ctx.fillStyle = options.fontColor;
        ctx.font = options.fontSize2 + 'px ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillText('Users',width/2,top+(height/2)+45)
      }
    };

    const config = {
      type:'doughnut',
      data,
      options:{
        responsive:true,
        maintainAspectRation:false,
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
      document.getElementById('usersChart'),
      config);
    myChart;
  }
}
</script> 