import { h } from 'vue'
import { NButton, NSpace } from 'naive-ui'
import type { IUser } from '@/type/interface/user'
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
      return h(NSpace, null, [
        h(NButton, {
          text: true,
          tag: 'a',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '编辑' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '详情' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '停用' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '删除' },
        )
      ])
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
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
  {
    id: '1',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
  },
]