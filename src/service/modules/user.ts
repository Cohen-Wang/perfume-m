import { getAction } from '@/service/apiServer'

/**
 *
 * @param params
 */
export const getList = (params: any = {}): void => {
  const url = `/user/list`
  return getAction(url, { params })
}
