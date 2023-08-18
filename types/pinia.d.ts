// TagsView 路由列表
declare interface TagsViewRoutesState<T = any> {
  tagsViewRoutes: T[]
  isTagsViewCurrenFull: boolean
}

// 布局配置
declare interface ThemeConfigState {
  themeConfig: {
    isDrawer: boolean
    primary: string
    topBar: string
    topBarColor: string
    isTopBarColorGradual: boolean
    menuBar: string
    menuBarColor: string
    menuBarActiveColor: string
    isMenuBarColorGradual: boolean
    columnsMenuBar: string
    columnsMenuBarColor: string
    isColumnsMenuBarColorGradual: boolean
    isColumnsMenuHoverPreload: boolean
    isCollapse: boolean
    isUniqueOpened: boolean
    isFixedHeader: boolean
    isFixedHeaderChange: boolean
    isClassicSplitMenu: boolean
    isLockScreen: boolean
    lockScreenTime: number
    isShowLogo: boolean
    isShowLogoChange: boolean
    isBreadcrumb: boolean
    isTagsview: boolean
    isBreadcrumbIcon: boolean
    isTagsviewIcon: boolean
    isCacheTagsView: boolean
    isSortableTagsView: boolean
    isShareTagsView: boolean
    isFooter: boolean
    isGrayscale: boolean
    isInvert: boolean
    isIsDark: boolean
    isWartermark: boolean
    wartermarkText: string
    tagsStyle: string
    animation: string
    columnsAsideStyle: string
    columnsAsideLayout: string
    layout: string
    isRequestRoutes: boolean
    globalTitle: string
    globalViceTitle: string
    globalViceTitleMsg: string
    globalI18n: string
    globalComponentSize: string
  }
}

// 路由列表
declare interface RoutesListState<T = any> {
  routesList: T[]
  isColumnsMenuHover: boolean
  isColumnsNavHover: boolean
}
