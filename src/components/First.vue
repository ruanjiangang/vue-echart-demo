<template>
  <div class="hello">
    <!-- <h1>表一在这里</h1> -->
    <div id="echartdiv" :style="{width: '500px', height: '500px'}"></div>
  </div>
</template>

<script>

export default {
  name: 'First',
  props: {
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('echartdiv'))
      // myChart.setOption({
      //     title: {
      //         text: 'ECharts demo'
      //     },
      //     tooltip: {},
      //     xAxis: {
      //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //     },
      //     yAxis: {},
      //     series: [{
      //         name: '销量',
      //         type: 'bar',
      //         data: [5, 20, 36, 10, 10, 20]
      //     }]
      // })
      myChart.setOption({
          title: {
            text: 'ECharts Demo',
            x:'center',
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  data:[
                      {value:235, name:'视频广告'},
                      {value:274, name:'联盟广告'},
                      {value:310, name:'邮件营销'},
                      {value:335, name:'直接访问'},
                      {value:400, name:'搜索引擎'}
                  ]
              }
          ]
      })
    }
  },
  created: () =>{
    console.log('created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
