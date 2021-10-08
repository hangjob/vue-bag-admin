import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
 
const path = require('path');
const root = path.resolve(__dirname, 'src');
 
export default defineConfig({
    plugins: [vue()],
    root,
})