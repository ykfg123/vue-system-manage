<template>
    <div class="student-list">
        <el-card>
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
                <el-form-item>
                    <el-button type="primary" @click="addStudent">新增</el-button>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="formInline.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="formInline.number" placeholder="学号"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="formInline.region" placeholder="班级">
                    <el-option label="框架9班" value="9"></el-option>
                    <el-option label="框架10班" value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                <el-table-column align="center" prop="number" label="学号"></el-table-column>
                <el-table-column align="center" prop="age" label="年龄"></el-table-column>
                <el-table-column align="center" prop="sex_text" label="性别"></el-table-column>
                <el-table-column align="center" prop="class" label="班级"></el-table-column>
                <el-table-column align="center" prop="state" label="状态"></el-table-column>
                <el-table-column align="center" prop="address" label="地址"></el-table-column>
                <el-table-column align="center" prop="phone" label="联系方式"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
                        <el-button type="danger" size="mini" icon="el-icon-delete" @click="del"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- Table -->
            <el-dialog :title="state?'修改学生信息':'新增学生信息'" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学号" :label-width="formLabelWidth">
                    <el-input v-model="form.number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-radio v-model="form.sex" label="1">男</el-radio>
                    <el-radio v-model="form.sex" label="2">女</el-radio>
                </el-form-item>
                <el-form-item label="班级" :label-width="formLabelWidth">
                    <el-select v-model="form.class" placeholder="请选择班级">
                        <el-option label="一班" value="1"></el-option>
                        <el-option label="二班" value="2"></el-option>
                        <el-option label="三班" value="3"></el-option>
                        <el-option label="四班" value="4"></el-option>
                        <el-option label="五班" value="5"></el-option>
                        <el-option label="六班" value="6"></el-option>
                        <el-option label="七班" value="7"></el-option>
                        <el-option label="八班" value="8"></el-option>
                        <el-option label="九班" value="9"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-input v-model="form.state" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </div>
            </el-dialog>
            <Page></Page>
        </el-card>
    </div>
</template>

<script>
import Page from "../common/Pageing"

export default {
    components:{
        Page,
    },
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            },
            tableData: [],
            dialogFormVisible: false,
            form: {},
            formLabelWidth: '80px',
            state:false
        }
    },
    created(){
        this.getDataList()
    },
    methods:{
        sure() {
            console.log(this.form)
            if(this.state) {
                // 调用修改接口
                this.service
                .put('http://rap2api.taobao.org/app/mock/281225/studentlist', this.form)
                .then(res => {
                    // if(res.data.status==='200'){
                    //     this.$message({
                    //         message:'修改成功',
                    //         type:'success',
                    //         duration:1000
                    //     })
                    //     localStorage.setItem('token',res.data.data.token)
                    //     localStorage.setItem('token',res.data.data.username)
                    // }else{
                    //     console.log(res.data.msg)
                    // }
                    // console.log(res.data.data)
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
                // 调用新增接口
                // this.service.post('接口地址', this.form)
                // .then(res => {

                // })
                // .catch(err => {
                //   console.log(err)
                // })
            }
            this.dialogFormVisible = false
        },
        addStudent(){
            this.state=false
            this.form={
                sex:'1'
            }
            this.dialogFormVisible = true
        },
        updateInfo(row){
            this.state=true
            this.form={...row}
            this.dialogFormVisible = true
            console.log(row)
        },
        del(){
            this.$alert('您确定要删除吗？', '删除提示', {
                confirmButtonText: '确定',
                callback: action => {
                    //删除对应接口
                }
            })
        },
        onSubmit() {
            console.log('submit!');
        },
        getDataList(){
            this.service
            .get("studentlist",{page:1,size:10})
            .then(res=>{
                if(res.data.status==="200"){
                    res.data.data.forEach(item =>{
                        item.sex==="1"?item.sex_text="男":item.sex_text="女"
                    })
                    this.tableData=[...res.data.data]
                }
                // console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style>
.student-list{
    margin:20px 0;
}
.el-form{
    text-align: left;
}
.el-select{
    width: 100%;
}
</style>
