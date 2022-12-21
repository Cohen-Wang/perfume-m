import { postAction } from '@/service/apiServer'

/**
 * 上传图片
 * @param formData
 */
export default (formData: FormData) => {
  const url = `/file/upload`

  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  return postAction(url, formData, config)
}
