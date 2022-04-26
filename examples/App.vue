<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Demo/>
        <Card img-src="java.jpg" summary="剑指Java面试-offer直通车 百度资深面试官授课"></Card>
      <br>
        <Card img-src="c++.jpg" summary="C++语言系统化精讲 重塑你的编程思想 打造坚实的开发基础">
            <template v-slot:footer>
                <div class="footer">
                    <div class="level">中级 ·528人报名</div>
                    <div class="price">￥299.00</div>
                </div>
            </template>
        </Card>
      <br>
        <Card img-src="javascript.jpg" :imgHeight="280" :width="500">
            本路线旨在帮助向快速掌握javascript应用的工程师,全方位多角度带你升级。
            <template v-slot:footer>
                <div class="javascript">
                    <div class="level">4步骤·6门课</div>
                    <div class="level">10965收藏</div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    export default {
        name: 'App',
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

    .footer {
        padding: 0 8px;
        font-size: 12px;
        text-align: left;
    }

    .level {
        color: #9199a1;
        margin-bottom: 8px;
    }

    .price {
        color: #f01414;
    }

    .javascript {
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        font-size: 12px;
    }
</style>
