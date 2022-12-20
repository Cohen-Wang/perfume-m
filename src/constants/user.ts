import { h } from 'vue'
import { NButton } from 'naive-ui'
import { IUser } from '@/type/interface/user'
// +--------------------------------------------------
// | module - user
// +--------------------------------------------------
/**
 * 默认值
 * 表头
 */
export const DEFAULT_COLUMNS = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: '用户名',
    key: 'username'
  },
  {
    title: '姓名',
    key: 'realName'
  },
  {
    title: '操作',
    key: 'actions',
    render (row: IUser) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => {
            alert(row.key)
          }
        },
        { default: () => '编辑' }
      )
    }
  }
]

/**
 * 默认值
 * 用户数据
 */
export const DEFAULT_TABLE_DATA: IUser[] = [
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  }
]