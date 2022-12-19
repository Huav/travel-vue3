<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo" style="width: 200px;">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>后台管理</span>
          </template>
          <el-menu-item-group>
           
            <el-menu-item index="1-1" @click="getnewpage1">航班管理</el-menu-item>
            <el-menu-item index="1-2" @click="getnewpage2">飞机管理</el-menu-item>
            <el-menu-item index="1-3" @click="getnewpage3">多程折扣</el-menu-item>
            <el-menu-item index="1-4" @click="getnewpage4">节日折扣</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <el-main>
    
    <RouterView></RouterView>
    </el-main>
  </el-container>
</template>
  
<script>
export default {
  data() {
    return {}
  },

  methods: {
    getnewpage1() {
      //通过push进行跳转
      this.$router.push('/admin_main')
    },
    getnewpage2() {   
      
      //通过push进行跳转
      this.$router.push('/airplane')
    },
    getnewpage3() {
      //通过push进行跳转
      this.$router.push('/discounts')
    },
    getnewpage4() {
      //通过push进行跳转
      this.$router.push('/holiday_discounts')
    },
  }
}
</script>
<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
}

/* .el-container{
  background-color: aqua;
} */
.el-aside {

  text-align: center;

}

.el-main {

  text-align: center;

}
</style>