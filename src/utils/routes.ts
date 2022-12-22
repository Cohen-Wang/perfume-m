/**
 * 递归
 * 根据后端返回的角色的路由和前端写好的【全部】【动态路由】对比，获取出最终动态路由
 * @param roleRoutes Array 后端返回的路由配置
 * @param dynamicRoutes Array 前端全部动态路由配置
 * @return Array 最终动态路由
 */
export const recursionRoutes = (roleRoutes: Array<any> = [], dynamicRoutes: Array<any> = []): Array<any> => {
  let result: Array<any> = []
  dynamicRoutes.forEach((dynamicRoute: any) => {
    roleRoutes.forEach((roleRoute: any) => {
      if (roleRoute.meta.title === dynamicRoute.meta.title) {
        if (roleRoute.children && roleRoute.children.length) {
          dynamicRoute.children = recursionRoutes(roleRoute.children, dynamicRoute.children)
        }
        result.push(dynamicRoute)
      }
    })
  })
  return result
}

/**
 * 从route的matched 获取当前路由路径和名称
 * @param matched
 * @param init
 */
export const getBreadCrumbItems = (matched: Array<any>, init: Array<any> = []): Array<any> => {
  for (const index in matched) {
    if (matched[index].meta && matched[index].meta.title) {
      init.push({
        path: matched[index].path ? matched[index].path : '/',
        title: matched[index].meta.title
      })
    }
  }
  return init
}
