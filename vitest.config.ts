import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 10000,
    environment: 'jsdom',
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
    },
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['node_modules/**', 'dist/**'],
    setupFiles: [fileURLToPath(new URL('./vitest.setup.ts', import.meta.url))],
  },
})
