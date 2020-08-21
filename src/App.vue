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
            // axios.post('/user/getUser', {
            //     name: 'Gene'
            // }).then((res) => {
            //     console.log(' user 请求回来了 --->>>', res);
            // })

            this.$api.user.getUser().then((res) => {
                console.log(`%c app 请求`, "color:red", res);
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
