<template>
  <div class="home">
    <el-container>
        <el-header>
          <div class="header-left">
            <span v-show="!isCollapse">Booking system management background</span>
          </div>
          <div>
            {{username}}
            <span class="loginOut" @click="loginOut">Log out</span>
          </div>
        </el-header>

        <el-container class="main">
          <Menu></Menu>
          <el-main>
            <el-card>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home page</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
                  <strong>{{item.name}}</strong>
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-card>
            <router-view></router-view>
            <Footer></Footer>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './common/Menu'
import Footer from './common/Footer'
export default {
  name: 'Home',
  components: {
    Menu,
    Footer
  },
  data () {
    return {
      isCollapse: false,
      username: ''
    }
  },
  created () {
    this.username = localStorage.getItem('username')
  },
  methods: {
    loginOut () {
      this.$alert('您确定要退出吗？', '退出提示', {
        confirmButtonText: '确定',
        callback: action => {
          // localStorage.removeItem('token')
          localStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style>
.main{
  width: 100%;
  position: absolute;
  top:60px;
  bottom:0;
  overflow: hidden;
}
  .el-header {
    background-color: #00b8ff;
    color: #fff;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
   .el-header .header-left .coll{
     cursor: pointer;
   }
  .main .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  .loginOut{
    cursor: pointer;
  }
</style>
