<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/first">表一</router-link>
      <router-link to="/second">表二</router-link>
      <router-link to="/third">表三</router-link>
    </p>
    <router-view class="showDiv"></router-view>
    <!-- <First msg="Welcome to Your Vue.js App"/>
    <Second msg="Welcome to Your Vue.js App"/>
    <Third msg="Welcome to Your Vue.js App"/> -->
    <!-- <div id="echartdiv" :style="{width: '500px', height: '500px'}"></div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

export default {
  name: 'App',
  components: {
  },
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
p a {
  margin: 0 20px;
}
.showDiv {
  margin-top: 50px;
}
</style>
