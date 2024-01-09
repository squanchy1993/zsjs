import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'index',
      formats: ['es', 'cjs', 'umd'],
      fileName: "index"
    },
  }
})
