/**
 * sessionStorage
 */
export const session = {
  // 存储
  set: (params: any): void => {
    const { name, content, type } = params
    const obj = {
      dataType: typeof (content),
      content,
      type,
      datetime: Date.now()
    }
    // 直接放到sessionStorage
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  },
  // 获取
  get: (name: string): any => {
    let content: any
    const str: any = window.sessionStorage.getItem(name)
    if (!str) return
    const obj = JSON.parse(str)
    if (obj.dataType === 'string') {
      content = obj.content
    } else if (obj.dataType === 'number') {
      content = Number(obj.content)
    } else if (obj.dataType === 'object') {
      content = obj.content
    } else {
      content = obj.content
    }
    return content
  },
  // 删除
  remove: (name: string): void => {
    window.sessionStorage.removeItem(name)
  }
}

/**
 * 本地存储
 */
export const local = {
  // 存储
  set: (params: any): void => {
    const { name, content, type } = params
    const obj = {
      dataType: typeof (content),
      content,
      type,
      datetime: Date.now()
    }
    // 直接放到sessionStorage
    window.localStorage.setItem(name, JSON.stringify(obj))
  },
  // 获取
  get: (name: string): any => {
    let content: any
    const str: any = window.localStorage.getItem(name)
    if (!str) return
    const obj = JSON.parse(str)
    if (obj.dataType === 'string') {
      content = obj.content
    } else if (obj.dataType === 'number') {
      content = Number(obj.content)
    } else if (obj.dataType === 'object') {
      content = obj.content
    } else {
      content = obj.content
    }
    return content
  },
  // 删除
  remove: (name: string): void => {
    window.localStorage.removeItem(name)
  }
}
