import { h } from 'vue'
import { NButton, NSpace, NTag, NTime } from 'naive-ui'
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import type { IUser } from '@/type/interface/user'
import { EStatus } from '@/type/enum/common'
import { EType as ERoleType } from '@/type/enum/role'
import { STATUS_CONFIG } from '@/constants/common'
// +--------------------------------------------------
// | module - user
// +--------------------------------------------------
/**
 * 默认值
 * 表头
 */
export const DEFAULT_COLUMNS: DataTableColumns<IUser> = [
  {
    type: 'selection',
    width: 55,
    fixed: 'left'
  },
  {
    title: '用户名',
    key: 'username',
    fixed: 'left',
    minWidth: 200
  },
  {
    title: '角色',
    key: 'role',
    minWidth: 200
  },
  {
    title: '姓名',
    key: 'realName',
    minWidth: 200,
  },
  {
    title: '商品数量',
    key: 'commodityNum',
    minWidth: 200,
  },
  {
    title: '举报次数',
    key: 'complaintNum',
    minWidth: 200,
  },
  {
    title: '被举报次数',
    key: 'complainedNum',
    minWidth: 200,
  },
  {
    title: '状态',
    key: 'status',
    minWidth: 200,
    render(row: IUser) {
      return h(NTag, {
        type: STATUS_CONFIG[row.status]?.tag
      }, () => STATUS_CONFIG[row.status]?.label)
    }
  },
  {
    title: '创建时间',
    key: 'createTime',
    minWidth: 200,
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
    fixed: 'right',
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
