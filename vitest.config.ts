import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    exclude: [
      '**/*.stories.{js,jsx,ts,tsx}',
      '**/.storybook/**',
      'src/templates/**',
      'node_modules/**'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/.storybook/**',
        'src/templates/**',
        '**/types/**',
        '**/constants/**',
        '**/styles/**',
      ],
    },
  },
});