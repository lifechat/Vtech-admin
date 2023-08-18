//声明外部npm外部模块
declare module 'js-cookie'

import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
  ComponentInternalInstance,
  readonly,
} from 'vue'

declare global {
  const __APP_INFO_: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }

  // 声明文件，定义全局变量
  /* eslint-disable */
  declare interface Window {
    nextLoading: boolean
    BMAP_SATELLITE_MAP: any
    BMap: any
  }

  // 声明一个模块，防止引入文件时报错
  declare module '*.json'
  declare module '*.png'
  declare module '*.jpg'
  declare module '*.svg'
  declare module '*.scss'
  declare module '*.ts'
  declare module '*.js'

  // vue 全局声明
  declare type PropType<T> = VuePropType<T>
  declare type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  declare type HtmlType = HTMLElement | string | undefined | null;


  declare type Recordable<T = any> = Record<string, T>

  declare interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
    VITE_USE_PWA: boolean
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_USE_CDN: boolean
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
    VITE_GENERATE_UI: string
  }

  // 声明 ref
  declare type RefType<T = any> = T | null
  // 申明 对象
  declare type EmptyObjectType<T = any> = {
    [key: string]: T
  }
  // 申明 数组
  declare type EmptyArrayType<T = any> = T[]

  declare function parseInt(s: string | number, radix?: number): number
  declare function parseFloat(string: string | number): number
  namespace JSX {
    type Element = VNode
    type ElementClass = ComponentRenderProxy
    interface ElementAttributesProperty {
      $props: any
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}

// 声明 HTMLElement

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentInternalInstance<props> }
    | FunctionalComponent<Props>
}
