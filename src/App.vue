<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="ewew">demo展示首页</div>
    <div id="echartdiv" :style="{width: '500px', height: '500px'}"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import echarts from 'echarts'
Vue.use(VueRouter)
Vue.prototype.$echarts = echarts

export default {
  name: 'App',
  components: {
    // HelloWorld
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#echartdiv {
  margin: 0 auto;
}
</style>
