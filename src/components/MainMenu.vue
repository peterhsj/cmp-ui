<template>
  <el-row class="tac">
    <el-col :span="24">
      <!-- <el-menu
      class="el-menu-vertical-demo"
      router
      unique-opened
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title" v-if="item.submenu == true">
              <i class="el-icon-location"></i>
              <span v-text="item.name"></span>
            </template>
            <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
              <el-menu-item :index="sub.componentName">
                <router-link :to="'/' + sub.componentName" v-text="sub.name"></router-link>
              </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
      </el-menu-->
      <el-scrollbar wrap-class="list" view-style="font-weight: bold;" view-class="view-box" :native="false">
      <el-menu
        default-active="DashBoard"
        class="el-menu-vertical-demo"
      >
        <router-link :to="{path:'/DashBoard'}" tag="span">
          <el-menu-item index="DashBoard">
            <i class="el-icon-menu"></i>
            <span slot="title">首頁</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>授權管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">授權微信公眾號</template>
            <el-menu-item index="2-1-1">關注自動回覆</el-menu-item>
            <el-menu-item index="2-1-2">關鍵詞回覆</el-menu-item>
            <el-menu-item index="2-1-3">自定義菜單</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="2-2">
            <i class="el-icon-setting"></i>
            <span slot="title">授權小程序</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>營銷管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">用戶增長</template>
            <el-menu-item index="3-1-1">創建活動</el-menu-item>
            <el-menu-item index="3-1-2">我的活動</el-menu-item>
            <el-menu-item index="3-1-3">維護活動</el-menu-item>
            <el-menu-item index="3-1-4">活動渠道二維碼</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">互動遊戲</template>
            <el-menu-item index="3-2-1">創建活動</el-menu-item>
            <el-menu-item index="3-2-2">我的活動</el-menu-item>
            <el-menu-item index="3-2-3">維護活動</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>帳戶管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1-1">基本資料</el-menu-item>
            <el-menu-item index="3-1-2">安全設置</el-menu-item>
            <el-menu-item index="3-1-3">通知管理</el-menu-item>
            <el-menu-item index="3-1-4">稷風大使</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script>
// import menu from '@/config/menu-config'
export default {
  data() {
    return {
      // menu: menu
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   // console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   // console.log(key, keyPath);
    // }
  }
};
</script>

<style scoped>
.over-hide {
  overflow: hidden;
}
</style>
