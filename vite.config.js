import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({base:'./',plugins:[react()],build:{rollupOptions:{input:{gallery:resolve('index.html'),after:resolve('direction-1-after-the-storm.html'),report:resolve('direction-2-roof-report.html'),storm:resolve('direction-3-stormline.html'),clarity:resolve('direction-4-clarity.html')}}}});
