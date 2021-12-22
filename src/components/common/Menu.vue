<template>
    <div class="menu">
        <el-aside :width="isCollapse?'65px':'200px'">
            <el-menu 
              router
              :default-active="activePath" 
              class="el-menu-vertical-demo" 
              @open="handleOpen" 
              @close="handleClose" 
              :collapse="isCollapse">
              <template v-for="(item,index) in menus">
                  <el-submenu :index="item.path" :key="index" v-if="!item.hidden">
                    <template slot="title">
                      <i :class="item.iconClass"></i>
                      <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item-group v-for="(child,index) in item.children" :key="index">
                      <el-menu-item :index="child.path">
                        <i :class="child.iconClass"></i>
                        {{child.name}}
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
              </template>
            </el-menu>
          </el-aside>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isCollapse: false,
            menus:[],
            activePath:''
        }
    },
    created(){
        this.menus=[...this.$router.options.routes]
        this.activePath=this.menus[2].children[1].path
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.menu .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
 .menu .el-aside .el-menu{
    height: 100%;
    background-color: #fff;
  }

</style>