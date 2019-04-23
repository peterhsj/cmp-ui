<template>
  <div class="headerWrapper">
    <el-header height="80px">
      <el-container>
        <h1>
          <a href="#" @click.prevent="home">
            <img
              alt="element-logo"
              class="nav-logo"
              src="../assets/images/cmp_logo_large.svg"
            >
            <img
              alt="element-logo"
              class="nav-logo-small"
              src="../assets/images/cmp_logo.svg"
            >
          </a>
        </h1>
        <div class="nav-gap"></div>
        <span>註冊</span>
        <!-- <ul class="nav">
          <li class="nav-item" index="1">
            <el-button size="small">登入</el-button>
          </li>
          <li class="nav-item" index="2">
            <el-button size="small" type="primary">註冊</el-button>
          </li>
          <li class="nav-item" index="3">
            <template>
              <el-dropdown
                class="langSelect"
                trigger="click"
                size="small"
                @command="changeLang"
              >
                <span class="el-dropdown-link">
                  {{ currentLang }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="item in options"
                    :key="item.value"
                    :command="item.label"
                  >{{ item.label }}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </li>
        </ul> -->
      </el-container>
    </el-header>
  </div>
</template>

<script>
import router from "../router/router";
export default {
  name: "Register",

  data: function() {
    return {

    };
  },
  methods: {
    home: function() {
      router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.headerWrapper {  
  display: block;
  height: 80px;
  width: 100%;
  .nav-gap {
    width: 1px;
    height: 80px;
    padding: 0 20px;
    &:before {
        content: "";
        position: absolute;
        top: 33px;
        width: 1px;
        height: 16px;
        background: #c1c1c1;
    }
  }
  .el-header {
    .el-container {
        // box-shadow: 0 2px 6px rgba(0,0,0,0.1);        
        border-bottom: 1px solid #ededed;
        height: 100%;
        margin: 0 auto;
        padding: 0;
        width: 1140px;
        @media (max-width: 1140px) {
            width: 100%;
        }
        h1 {
            a {
            display: block;
            img {
                vertical-align: middle;
                &.nav-logo {
                    display: inline-block;
                    width: 190px;
                    @media (max-width: 850px) {
                        display: none;
                    }
                }
                &.nav-logo-small {
                    display: none;
                    @media (max-width: 850px) {
                        display: inline-block;                        
                        width: 45px;
                    }
                }
            }
        }
      }
    //   .nav {
    //     float: right;
    //     height: 100%;
    //     line-height: 80px;
    //     background: transparent;
    //     .nav-item {
    //       float: left;
    //       padding: 0 5px;
    //       .el-button--small {
    //         font-size: 13px;
    //       }
    //     }
    //   }
    }

    // .langSelect {
    //   font-size: 13px;
    //   height: unset;
    //   line-height: initial;
    //   .el-dropdown-selfdefine {
    //     border: 1px solid #DCDFE6;
    //     border-radius: 3px;
    //     cursor: pointer;
    //     display: block;
    //     height: 32px;
    //     line-height: 32px;
    //     padding: 0 15px;
    //     width: 70px;
    //   }
    // }
  }
}
</style>
