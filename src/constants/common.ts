import { EStatus } from '@/type/enum/common'
// +--------------------------------------------------
// | module - 公共
// +--------------------------------------------------

/**
 * 配置
 * 状态
 */
export const STATUS_CONFIG: { [K in EStatus]: any } = {
  [EStatus.START]: {
    label: '启用',
    tag: 'success'
  },
  [EStatus.STOP]: {
    label: '停用',
    tag: 'error'
  }
}
