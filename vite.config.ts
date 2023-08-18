import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import requireTransform from 'vite-plugin-require-transform'
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
  plugins: [
    vue({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 8000, // 端口
  },
  define: {
    __TECH_NAME__: JSON.stringify(process.env.npm_package_name),
  },
})
