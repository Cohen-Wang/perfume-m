import { EStatus } from '@/type/enum/common'
import { EType as ERoleType } from '@/type/enum/role'
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
  role: ERoleType // 角色类型
  email?: string // 邮箱
  mobile?: string // 手机号
  commodityNum: number // 商品数量
  complaintNum: number // 投诉次数
  complainedNum: number // 被投诉次数
  createTime: Date // 创建日期
  updateTime: Date // 修改
}
