import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/**
 * @param dir
 */
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
      {
        find: '#',
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  server: {
    host: true,
    port: 8000, // 端口
    https: false,
    open: true, // 运行脚本自动打开游览器
    cors: true, //允许跨域
  },
})
