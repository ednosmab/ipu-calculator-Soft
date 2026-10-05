import {resolve} from 'node:path'
import {defineConfig} from 'vite'

export default defineConfig({
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        injection: resolve(import.meta.dirname, 'pages/injection-page.html'),
        calibration: resolve(import.meta.dirname, 'pages/calibration-page.html')
    },
})