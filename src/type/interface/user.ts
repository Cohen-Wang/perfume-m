import { EStatus } from '@/type/enum/common'
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
  status: EStatus // 状态
  email?: string // 邮箱
  mobile?: string // 手机号
  createTime: Date // 创建日期
  updateTime: Date // 修改
}
