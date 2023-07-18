import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { viteStaticCopy } from "vite-plugin-static-copy";
import { name } from "./package.json";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
      }),
      viteStaticCopy({
        targets: [
          {
            src: './src/style/[!.]*',
            dest: './style', // 2️⃣
          },
        ],
      })
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name,
        formats: ['es', 'umd'],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
