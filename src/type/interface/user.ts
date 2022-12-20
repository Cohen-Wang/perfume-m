// +--------------------------------------------------
// | module - user
// +--------------------------------------------------
/**
 * 用户接口
 */
export interface IUser {
  id?: string // id
  username: string // 名称
  realName: string // 姓名
  email?: string // 邮箱
  mobile: string // 手机号
}