<template>
    <el-container class="mainPage">
        <home-header></home-header>
        <el-container class="containPage">
            <el-aside width="200px">
                <home-aside></home-aside>
            </el-aside>
            <el-container class="contain">
                <!-- <home-main></home-main> -->
                <router-view></router-view>
                <home-footer></home-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import HomeHeader from "@/components/Header";
    import HomeAside from "@/components/Aside";
    import HomeFooter from "@/components/Footer";

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeAside,
            HomeFooter
        }
    }
</script>

<style lang="scss" scoped>
  

</style>
