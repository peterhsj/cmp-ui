<!DOCTYPE html>
<template>
<html>
  <head>
    <meta charset="UTF-8">
    <title>CMP</title>
  </head>

  <body>    
    <home-header></home-header>
    <el-container>
      <el-main>
        <template>
          <div class="banner-container">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
      </el-main>
      <el-footer height="auto">
        <div class="footer-container">
          <div class="footer-about">
            <div class="footerItem contact">
              <h3>联系我们</h3>
              <p>咨询電話：0571 - 8685 7988</p>
              <p>周一到周日 9:00 ~ 18:00</p>
            </div>
            <div class="footerItem about">
              <h3>关于我们</h3>
              <p>
                <a href="#" target="_blank">中国稷風</a>
              </p>
              <p>
                <a href="#">公司文化</a>
              </p>
              <p>
                <a href="#">加入稷風</a>
              </p>
              <div class="qr-code">
                <div class="cmpCode"></div>
              </div>
            </div>
            <div class="footerItem product">
              <h3>产品与服务</h3>
              <p>
                <a href="#">稷風官網</a>
                <a href="#">CRP</a>
              </p>
              <p>
                <a href="#">供應商平台</a>
              </p>
            </div>
            <div class="footerItem news">
              <h3>公司动态</h3>
              <p v-for="(newsItem, index) in news" :key="index">
                <a href="#" @click.prevent="newsLink(newsItem.url)">{{ newsItem.author }}｜{{ newsItem.title }}</a>
              </p>              
            </div>
          </div>
          <div class="commonCopy">
            <p>
              <a href="#">法律聲明及隱私權</a>
              <span style="padding: 0 8px">|</span>
              <span class="copyright">© 2019 Chinook.com</span>
            </p>
            
          </div>
        </div>
      </el-footer>
    </el-container>

    <div>
    </div>
  </body>
</html>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee);
import HomeHeader from "@/components/Header";
import router from "../router/router";
export default {
  name: "Home",
  components: {
    HomeHeader
    // HomeFooter
  },
  data: function() {
    return {
      news: [
        {
          url: '/home',
          author: '公告',
          title: '稷風一贯遵循法律合法经营'
        },
        {
          url: '/home',
          author: '钛媒体',
          title: '稷風完成新一轮近10亿融资，用于推进门店互联网化'
        },
        {
          url: '/home',
          author: '亿邦',
          title: '稷風小程序接入“好物圈” 为商家增加曝光'
        },
        {
          url: '/home',
          author: '亿邦',
          title: '引入5万开发者 有稷風帮商家实现“店铺定制组装'
        },
        {
          url: '/home',
          author: '红商',
          title: '互联网品牌怎么玩稷風？从舒淇的“KiKi面”说起'
        }
      ]
    };
  },
  methods: {
    newsLink: function(url) {
      router.push(url);
    },
    changeLang(command) {
      this.currentLang = command;
    }
  }
};
</script>

<style lang="scss">
.banner-container {
  height: 420px;
  width: 100%;
  .el-carousel__container {
    height: 420px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 420px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1) inset;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1) inset;
  }
}

.footer-container {
  margin: 0 auto;
  overflow: hidden;
  width: 1100px;
  .footer-about {
    overflow: hidden;
    padding-top: 70px;
    zoom: 1;
    .footerItem {
      float: left;
      margin-right: 60px;
      &.news {
        float:right;
      }
      h3 {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 31px;
      }
      p {
        font-size: 14px;
        // color: #E5E5E5;
        line-height: 20px;
        padding-bottom: 20px;
      }
    }
    a {
      text-decoration: none;
      color: #666666;
      letter-spacing: 0.58px;
      &:hover {
        color: #000000;
      }
    }
    .product a {
      display: inline-block;
      width: 95px;
    }
  }
  .commonCopy {
    clear: both;
    font-size: 12px;
    margin: 50px auto 0;
    text-align: center;
    border-top: 1px solid rgba(229, 229, 229, 0.8);
    padding: 30px 0;
    color: #b6b6b6;
    a {
      &:hover {
        color: #333333;
      }
    }
  }
  .cmpCode {
    width: 70px;
    height: 70px;
    background-size: cover;
    background-position: center;
    background: #666666 url(../assets/images/qr.png) no-repeat;
    border: 1px solid #666666;
  }
  .copyright {
    margin-top: 40px;
  }
}
</style>