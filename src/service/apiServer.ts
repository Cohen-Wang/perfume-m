import axiosInterceptor from '@/service/axiosInterceptor'

/**
 * GET
 * @param url
 * @param param
 * @returns {*}
 */
export const getAction = function(url: string = '', param: any = {}) {
  return axiosInterceptor.get(url, param)
}

/**
 * POST
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const postAction = function(url: string = '', data: any = {}, config: any = {}) {
  return axiosInterceptor.post(url, data, config)
}

/**
 * PUT
 * @param url
 * @param data
 * @param config
 * @returns {*}
 */
export const putAction = function(url: string = '', data: any = {}, config: any = {}) {
  return axiosInterceptor.put(url, data, config)
}

/**
 * DELETE
 * @param url
 * @param config
 * @returns {*}
 * post和put的第二个参数直接为data，第三个参数为config，但是delete第二个参数为config，所以传值时需要借助config中data字段，用data携带过去
 */
export const deleteAction = function(url: string = '', config: any = {}) {
  return axiosInterceptor.delete(url, config)
}
