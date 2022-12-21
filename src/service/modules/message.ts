import { getAction, postAction, putAction, deleteAction } from '@/service/apiServer'

export default {
  /**
   * 通知列表
   */
  getNotificationList: () => {
    const url = `/notification/list`
    return getAction(url)
  },

  /**
   * 消息列表
   */
  getMessageList: () => {
    const url = `/message/list`
    return getAction(url)
  },

  /**
   * 待办列表
   */
  getAgendaList: () => {
    const url = `/agenda/list`
    return getAction(url)
  }
}
