import axios from 'axios'

const service = axios.create({
    //baseURL会自动加在接口地址上
    baseURL: 'http://rap2api.taobao.org/app/mock/281225/',
    //指定请求超时的毫秒数,请求花费的时间超过设置时间则会被中断
    timeout: 3000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true, 
    header:{
        "Content-type":"application/json;charset=utf-8"
    }
  })

// 添加请求拦截器
service.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        const token=localStorage.getItem('token')
        if(token){
            config.headers.token=token
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

  export default service