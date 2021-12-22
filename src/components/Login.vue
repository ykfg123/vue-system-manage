<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">教务后台管理系统</span>
            </div>
            <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="form-box">
                <el-form-item label="用户名" prop="staffNo">
                    <el-input v-model="form.staffNo"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="staffPws">
                    <el-input type="staffPws" v-model="form.staffPws"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')" class="loginBtn">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import router from '../router/index.js'
import md5 from "js-md5"
export default {
    data(){
        return {
            form: {
                companyId: "1001",
        staffNo: "",
        staffPws: "",
            },
            rules:{
                staffNo:[
                    { required: true, message: 'Please input the user name', trigger: 'blur' },
                    { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                ],
                staffPws:[
                    { required: true, message: 'Please input the password', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      login(form) {//传用户名和密码给后端,验证用户名和密码是否正确
        this.$refs[form].validate((valid) => {
          if (valid) {
                        this.form.staffPws = md5(this.form.staffPws);

            this.service.post('login',this.form)
            .then((res)=> {
                if(res.data.status==='200'){
                   
                    this.$message({
                        message:'登陆成功',
                        type:'success',
                        duration:1000
                    })
                    this.$router.push("/home")
                    localStorage.setItem('token',res.data.data.token)
                    localStorage.setItem('token',res.data.data.username)
                }else{
                    console.log(res.data.msg)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
          } else {
            return false
          }
        });
        
      }
    }
}
</script>
<style>
.login{
    width: 100vw;
    height: 100vh;
    background: #00b8ff;
}
.box-card{
    width: 480px;
    position: absolute;
    top:200px;
    left:50%;
    transform: translateX(-50%);
}
.box-card>.title{
    font-size: 28px;
}
.form-box{
    width: 350px;
}
.loginBtn{
    width: 100%;
}
</style>
