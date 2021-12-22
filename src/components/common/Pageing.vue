<template>
    <div class="pageing">
        <el-pagination
        background
        layout="prev, pager, next,jumper"
        :total="50">
        </el-pagination>
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    }
}
</script>


<style>
.pageing{
    margin-top:20px;
}

</style>
