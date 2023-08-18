export enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 4,
  REDIRECT = 9,
}

export interface RequestOptions {
  isTransformRequestResult?: boolean
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean
  // Error message prompt type
  errorShowType?: ErrorShowType
  // Whether to add a timestamp
  ignoreCancelToken?: boolean

  showLoading?: boolean | string

  withToken?: boolean

  ignoreFamily?: boolean
}

export interface Result<T = any> {
  code: number
  msg?: string
  data: T
}
/**
 * @description:  contentType
 */

export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export interface UploadFileParams {
  // Other parameters
  data?: Record<string, any>
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 1,
  UNAUTHORIZED = 401,
  NOTFOUND = 404,
}
