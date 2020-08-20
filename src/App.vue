<template>
    <div id="app">
        <h1>Hello, base-vue-element-admin!</h1>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    components: {},
    mounted() {
      axios.get('/user/getUser').then((res) => {
        console.log(' 请求回来了 --->>>', res);
      })

      axios.get('/list/getList').then((res) => {
        console.log('list 0000', res);

      })
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
</style>
