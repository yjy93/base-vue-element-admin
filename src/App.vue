<template>
    <div id="app">
        <h1>Hello, base-vue-element-admin!</h1>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                tableData: { // 表格数据
                    content: [{id: 1, name: 'Gene'}]
                },
                columns: [], // 表格列
                extensibleBtn: {
                    add: 'add'
                }
            }
        },
        methods: {
            initColumns() {
                this.columns = [
                    {prop: "id", label: '数据列', minWidth: 100},
                    {prop: "id", label: '我的数据列', minWidth: 100},
                    {prop: "id", label: '我是据列', minWidth: 100},
                    {prop: "id", label: '我是数据列', minWidth: 100},
                    {prop: "id", label: '我是列', minWidth: 100},
                    {prop: "id", label: '我是表据列', minWidth: 100},
                    {prop: "id", label: '我是表数据列', minWidth: 100},
                ]
            }
        },
        mounted() {
            // console.log('this =---->>', this.$store.state.name);
            // console.log(`%c $i18n`, "color:red", this.$i18n);
            // console.log(`%c $i18n`, "color:red", this.$t);
            this.initColumns()
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
