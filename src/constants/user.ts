import { h } from 'vue'
import { NButton, NSpace, NTag, NTime } from 'naive-ui'
import type { IUser } from '@/type/interface/user'
import { EStatus } from '@/type/enum/common'
// +--------------------------------------------------
// | module - user
// +--------------------------------------------------
/**
 * 默认值
 * 表头
 */
export const DEFAULT_COLUMNS = [
  {
    type: 'selection',
    width: 55
  },
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
    title: '状态',
    key: 'status',
    render(row: IUser) {
      return h(NTag, {
        type: 'success'
      }, () => row.status)
    }
  },
  {
    title: '创建时间',
    key: 'createTime',
    render(row: IUser) {
      return h(NTime, {
        time: row.createTime
      })
    }
  },
  {
    title: '修改时间',
    key: 'updateTime',
    render(row: IUser) {
      return h(NTime, {
        time: row.createTime
      })
    }
  },
  {
    title: '操作',
    key: 'actions',
    render (row: IUser) {
      return h(NSpace, null, [
        h(NButton, {
          text: true,
          tag: 'a',
          type: 'info',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '编辑' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          type: 'info',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '详情' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          type: 'info',
          onClick: () => {
            alert(row.id)
          }}, { default: () => '停用' },
        ),
        h(NButton, {
          text: true,
          tag: 'a',
          type: 'info',
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
    status: EStatus.START,
    createTime: Date.now(),
    updateTime: Date.now(),
  },
  {
    id: '2',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
    status: EStatus.START,
    createTime: Date.now(),
    updateTime: Date.now(),
  },
  {
    id: '3',
    username: 'zhangsan',
    realName: '张三',
    email: 'zhangsan@qq.com',
    mobile: '13612345678',
    status: EStatus.START,
    createTime: Date.now(),
    updateTime: Date.now(),
  }
]