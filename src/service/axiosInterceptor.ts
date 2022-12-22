import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// import { local } from '@/utils'
// import { message } from 'ant-design-vue'

// 超时时间
axios.defaults.timeout = 15 * 1000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// 地址
// axios.defaults.baseURL = process.env.VUE_APP_HOST
axios.defaults.baseURL = 'https://www.fastmock.site/mock/c08d9fdabbd1a035d99eadb674f60247/perfume-m'

const whiteList: any = [
  `/login`
]

// HTTP request - 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {

  // Token
  // const token: string = local.get('access_token')
  // if (token && whiteList.indexOf(config.url) === -1) {
  //   const authorization = config.headers['Authorization']
  //   if (authorization === undefined || authorization.indexOf('Basic') === -1) {
  //     config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带token
  //   }
  // }
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// HTTP response - 响应拦截
axios.interceptors.response.use((response: AxiosResponse) => {
  // 请求失败，弹出提示信息
  // if (data.config.url === '/api/auth/v1/authentication/deleteToken') return data
  // if (!isSuccess(data.data)) {
  //   const { code, msg } = data.data
  //   const errMsg = errorCode[String(code)] || msg || errorCode['default']
  //   Message({ message: errMsg, type: 'error' })
  // }

  return response
}, (error: any) => {

  if (error.response) {
    const msg = error.response.data.message
    // message.error(msg, 4)
  }

//   if (error.response) {
//     const originalRequest = error.config
//     const currentRefreshToken = getRefreshToken()

//     // 接口返回401并且已经重试过，自动刷新token
//     if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry && isNotEmpty(currentRefreshToken)) {
//       // 退出请求
//       // if (originalRequest.url.indexOf('removeToken') !== -1) {
//       if (originalRequest.url.indexOf('deleteToken') !== -1) {
//         return
//       }
//       return refreshToken().then(response => {
//         // 保存新的token
//         setToken(response.data.access_token)
//         store.commit('SET_ACCESS_TOKEN', response.data.access_token)
//         // 带上新的token
//         originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access_token
//         // 重新请求
//         return axios(originalRequest)
//       }).catch(() => {
//         // 刷新失败，执行退出
//         store.dispatch('LogOut').then(() => location.reload())
//       })
//     } else if (error.response.status === 423) {
//       Message({ message: '演示环境不能操作', type: 'warning' })
//     } else if (error.response.status === 404) {
//       // 跳转到404页面
//       router.replace({
//         path: '404',
//         query: { redirect: router.currentRoute.fullPath }
//       })
//     } else if (error.response.status === 500) {
//       // 500提示页面
//       router.replace({
//         path: '500',
//         query: { redirect: router.currentRoute.fullPath }
//       })
//     } else {
//       // 其它错误则弹出提示
//       const { code, msg } = error.response.data
//       const errMsg = errorCode[String(code)] || msg || errorCode['default']
//       Message({ message: errMsg, type: 'error' })
//     }
//   }
  return Promise.reject(new Error(error))
})

export default axios
