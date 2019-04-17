<template>
    <el-container class="mainPage">
        <home-header></home-header>
        <el-container class="containPage">
            <el-aside width="200px">
                <main-menu></main-menu>
            </el-aside>
            <el-container class="contain">
                <router-view></router-view>
                <home-footer></home-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import HomeHeader from "@/components/Header";
    import MainMenu from "@/components/MainMenu.vue";
    import HomeFooter from "@/components/Footer";

    export default {
        name: "Home",
        components: {
            HomeHeader,
            MainMenu,
            HomeFooter
        }
    }
</script>

<style lang="scss" scoped>
  

</style>
