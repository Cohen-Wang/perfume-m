import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {
  // /**
  //  * 获取单个用户数据
  //  * @param id
  //  */
  // get: (id: any) => {
  //   const url = `/user/${id}`
  //   return getAction(url)
  // },

  /**
   * 注册用户
   * @param params
   */
  register: (params: any = {}) => {
    const url = `/auth/register`
    return postAction(url, params)
  },

  /**
   * 登录
   * @param params
   */
  login: (params: any = {}) => {
    const url = `/auth/login`
    return postAction(url, params)
  },

  /**
   * 短信验证码
   * @param params
   */
  sendCode: (params: any = {}) => {
    const url = `/auth/sendCode`
    return postAction(url, params)
  },

  /**
   * 验证码登录
   * @param params
   */
  loginByPhone: (params: any = {}) => {
    const url = `/auth/loginByPhone`
    return postAction(url, params)
  },

  /**
   * 忘记密码
   * @param params
   */
  forgetPassword: (params: { email: string }) => {
    const url = `/auth/forgetPassword`
    return postAction(url, params)
  },

  /**
   * 重置密码
   * @param resetToken
   * @param params
   */
  resetPassword: (resetToken: string, params: { password: string }) => {
    const url = `/auth/resetPassword/${resetToken}`
    return putAction(url, params)
  },

  /**
   * 判断【用户名】是否存在
   * @param params
   */
  isUsernameExit: (params: { username: string }) => {
    const url = `/auth/isUsernameExit`
    return postAction(url, params)
  },

  /**
   * 判断【手机】是否存在
   * @param params
   */
  isPhoneExit: (params: { phone: string }) => {
    const url = `/auth/isPhoneExit`
    return postAction(url, params)
  },

  /**
   * 判断【邮箱】是否存在
   * @param params
   */
  isEmailExit: (params: { email: string }) => {
    const url = `/auth/isEmailExit`
    return postAction(url, params)
  },

  /**
   * 获取我的信息
   */
  getMe: () => {
    const url = `/auth/me`
    return getAction(url)
  },

  /**
   * 修改我的信息
   */
  updateMe: (params: any) => {
    const url = `/auth/me`
    return putAction(url, params)
  },

  /**
   * 根据角色 获取动态路由
   */
  getDynamicRoutes: () => {
    const url = `/auth/routes`
    return getAction(url)
  }
  // /**
  //  * 修改用户
  //  * @param params
  //  */
  // update: (params: any = {}) => {
  //   const url = `/user/${params.id}`
  //   return putAction(url, params)
  // },
  //
  // /**
  //  * 删除用户
  //  * @param id
  //  */
  // delete: (id: any) => {
  //   const url = `/user/${id}`
  //   return deleteAction(url)
  // }
}
