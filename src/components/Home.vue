<!DOCTYPE html>
<template>
  <html>

  <head>
    <meta charset="UTF-8">
    <title>CMP</title>

  </head>

  <body>
  <el-container>
    <el-header>     
      <template>
        <el-row>
          <el-col :span="12">
            <div class="grid-content" label="left">
              Logo
            </div>
          </el-col>
          <el-col :span="12">
            <!-- <font-awesome-icon :icon="['fas', 'coffee'] /> -->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">登入</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">註冊</a></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </template>
    </el-header>
    <el-main>
      <template>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
      Main

    </el-main>
    <el-footer>      
      <template>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <p>Copyright CMP</p>
              <p>
                <a href="#">關於我們</a>
                <a href="#">法律聲明及隱私受權</a>
                <a href="#">聯繫我們</a>
                <a href="#">加入稷風</a>
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">              
              <p>
                <a href="#">CRP</a>
                <a href="#">供應商平台</a>
                <a href="#">稷風官網</a>
              </p>
            </div>
          </el-col>
        </el-row>
      </template>      
    </el-footer>
  </el-container>

    <div>
      <p><a href="#" @click.prevent="Home">HOME</a></p>
    </div>
  </body>

  </html>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
  library.add(faCoffee)
  import router from '../router/router'
  export default {
    name: 'Main',
    data: function () {
      return {
        url: ''
      }
    },
    methods: {
      Home: function () {
        router.push('/Dashboard')
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>