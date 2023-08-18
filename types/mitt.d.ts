/**
 * mitt 事件类型定义
 *
 * @function openSetingsDrawer 打开布局设置弹窗
 * @function restoreDefault 分栏布局，鼠标移入、移出数据显示
 * @function setSendColumnsChildren 分栏布局，鼠标移入、移出菜单数据传入到 navMenu 下的菜单中
 * @function setSendClassicChildren 经典布局，开启切割菜单时，菜单数据传入到 navMenu 下的菜单中
 * @function getBreadcrumbIndexSetFilterRoutes 布局设置弹窗，开启切割菜单时，菜单数据传入到 navMenu 下的菜单中
 * @function layoutMobileResize 浏览器窗口改变时，用于适配移动端界面显示
 * @function openOrCloseSortable 布局设置弹窗，开启 TagsView 拖拽
 * @function openShareTagsView 布局设置弹窗，开启 TagsView 共用
 * @function onTagsViewRefreshRouterView tagsview 刷新界面
 * @function onCurrentContextmenuClick tagsview 右键菜单每项点击时
 */
declare type MittType<T = any> = {
  openSetingsDrawer?: string
  restoreDefault?: string
  setSendColumnsChildren: T
  setSendClassicChildren: T
  getBreadcrumbIndexSetFilterRoutes?: string
  layoutMobileResize: T
  openOrCloseSortable?: string
  openShareTagsView?: string
  onTagsViewRefreshRouterView?: T
  onCurrentContextmenuClick?: T
}

// mitt 参数类型定义
declare type LayoutMobileResize = {
  layout: string
  clientWidth: number
}

// mitt 参数菜单类型
declare type MittMenu = {
  children: RouteRecordRaw[]
  item?: RouteItem
}
